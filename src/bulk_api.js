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
import { exec } from 'child_process';

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

export class BulkStuff {
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

        const { accessToken, instanceUrl } = JSON.parse(stdout).result;

        const authBearer = `Bearer ${accessToken}`;
        console.log({ accessToken, instanceUrl });
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
      console.log(data);
      if (data.state !== 'JobComplete') await this.checkJob(table);
      else {
        await this.getJobResults(table);
      }
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
      // readAndWriteByProperty(table, ids);
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

    //  Opportunity
    await this.createQueryJob(queryAndFileLookup.Opportunity.idQuery);
    await this.checkJob('Opportunity');
    await this.createDeleteJob('Opportunity');
    await this.uploadFile(queryAndFileLookup.Opportunity.file);
    await this.completeInsertJob();

    //  Case
    await this.createQueryJob(queryAndFileLookup.Case.idQuery);
    await this.checkJob('Case');
    await this.createDeleteJob('Case');
    await this.uploadFile(queryAndFileLookup.Case.file);
    await this.completeInsertJob();

    //  Contact
    await this.createQueryJob(queryAndFileLookup.Contact.query);
    await this.checkJob('Contact');
    await this.createDeleteJob('Contact');
    await this.uploadFile(queryAndFileLookup.Contact.file);
    await this.completeInsertJob();

    //  Account
    await this.createQueryJob(queryAndFileLookup.Account.idQuery);
    await this.checkJob('Account');
    await this.createDeleteJob('Account');
    await this.uploadFile(queryAndFileLookup.Account.file);
    await this.completeInsertJob();
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

// const Foo = new BulkStuff();

// await Foo.loginToSalesforce('aryeh+sf+full+bob@crossbeam.com');

// const failed = await Foo.getBatchResults('750Ho00000SU7CO');
// console.log(failed);

// await Foo.closeJob(Foo.job.id)
// await Foo.createDeleteJob('Opportunity');
// await Foo.createDeleteJob('Opportunity');
// await Foo.createDeleteJob('Account');
// await Foo.createQueryJob(queryAndFileLookup.Lead.query);
// await Foo.checkJob('Lead');
