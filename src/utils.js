import { format } from '@fast-csv/format';
import { parseStream } from '@fast-csv/parse';
import { parseString } from '@fast-csv/parse';
import { parseFile } from '@fast-csv/parse';
import dotenv from 'dotenv';
import fs from 'fs'
dotenv.config();

const user1 = process.env.USER_ONE_ID;
const user2 = process.env.USER_TWO_ID;

const SF_APP_URL = process.env.SF_APP_URL;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

const USER_IDS = [user1];

if (user2) USER_IDS.push(user2);

const memoizeUnique = (callback) => {
  let store = {};
  return function (...args) {
    let result;
    do {
      result = callback(...args);
      const key = JSON.stringify(args) + JSON.stringify(result);
      if (!store.hasOwnProperty(key)) {
        store[key] = result;
        break;
      }
    } while (true);
    return result;
  };
};

const processAndWriteFile = (data, fileName) => {
  // const stream = format({ headers: true });
  // stream.pipe(fileName);
  
  parseString(data)
  .on('error', (error) => console.error(error))
  .on('data', (row) => {
    const [ID, ERROR, FOO] = row;
    console.log(ID, ERROR, FOO);
  })
  .on('end', (rowCount) => {
    console.log(`${rowCount} account rows processed`);
  });
}

export { USER_IDS, memoizeUnique, SF_APP_URL, ACCESS_TOKEN, processAndWriteFile };
