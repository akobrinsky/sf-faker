import axios from 'axios';
import {
  EMAIL_DOMAIN,
  processAndWriteFile,
  getIDsFromCSV,
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
      console.log(table);
      processAndWriteFile(data, queryAndFileLookup[table].file);
      await getIDsFromCSV(queryAndFileLookup[table].file);
    } catch (err) {
      console.log(err);
    }
  }

  async createJob() {
    const url = SF_APP_URL + '/services/data/v58.0/jobs/ingest/';
    const authBearer = `Bearer ${ACCESS_TOKEN}`;
    try {
      return fetch(url, {
        method: 'POST',
        headers: {
          Authorization: authBearer,
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'X-PrettyPrint': '1',
        },
        body: JSON.stringify({
          object: 'Account',
          contentType: 'CSV',
          operation: 'insert',
          lineEnding: 'LF',
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          return res;
        });
    } catch (err) {
      console.log(err);
    }
  }
}

const closeJob = async (id) => {
  const url = SF_APP_URL + '/services/data/v58.0/jobs/ingest/' + id + '/';
  const authBearer = `Bearer ${ACCESS_TOKEN}`;
  try {
    return fetch(url, {
      method: 'PATCH',
      headers: {
        Authorization: authBearer,
        'Content-Type': 'application/json; charset=UTF-8',
        Accept: 'application/json',
        'X-PrettyPrint': '1',
      },
      body: JSON.stringify({ state: 'UploadComplete' }),
    })
      .then((res) => res.json())
      .then((res) => {
        return res;
      });
  } catch (err) {
    console.log(err.message);
  }
};

const insertAccounts = async (jobResult) => {
  const url = SF_APP_URL + '/' + jobResult.contentUrl;
  const authBearer = `Bearer ${ACCESS_TOKEN}`;
  return fetch(url, {
    method: 'PUT',
    duplex: 'half',
    headers: {
      Authorization: authBearer,
      'Content-Type': 'text/csv',
      Accept: 'application/json',
    },
    body: fs.createReadStream('./accounts-one.csv'),
  })
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
};

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
};

// const result = await listObjectInfo('acount')
// processAndWriteFile(result.data, 'errors.csv');
// const closeResult = await insertAccounts(jobResult);
// console.log(closeResult);

// const foo = await closeJob(jobResult.id)
// console.log(foo);

// const objets = await listObjectInfo('account')
// console.log(res);
// console.log(objets.fields.map(obj => obj.name));
// console.log(ACCESS_TOKEN);
// const { data } = await failedResults('750Dn000007Xo0h');
// const result = await listObjectInfo('acount')
// processAndWriteFile(result.data, 'errors.csv');
// const Foo = new BulkStuff();
// await Foo.setupEnvironment('aryeh+sf+full1@crossbeam.com');
// await Foo.createQueryJob('SELECT Id, Name FROM Account');
// get and set user ids
// await Foo.createQueryJob(queryAndFileLookup.user.query);
// await Foo.checkJob('user');

// Write new Accounts to csv
// createAccounts();

// Upload new accounts
// await Foo.createQueryJob(queryAndFileLookup.account.query);
// await Foo.checkJob('account');
