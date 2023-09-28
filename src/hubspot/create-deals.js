import { faker } from '@faker-js/faker';
import { format } from '@fast-csv/format';
import { parseFile } from '@fast-csv/parse';
import { createWriteStream } from 'fs';
import { USER_IDS } from '../utils.js';
import { DateTime } from 'luxon';

const ingestFileName = 'extracted-accounts.csv';
const oppyCSV = createWriteStream('hs-deals.csv');

const stream = format({ headers: true });
stream.pipe(oppyCSV);



// Build up account id and names from SF account export
let numberOfOppiesCreated = 0;
const accountIdsAndNames = [];
parseFile(ingestFileName)
  .on('error', (error) => console.error(error))
  .on('data', (row) => {
    const [ID, NAME] = row;
    const numberOfOpps = faker.number.int({ min: 1, max: 2 });
    numberOfOppiesCreated += numberOfOpps
    if (ID !== 'ID') accountIdsAndNames.push(buildOpps(numberOfOpps, NAME, ID));
  })
  .on('end', (rowCount) => {
    console.log(`${rowCount} account rows processed`);
    console.log(
      `finished creating opportunities: ${numberOfOppiesCreated} created`
    );
  });

const buildDumbName = (name) => {
  const extraOppyTitle = `${faker.company.catchPhraseAdjective()} ${faker.word.noun()}`
  return `${name} - ${extraOppyTitle}`.replace(/(^|[\s-])\S/g, (match) => match.toUpperCase())
};

function buildOpps(amount, accountName, AccountId) {
  const types = [
    'New Business',
    'Existing Business'
  ];
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
    const DealStage = faker.helpers.weightedArrayElement(stages);
    const closeDateOptions = DealStage === 'Closed Won' || DealStage === 'Closed Lost'
      ? {
          from: DateTime.local().minus({ years: 2 }),
          to: DateTime.local().minus({ days: 1 }),
        }
      : {
          from: DateTime.local().plus({ days: 2 }),
          to: DateTime.local().plus({ years: 2 }),
        };
    const DealName = buildDumbName(accountName)
    const CloseDate = faker.date.between(closeDateOptions).toISOString();
    stream.write({
      // AccountId,
      CloseDate, // closedate
      DealName, // dealname
      DealStage, // dealstage
      OwnerId: faker.helpers.arrayElement(USER_IDS), // hubspot_owner_id
      Type: faker.helpers.arrayElement(types), // dealtype
      Amount: faker.finance.amount(50000, 400000, 0), // amount
    });
  }
}
