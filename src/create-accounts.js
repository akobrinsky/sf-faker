import { faker } from '@faker-js/faker';
import { format } from '@fast-csv/format';
import { createWriteStream } from 'fs';
import companies from './real-companies.js';
import { USER_IDS } from './constants.js';



function createRandomAccount() {
  const accountTypes = [
    'Prospect',
    'Customer - Channel',
    'Customer - Direct',
    'Technology Partner',
    'Other',
  ];
  const company = faker.helpers.arrayElement(companies);
  const ratingTypes = ['Hot', 'Warm', 'Cold'];
  const slaTypes = ['Gold', 'Silver', 'Platinum', 'Bronze'];
  const CustomerPriority__c = ['High', 'Low', 'Medium'];
  const UpsellOpportunity__c = ['Maybe', 'No', 'Yes'];

  const billingStreet = faker.location.streetAddress(false);
  const billingCity = faker.location.city();
  const billingState = faker.location.state();
  const billingPostalCode = faker.location.zipCode();
  const billingCountry = 'United States';

  return {
    name: company.name,
    website: company.domain,
    type: faker.helpers.arrayElement(accountTypes),
    rating: faker.helpers.arrayElement(ratingTypes),
    phone: faker.phone.number('###-###-###'),
    sla: faker.helpers.arrayElement(slaTypes),
    UpsellOpportunity__c: faker.helpers.arrayElement(UpsellOpportunity__c),
    CustomerPriority__c: faker.helpers.arrayElement(CustomerPriority__c),
    employees: faker.number.int({ min: 100, max: 3000 }),
    billingStreet,
    billingCity,
    billingState,
    billingPostalCode,
    billingCountry,
    annualRevenue: faker.finance.amount({
      min: 1000000,
      max: 20000000,
      dec: 0,
    }),
  };
}

const seedAccountsHelper = (amount, arr, seed) => {
  faker.seed(seed);
  for (let i = 0; i < amount; i += 1) {
    arr.push(createRandomAccount());
  }
};

const accountsLookup = {
  one: [],
  two: [],
  three: []
}

const TOTAL_ACCOUNTS = 1000;
const TOTAL_ACCOUNT_TWO = TOTAL_ACCOUNTS * 0.4;
const TOTAL_ACCOUNT_THREE = TOTAL_ACCOUNTS * 0.3;

seedAccountsHelper(TOTAL_ACCOUNTS, accountsLookup.one, 0);
seedAccountsHelper(TOTAL_ACCOUNT_TWO, accountsLookup.two, 0);
seedAccountsHelper(TOTAL_ACCOUNT_THREE, accountsLookup.three, 0);

// Fill in the rest with seed after match points
seedAccountsHelper(
  TOTAL_ACCOUNTS - TOTAL_ACCOUNT_TWO,
  accountsLookup.two,
  TOTAL_ACCOUNT_TWO
);
seedAccountsHelper(
  TOTAL_ACCOUNTS - TOTAL_ACCOUNT_THREE,
  accountsLookup.three,
  TOTAL_ACCOUNT_THREE
);


for (const file of ['one', 'two', 'three']) {
  const fileName = `accounts-${file}.csv`
  const csvFile = createWriteStream(fileName);
  const stream = format({ headers: true });
  stream.pipe(csvFile);
  
  accountsLookup[file].forEach((account) => {
    stream.write(account);
  });
  
  stream.end();
}
