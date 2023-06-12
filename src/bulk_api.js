import axios from 'axios';
import { ACCESS_TOKEN, SF_APP_URL, processAndWriteFile } from './utils.js';
import fs from 'fs';
const createJob = async () => {
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
};

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
    console.log(err);
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

const listObjectInfo = async (object) => {
  const url = `/services/data/v58.0/sobjects/${object}/describe`;
  return fetch(url, {
    method: 'GET',
    duplex: 'half',
    headers: {
      'Content-Type': 'text/csv',
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
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

// const jobResult = await createJob();
// console.log(jobResult);

// const closeResult = await insertAccounts(jobResult);
// console.log(closeResult);

// const foo = await closeJob(jobResult.id)
// console.log(foo);

// const objets = await listObjectInfo('account')
// console.log(res);
// console.log(objets.fields.map(obj => obj.name));
// console.log(ACCESS_TOKEN);
const { data } = await failedResults('750Dn000007Xo0h');
processAndWriteFile(data, 'errors.csv');
