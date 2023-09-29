import axios from 'axios';
import {
  EMAIL_DOMAIN,
  processAndWriteFile,
  getIDsFromCSV,
  errorWrapper,
  readAndWriteByProperty,
} from './utils.js';
import fs from 'fs';
import { createAccounts } from './create-accounts.js';
import { createTheOppies } from './create-oppies.js';
import { exec, spawn } from 'child_process';
import { createTheContacts } from './create-contacts.js';
import { createTheLeads } from './create-leads.js';
import cfonts from 'cfonts';

const cfontSettings = {
  align: 'center', // define text alignment
  letterSpacing: 1, // define letter spacing
  lineHeight: 2, // define the line height
  space: true, // define if the output text should have empty lines on top and on the bottom
  gradient: '#306674,#F23251', // define your two gradient colors
  transitionGradient: true, // define if this is a transition between colors directly
}

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const queryAndFileLookup = {
  User: {
    query: `SELECT Id FROM User WHERE Email LIKE '%${EMAIL_DOMAIN}'`,
    file: 'user-ids.csv',
  },
  Account: {
    query: 'SELECT ID, Name, Website FROM Account',
    idQuery: 'SELECT ID FROM Account',
    file: 'extracted-accounts.csv',
  },
  Lead: {
    idQuery: 'SELECT ID FROM Lead',
    file: 'extracted-leads.csv',
  },
  Contact: {
    query: 'SELECT ID FROM Contact',
    file: 'extracted-contacts.csv',
  },
  Opportunity: {
    idQuery: 'SELECT ID FROM Opportunity',
    file: 'extracted-oppies.csv',
  },
  Case: {
    idQuery: 'SELECT ID FROM Case',
    file: 'extracted-cases.csv',
  },
};

export class ShmemoDeams {
  constructor() {
    this.jobId = null;
    this.results = null;
    this.job = null;
    this.userIDs = null;
  }

  async createQueryJob(query) {
    try {
      const { data } = await axios.post(`/services/data/v58.0/jobs/query`, {
        operation: 'query',
        query,
      });
      this.jobId = data.id;
      return data;
    } catch (err) {
      console.log(err.message);
    }
  }

  async loginToSalesforce() {
    return new Promise((resolve) => {
      const query = `sfdx org login web`;
      exec(query, (error, stdout, stderr) => {
        if (error) {
          console.error(error);
          return;
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
        }

        console.log(stdout);

        resolve();
      });
    });
  }

  async releaseTheParrot() {
    spawn('terminal-parrot -delay 50', { shell: true, stdio: 'inherit' });
  }

  async setupEnvironment(email) {
    return new Promise((resolve) => {
      const query = `sfdx org:display -o ${email} --json`;
      exec(query, (error, stdout, stderr) => {
        if (error) {
          console.error(error);
          return;
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
        }
        const { result } = JSON.parse(stdout);
        
        const { accessToken, instanceUrl, username } = result;
        const name = username.split(/[\+@]/)?.at(0);
        if (name.length) {
          cfonts.say(`oh hi, ${name}!`, {
            ...cfontSettings
          });
        }

        const authBearer = `Bearer ${accessToken}`;
        axios.defaults.baseURL = instanceUrl;
        axios.defaults.headers = {
          Authorization: authBearer,
        };
        resolve();
      });
    });
  }

  async checkJob(table) {
    try {
      const { data } = await axios.get(
        `/services/data/v58.0/jobs/query/${this.jobId}`
      );
      console.log(`Checking ${table} job progress: ${this.jobId}`);
      if (data.state !== 'JobComplete') {
        await timeout(500);
        await this.checkJob(table);
      } else {
        await this.getJobResults(table);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async checkJobProgress() {
    try {
      const { data } = await axios.get(
        `/services/data/v58.0/jobs/ingest/${this.job.id}`
      );
      console.log(`checking ingest job progress: ${this.job.id}`);
      if (data.state !== 'JobComplete') {
        await timeout(500);
        return this.checkJobProgress();
      }
      return data.state;
    } catch (err) {
      console.log(err);
    }
  }

  async getJobResults(table) {
    try {
      const { data, headers } = await axios.get(
        `/services/data/v58.0/jobs/query/${this.jobId}/results`
      );
      // console.log(headers);
      processAndWriteFile(data, queryAndFileLookup[table].file);
      const locator = headers['sforce-locator'];
      // TODO - append to same csv
      // if (locator !== null) {
      //   const { data, headers } = await axios.get(
      //     `/services/data/v58.0/jobs/query/${this.jobId}/results?locator=${locator}`
      //   );
      //   processAndWriteFile(data, 'accounts-nextbatch.csv');
      // }
      const ids = await getIDsFromCSV(queryAndFileLookup[table].file);
      if (table === 'Account') this.accountId = ids;
      if (table === 'User') this.userIDs = ids;
    } catch (err) {
      errorWrapper(err);
    }
  }

  async createJob(table) {
    try {
      const body = JSON.stringify({
        object: table,
        contentType: 'CSV',
        operation: 'insert',
        lineEnding: 'LF',
      });
      const { data } = await axios.post(
        '/services/data/v58.0/jobs/ingest/',
        body,
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'X-PrettyPrint': '1',
          },
        }
      );
      this.job = data;
      return data;
    } catch (err) {
      errorWrapper(err);
    }
  }

  async createDeleteJob(table) {
    try {
      const body = JSON.stringify({
        object: table,
        contentType: 'CSV',
        operation: 'hardDelete',
        lineEnding: 'LF',
      });
      const { data } = await axios.post(
        '/services/data/v58.0/jobs/ingest/',
        body,
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'X-PrettyPrint': '1',
          },
        }
      );
      this.job = data;
      return data;
    } catch (err) {
      errorWrapper(err);
    }
  }

  async closeJob(id) {
    const body = JSON.stringify({ state: 'UploadComplete' });
    try {
      const url = `/services/data/v58.0/jobs/ingest/${id}/`;
      const { data } = await axios.patch(url, body, {
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
          Accept: 'application/json',
          'X-PrettyPrint': '1',
        },
      });
      return data;
    } catch (err) {
      errorWrapper(err);
    }
  }

  async uploadFile(file) {
    try {
      const url = this.job.contentUrl;
      await axios.put(url, fs.createReadStream(file), {
        headers: {
          'Content-Type': 'text/csv',
          Accept: 'application/json',
        },
      });
    } catch (err) {
      errorWrapper(err);
    }
  }

  async completeInsertJob() {
    const body = JSON.stringify({ state: 'UploadComplete' });

    try {
      const url = `/services/data/v58.0/jobs/ingest/${this.job.id}/`;
      const foo = await axios.patch(url, body, {
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
          Accept: 'application/json',
        },
      });
      return foo;
    } catch (err) {
      errorWrapper(err);
    }
  }

  async failedResults(id) {
    const url = `/services/data/v58.0/jobs/ingest/${id}/failedResults/`;
    try {
      const foo = await axios.get(url, {
        headers: {
          'Content-Type': 'text/csv',
        },
      });
      return foo;
    } catch (err) {
      console.log(err);
    }
  }

  async getBatchResults(id) {
    const url = `/services/data/v58.0/jobs/ingest/${id}/failedResults/`;
    try {
      const foo = await axios.get(url, {
        headers: {
          'Content-Type': 'text/csv',
        },
      });
      return foo;
    } catch (err) {
      errorWrapper(err);
    }
  }

  async purgeAllOfTheThings() {
    //  Lead
    await this.createQueryJob(queryAndFileLookup.Lead.idQuery);
    await this.checkJob('Lead');
    await this.createDeleteJob('Lead');
    await this.uploadFile(queryAndFileLookup.Lead.file);
    await this.completeInsertJob();
    console.log('All Leads have been deleted');

    //  Opportunity
    await this.createQueryJob(queryAndFileLookup.Opportunity.idQuery);
    await this.checkJob('Opportunity');
    await this.createDeleteJob('Opportunity');
    await this.uploadFile(queryAndFileLookup.Opportunity.file);
    await this.completeInsertJob();
    console.log('All Oppies have been deleted');

    //  Case
    await this.createQueryJob(queryAndFileLookup.Case.idQuery);
    await this.checkJob('Case');
    await this.createDeleteJob('Case');
    await this.uploadFile(queryAndFileLookup.Case.file);
    await this.completeInsertJob();
    console.log('All Cases have been deleted');

    //  Contact
    await this.createQueryJob(queryAndFileLookup.Contact.query);
    await this.checkJob('Contact');
    await this.createDeleteJob('Contact');
    await this.uploadFile(queryAndFileLookup.Contact.file);
    await this.completeInsertJob();
    console.log('All Contacts have been deleted');

    //  Account
    await this.createQueryJob(queryAndFileLookup.Account.idQuery);
    await this.checkJob('Account');
    await this.createDeleteJob('Account');
    await this.uploadFile(queryAndFileLookup.Account.file);
    await this.completeInsertJob();
    console.log('All Accounts have been deleted');
  }

  async createAndUploadAccounts(amount = 500) {
    // extract userids to map to accounts
    await this.createQueryJob(queryAndFileLookup.User.query);
    await this.checkJob('User');

    // write the accounts to csv with mapped user ids
    createAccounts(amount, this.userIDs);

    // upload 'em
    await this.createJob('Account');
    await this.uploadFile('./accounts-one.csv');
    await this.completeInsertJob();

    const foo = await this.checkJobProgress();

    if (foo) {
      await this.createAndUploadOppiesAndAccounts();
      await this.createAndUploadContacts();
      await this.createAndUploadLeads();
      cfonts.say(`LFG!!!!!`, {
        ...cfontSettings
      });
      await timeout(3000)
      this.releaseTheParrot()
    }
  }

  async createAndUploadOppiesAndAccounts() {
    await this.createQueryJob(queryAndFileLookup.Account.query);
    await this.checkJob('Account');

    // write the accounts to csv with mapped user ids
    createTheOppies(1664376515, 1727534915, this.userIDs);

    // upload 'em
    await this.createJob('Opportunity');
    await this.uploadFile('./oppies.csv');
    await this.completeInsertJob();

    const foo = await this.checkJobProgress();
    if (foo) {
      console.log('Finished processing opportunity ingest', foo);
    }
  }

  async uploadOppies(start, end) {
    // extract userids to map to accounts
    await this.createQueryJob(queryAndFileLookup.User.query);
    await this.checkJob('User');

    await this.createQueryJob(queryAndFileLookup.Account.query);
    await this.checkJob('Account');

    // upload 'em
    await this.createJob('Opportunity');
    await this.uploadFile('./oppies.csv');
    await this.completeInsertJob();

    const foo = await this.checkJobProgress();
    if (foo) {
      console.log('Finished processing opportunity ingest', foo);
    }
  }

  async createAndUploadContacts() {
    // write the accounts to csv with mapped user ids
    createTheContacts(this.userIDs);

    // upload 'em
    await this.createJob('Contact');
    await this.uploadFile('./contacts.csv');
    await this.completeInsertJob();

    const foo = await this.checkJobProgress();
    if (foo) {
      console.log('Finished processing contact ingest');
    }
  }
  async createAndUploadLeads() {
    // write the accounts to csv with mapped user ids
    createTheLeads(this.userIDs);

    // upload 'em
    await this.createJob('Lead');
    await this.uploadFile('./leads.csv');
    await this.completeInsertJob();

    const foo = await this.checkJobProgress();
    if (foo) {
      console.log('Finished processing lead ingest');
    }
  }
}

const listObjectInfo = async (object, query) => {
  try {
    const url = `/services/data/v58.0/sobjects/${object}/describe`;
    return axios.get(url, {
      headers: {
        'Content-Type': 'text/csv',
      },
      body: {
        query,
        operation: 'query',
      },
    });
  } catch (err) {
    console.log(err);
  }
};
const failedResults = async (id) => {
  const url = `/services/data/v58.0/jobs/ingest/${this.job.id}/failedResults/`;
  try {
    const foo = await axios.get(url, {
      headers: {
        'Content-Type': 'text/csv',
      },
    });
    return foo;
  } catch (err) {
    console.log(err);
  }
};

const Foo = new ShmemoDeams();
Foo.releaseTheParrot()
// await Foo.loginToSalesforce('aryeh+sf+full+bob@crossbeam.com');
await Foo.setupEnvironment('aryeh+sf+full+bob@crossbeam.com');
// await Foo.createAndUploadAccounts();
// await Foo.purgeAllOfTheThings();
// const failed = await Foo.getBatchResults('750Ho00000SU7CO');
// console.log(failed);
