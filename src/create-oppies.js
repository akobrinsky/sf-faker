import { faker } from '@faker-js/faker';
import { format } from '@fast-csv/format';
import { parse, parseFile } from '@fast-csv/parse';
import fs from 'fs'

const ingestFileName = 'accounts-export.csv';
const userIds = ['0058c000009k79eAAA']

const oppyCSV = fs.createWriteStream('oppies.csv');
const stream = format({ headers:true });
stream.pipe(oppyCSV);


// Build up account id and names from SF account export
const accountIdsAndNames = [];
parseFile(ingestFileName)
  .on('error', (error) => console.error(error))
  .on('data', (row) => {
    const [ID, NAME] = row
    const numberOfOpps = faker.number.int({ min: 1, max: 3 })
    if (ID !== 'ID') accountIdsAndNames.push(buildOpps(numberOfOpps, NAME, ID));
  })
  .on('end', (rowCount) => console.log(rowCount));

const buildDumbName = (name) =>
  `${name} - ${faker.word.preposition()} ${faker.word.noun()}`
    .toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');

function buildOpps(amount, accountName, accountId) {
  const result = [];
  const types = ['Existing Customer - Upgrade', 'Existing Customer - Replacement', 'Existing Customer - Downgrade', 'New Customer'];
  const stages = [
    { weight: 1, value: 'Prospecting' },
    { weight: 1, value: 'Qualification' },
    { weight: 1, value: 'Needs Analysis' },
    { weight: 1, value: 'Value Proposition' },
    { weight: 1, value: 'Perception Analysis' },
    { weight: 4, value: 'Closed Won' },
    { weight: 1, value: 'Closed Lost' },
  ];
  for (let i = 0; i < amount; i += 1) {
    const closeDate = faker.date.between({ from: '1/23/2021', to: '12/20/23' }).toISOString()
    stream.write({
      accountId,
      ownerId: faker.helpers.arrayElement(userIds),
      closeDate,
      name: buildDumbName(accountName),
      type: faker.helpers.arrayElement(types),
      stage: faker.helpers.weightedArrayElement(stages),
      amount: faker.finance.amount(50000, 400000, 0),
    });
  }
  return result;
}
