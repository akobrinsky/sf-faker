import { format } from '@fast-csv/format';
import { parseString, parseFile } from '@fast-csv/parse';
import { createWriteStream, readFileSync, writeFileSync } from 'fs';
import dotenv from 'dotenv';
dotenv.config();

const EMAIL_DOMAIN = process.env.EMAIL_DOMAIN;

const USER_IDS = [];

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
  const stream = format({ headers: true });
  stream.pipe(createWriteStream(fileName));

  parseString(data, { headers: true })
    .on('error', (error) => console.error(error))
    .on('data', (row) => stream.write(row))
    .on('end', (rowCount) => {
      stream.end();
      console.log(`${rowCount} rows written to ${fileName}`);
    });
};

const getIDsFromCSV = (csv) => {
  return new Promise((resolve, reject) => {
    const result = [];
    parseFile(csv)
      .on('error', (error) => console.error(error))
      .on('data', (row) => {
        const [ID] = row;
        if (ID.toLowerCase() !== 'id') USER_IDS.push(ID);
      })
      .on('end', (rowCount) => {
        console.log(`${rowCount - 1} id rows processed`);
        resolve(result);
      });
  });
};

function writeContacts(amount, accountId, url) {
  for (let i = 0; i < amount; i += 1) {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    const email =
      firstName.toLowerCase()[0] + lastName.toLowerCase() + `@${url}`;
    const birthdate = faker.date
      .between({
        from: DateTime.local().minus({ years: 55 }),
        to: DateTime.local().minus({ years: 30 }),
      })
      .toISOString();
    const payload = {
      accountId,
      birthdate,
      firstName,
      lastName,
      email,
      assistantName: faker.person.fullName(),
      title: faker.person.jobTitle(),
      phone: faker.phone.number('###-###-####'),
      assistantPhone: faker.phone.number('###-###-####'),
    };
    stream.write(payload);
  }
}

const readAndWriteByProperty = (
  property,
  value,
  filename = './credentials.json'
) => {
  const current = JSON.parse(readFileSync(filename));
  current[property] = value;
  writeFileSync(filename, JSON.stringify(current));
  return current;
};

// const writeByProperty = (property, filename = './credentials.json') => {
//   const current = JSON.parse(readFileSync(filename))
//   return current[property]
// }

const errorWrapper = (error) => {
  console.log({
    message: error.message,
    data: error.response.data,
    status: error.response.status,
  });
};


export {
  USER_IDS,
  memoizeUnique,
  EMAIL_DOMAIN,
  processAndWriteFile,
  getIDsFromCSV,
  errorWrapper,
  readAndWriteByProperty,
};
