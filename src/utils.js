import { format } from '@fast-csv/format';
import { parseString } from '@fast-csv/parse';
import { createWriteStream } from 'fs';
import dotenv from 'dotenv';
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
  const stream = format({ headers: true });
  stream.pipe(createWriteStream(fileName));

  parseString(data, { headers: true })
    .on('error', (error) => console.error(error))
    .on('data', (row) => stream.write(row))
    .on('end', (rowCount) => {
      stream.end();
      console.log(`${rowCount} account rows processed`);
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

export {
  USER_IDS,
  memoizeUnique,
  SF_APP_URL,
  ACCESS_TOKEN,
  processAndWriteFile,
};
