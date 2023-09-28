import { faker } from '@faker-js/faker';
import { format } from '@fast-csv/format';
import { parseFile } from '@fast-csv/parse';
import { createWriteStream } from 'fs';
import { DateTime } from 'luxon';

const ingestFileName = 'extracted-accounts.csv';
const oppyCSV = createWriteStream('oppies.csv');

const stream = format({ headers: true });
stream.pipe(oppyCSV);

export const createTheOppies = (startDate, endDate, userIds) => {
  // Build up account id and names from SF account export
  userIds
  let numberOfOppiesCreated = 0;
  const accountIdsAndNames = [];
  parseFile(ingestFileName)
    .on('error', (error) => console.error(error))
    .on('data', (row) => {
      const [ID, NAME] = row;
      const numberOfOpps = faker.number.int({ min: 1, max: 2 });
      if (ID !== 'ID') {
        numberOfOppiesCreated += numberOfOpps;
        accountIdsAndNames.push(
          buildOpps(numberOfOpps, NAME, ID, startDate, endDate, userIds)
        );
      }
    })
    .on('end', (rowCount) => {
      console.log(
        `finished creating opportunities: ${numberOfOppiesCreated} created`
      );
    });
};

const buildDumbName = (name) => {
  const extraOppyTitle = `${faker.company.catchPhraseAdjective()} ${faker.word.noun()}`;
  return `${name} - ${extraOppyTitle}`.replace(/(^|[\s-])\S/g, (match) =>
    match.toUpperCase()
  );
};

function buildOpps(amount, accountName, AccountId, startDate, endDate, userIds) {
  const types = [
    'Existing Customer - Upgrade',
    'Existing Customer - Replacement',
    'Existing Customer - Downgrade',
    'New Customer',
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
    const StageName = faker.helpers.weightedArrayElement(stages);
    const from = DateTime.fromSeconds(startDate);
    const end = DateTime.fromSeconds(endDate);
    // console.log(from.toISO());
    // console.log(end.toISO());
    const closeDateOptions =
      StageName === 'Closed Won' || StageName === 'Closed Lost'
        ? {
            from,
            to: DateTime.local().minus({ days: 1 }),
          }
        : {
            from: DateTime.local().plus({ days: 2 }),
            to: end,
          };
    // console.log({ foo: DateTime.local().minus({ days: 1 }) });
    const Name = buildDumbName(accountName);
    const CloseDate = faker.date.between(closeDateOptions).toISOString();
    stream.write({
      AccountId,
      CloseDate,
      Name,
      StageName,
      OwnerId: faker.helpers.arrayElement(userIds),
      Type: faker.helpers.arrayElement(types),
      Amount: faker.finance.amount(50000, 400000, 0),
    });
  }
}

// createTheOppies(['005Ho0000090mJaIAI', '005Ho0000090m2MIAQ']);
