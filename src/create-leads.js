import { faker } from '@faker-js/faker';
import { format } from '@fast-csv/format';
import { parseFile } from '@fast-csv/parse';
import { createWriteStream } from 'fs';
import { USER_IDS } from './utils.js';
import { DateTime } from 'luxon';

const ingestFileName = 'accounts-nextbatch.csv';
const oppyCSV = createWriteStream('leads.csv');

const stream = format({ headers: true });
stream.pipe(oppyCSV);

faker.seed(120);

const industries = [
  'Agriculture',
  'Apparel',
  'Banking',
  'Biotechnology',
  'Chemicals',
  'Communications',
  'Construction',
  'Consulting',
  'Education',
  'Electronics',
  'Energy',
  'Engineering',
  'Entertainment',
  'Environmental',
  'Finance',
  'Government',
  'Healthcare',
  'Hospitality',
  'Insurance',
  'Machinery',
  'Manufacturing',
  'Media',
  'Recreation',
  'Retail',
  'Shipping',
  'Technology',
  'Telecommunications',
  'Transportation',
];

let numberOfContactsCreated = 0;
parseFile(ingestFileName)
  .on('error', (error) => console.error(error))
  .on('data', (row) => {
    const [accountId, AccountName, accountDomain] = row;
    if (accountId !== 'ID') {
      faker.helpers.maybe(
        () => writeContacts(AccountName, accountDomain),
        { probability: 0.30 }
      );
    }
  })
  .on('end', (rowCount) => {
    console.log(`${rowCount} account rows processed`);
    console.log(
      `finished creating leads: ${rowCount} created`
    );
  });

function writeContacts(AccountName, url) {
  const FirstName = faker.person.firstName();
  const LastName = faker.person.lastName();

  const Email = FirstName.toLowerCase()[0] + LastName.toLowerCase() + `@${url}`;

  const payload = {
    FirstName,
    LastName,
    Email,
    Company: AccountName,
    Industry: faker.helpers.arrayElement(industries),
    OwnerId: faker.helpers.arrayElement(USER_IDS),
    Title: faker.person.jobTitle(),
    Phone: faker.phone.number('###-###-####'),
  };
  stream.write(payload);
}
