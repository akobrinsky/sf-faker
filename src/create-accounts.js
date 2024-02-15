import { faker } from '@faker-js/faker';
import { format } from '@fast-csv/format';
import { createWriteStream } from 'fs';
import companies from './real-companies.js';
import { UniqueEnforcer } from 'enforce-unique';

let uniqueCompanyName = null;

const seedAccountsHelper = (amount, arr, seed, userIds) => {
  faker.seed(seed);
  uniqueCompanyName = new UniqueEnforcer();

  for (let i = 0; i < amount; i += 1) {
    arr.push(createRandomAccount(userIds));
  }
  uniqueCompanyName = null;
};

function createRandomAccount(userIds) {
  const accountTypes = [
    'Prospect',
    'Customer - Channel',
    'Customer - Direct',
    'Technology Partner',
    'Other',
  ];
  const company = uniqueCompanyName.enforce(() => {
    return faker.helpers.arrayElement(companies);
  });

  const ratingTypes = ['Hot', 'Warm', 'Cold'];
  const slaTypes = ['Gold', 'Silver', 'Platinum', 'Bronze'];
  const CustomerPriority__c = ['High', 'Low', 'Medium'];
  const UpsellOpportunity__c = ['Maybe', 'No', 'Yes'];

  const BillingStreet = faker.location.streetAddress(false);
  const BillingCity = faker.location.city();
  const BillingState = faker.location.state();
  const BillingPostalCode = faker.location.zipCode();
  const BillingCountry = 'United States';

  return {
    Name: company.name,
    Website: company.domain,
    OwnerId: faker.helpers.arrayElement(userIds),
    Type: faker.helpers.arrayElement(accountTypes),
    Rating: faker.helpers.arrayElement(ratingTypes),
    Phone: faker.phone.number('###-###-###'),
    SLA__c: faker.helpers.arrayElement(slaTypes),
    UpsellOpportunity__c: faker.helpers.arrayElement(UpsellOpportunity__c),
    CustomerPriority__c: faker.helpers.arrayElement(CustomerPriority__c),
    NumberOfEmployees: faker.number.int({ min: 100, max: 3000 }),
    BillingStreet,
    BillingCity,
    BillingState,
    BillingPostalCode,
    BillingCountry,
    AnnualRevenue: faker.finance.amount({
      min: 1000000,
      max: 20000000,
      dec: 0,
    }),
  };
}
// aryeh+sf+full+bob@crossbeam.com
export const createAccounts = (
  numAccounts,
  userIds,
  sfInstance,
  seed
) => {
  const TOTAL_ACCOUNTS = numAccounts;
  const TOTAL_ACCOUNT_TWO = Math.floor(TOTAL_ACCOUNTS * 0.5);
  const TOTAL_ACCOUNT_THREE = Math.floor(TOTAL_ACCOUNTS * 0.3);

  const accountRows = [];

  switch (sfInstance) {
    case 'one':
      // fills in all of the things
      seedAccountsHelper(TOTAL_ACCOUNTS, accountRows, seed, userIds);
      break;
    case 'two':
      // fills in half of the things
      seedAccountsHelper(TOTAL_ACCOUNT_TWO, accountRows, seed, userIds);
      break;
    case 'three':
      // fills in 30% of the things
      seedAccountsHelper(TOTAL_ACCOUNT_THREE, accountRows, seed, userIds);
      break;
    default:
      break;
  }

  if (sfInstance === 'two') {
    // Fill in the rest with seed after match points
    seedAccountsHelper(
      TOTAL_ACCOUNTS - TOTAL_ACCOUNT_TWO,
      accountRows,
      TOTAL_ACCOUNT_TWO + seed,
      userIds
    );
  } else if (sfInstance === 'three') {
    seedAccountsHelper(
      TOTAL_ACCOUNTS - TOTAL_ACCOUNT_THREE,
      accountRows,
      TOTAL_ACCOUNT_THREE + seed,
      userIds
    );
  }

  const fileName = `accounts.csv`;
  const csvFile = createWriteStream(fileName);
  const stream = format({ headers: true });
  stream.pipe(csvFile);

  accountRows.forEach((account) => {
    stream.write(account);
  });
  console.log(`${TOTAL_ACCOUNTS} created and written to ${fileName}`);

  stream.end();
};
