import { faker } from '@faker-js/faker';
import { format } from '@fast-csv/format';
import { parseFile } from '@fast-csv/parse';
import { createWriteStream } from 'fs';
import { USER_IDS } from './utils.js';

const ingestFileName = 'extracted-accounts.csv';
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

export const createTheLeads = (userIds) => {
  parseFile(ingestFileName)
    .on('error', (error) => console.error(error))
    .on('data', (row) => {
      const [accountId, AccountName, accountDomain] = row;
      if (accountId !== 'ID') {
        faker.helpers.maybe(() => writeLeads(AccountName, accountDomain, userIds), {
          probability: 0.3,
        });
      }
    })
    .on('end', () => {
      console.log(`Finished creating leads`);
    });
};

function writeLeads(AccountName, url, userIds) {
  const FirstName = faker.person.firstName();
  const LastName = faker.person.lastName();

  const Email = FirstName.toLowerCase()[0] + LastName.toLowerCase() + `@${url}`;

  const payload = {
    FirstName,
    LastName,
    Email,
    Company: AccountName,
    Industry: faker.helpers.arrayElement(industries),
    OwnerId: faker.helpers.arrayElement(userIds),
    Title: faker.person.jobTitle(),
    Phone: faker.phone.number('###-###-####'),
  };
  stream.write(payload);
}
