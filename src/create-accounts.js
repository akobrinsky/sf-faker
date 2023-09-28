import { faker } from '@faker-js/faker';
import { format } from '@fast-csv/format';
import { createWriteStream } from 'fs';
import companies from './real-companies.js';
import { convertToRoman } from './utils.js';
import { UniqueEnforcer } from 'enforce-unique';

let uniqueCompanyName = null;

let companyNameLookup = {};

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
  const companyName = faker.company.name();

  const buildName = (name) => {
    const numNames = companyNameLookup[name];
    if (numNames === 0) return name;
    return `${name}-${convertToRoman(companyNameLookup[name])}`;
  };

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

const accountsLookup = {
  one: [],
  two: [],
  three: [],
};

export const createAccounts = (numAccounts = 500, userIds) => {
  const TOTAL_ACCOUNTS = numAccounts;
  const TOTAL_ACCOUNT_TWO = Math.floor(TOTAL_ACCOUNTS * 0.5);
  const TOTAL_ACCOUNT_THREE = Math.floor(TOTAL_ACCOUNTS * 0.3);

  seedAccountsHelper(TOTAL_ACCOUNTS, accountsLookup.one, 100, userIds);
  companyNameLookup = {};
  seedAccountsHelper(TOTAL_ACCOUNT_TWO, accountsLookup.two, 0, userIds);
  companyNameLookup = {};
  seedAccountsHelper(TOTAL_ACCOUNT_THREE, accountsLookup.three, 0, userIds);
  companyNameLookup = {};

  // Fill in the rest with seed after match points
  seedAccountsHelper(
    TOTAL_ACCOUNTS - TOTAL_ACCOUNT_TWO,
    accountsLookup.two,
    TOTAL_ACCOUNT_TWO,
    userIds
  );
  seedAccountsHelper(
    TOTAL_ACCOUNTS - TOTAL_ACCOUNT_THREE,
    accountsLookup.three,
    TOTAL_ACCOUNT_THREE,
    userIds
  );

  for (const file of ['one', 'two', 'three']) {
    const fileName = `accounts-${file}.csv`;
    const csvFile = createWriteStream(fileName);
    const stream = format({ headers: true });
    stream.pipe(csvFile);

    accountsLookup[file].forEach((account) => {
      stream.write(account);
    });
    console.log(`${TOTAL_ACCOUNTS} created and written to ${fileName}`);

    stream.end();
  }
};
// createAccounts(500, [
//   '005Ho00000AJeqgIAD',
//   '005Ho00000AJeLgIAL',
//   '005Ho00000AJeqqIAD',
// ]);
