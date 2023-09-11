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
  user: {
    query: `SELECT Id FROM User WHERE Email LIKE '%${EMAIL_DOMAIN}'`,
    file: 'user-ids.csv',
  },
  account: {
    query: 'SELECT ID FROM Account',
    file: 'account-ids.csv',
  },
};

export class BulkStuff {
  constructor() {
    this.jobId = null;
    this.results = null;
    this.job = null;
    this.userIDs = null
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
      console.log(data.state);
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
      const { data } = await axios.get(
        `/services/data/v58.0/jobs/query/${this.jobId}/results`
      );
      processAndWriteFile(data, queryAndFileLookup[table].file);
      const ids = await getIDsFromCSV(queryAndFileLookup[table].file);
      if (table === 'account') this.accountId = ids
      if (table === 'user') this.userIDs = ids
      readAndWriteByProperty(table, ids);
    } catch (err) {
      errorWrapper(err);
    }
  }

  async createJob(table) {
    try {
      const body = JSON.stringify({
        object: 'Account',
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

  async insertAccounts() {
    try {
      const url = this.job.contentUrl;
      await axios.put(url, fs.createReadStream('./accounts-one.csv'), {
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

  async failedResults() {
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
  // return fetch(url, {
  //   method: 'GET',
  //   duplex: 'half',
  //   headers: {
  //     'Content-Type': 'text/csv',
  //   },
  // })
  //   .then((res) => {
  //     return res.json();
  //   })
  //   .then((res) => {
  //     return res;
  //   })
  //   .catch((err) => console.log(err));
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

// const result = await listObjectInfo('acount')
// processAndWriteFile(result.data, 'errors.csv');
// const closeResult = await insertAccounts(jobResult);
// console.log(closeResult);

// const foo = await closeJob(jobResult.id)
// console.log(foo);

// const { data } = await failedResults('750Dn000007Xo0h');
// const result = await listObjectInfo('acount')
// processAndWriteFile(result.data, 'errors.csv');
// const Foo = new BulkStuff();

// await Foo.loginToSalesforce('aryeh+sf+full1@crossbeam.com');
// await Foo.setupEnvironment('aryeh+sf+full1@crossbeam.com');
// const result = await Foo.createJob();
// const blah = await Foo.insertAccounts();
// const whatever = await Foo.completeInsertJob();
// const failed = await Foo.failedResults();
// console.log(failed);
