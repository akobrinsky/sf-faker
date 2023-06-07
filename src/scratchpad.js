import { faker } from '@faker-js/faker';
import { format } from '@fast-csv/format';
import fs from 'fs';
import companies from './real-companies.js'


const fileName = 'accounts.csv';
const csvFile = fs.createWriteStream(fileName);
const stream = format({ headers: true });
stream.pipe(csvFile);

function createRandomAccount() {
  const accountTypes = [ 
    'Prospect',
    'Customer - Channel',
    'Customer - Direct',
    'Technology Partner',
    'Other',
  ];
  const company = faker.helpers.arrayElement(companies)
  const ratingTypes = ['Hot', 'Warm', 'Cold'];
  const slaTypes = ['Gold', 'Silver', 'Platinum', 'Bronze'];
  const CustomerPriority__c = ['High', 'Low', 'Medium'];
  const UpsellOpportunity__c = ['Maybe', 'No', 'Yes'];

  const billingStreet =  faker.location.streetAddress(false);
  const billingCity =  faker.location.city();
  const billingState =  faker.location.state();
  const billingPostalCode =  faker.location.zipCode();
  const billingCountry = 'United States';

  return {
    name: company.name,
    website: company.domain,
    type: faker.helpers.arrayElement(accountTypes),
    rating: faker.helpers.arrayElement(ratingTypes),
    phone: faker.phone.number('###-###-###'),
    employees: faker.number.int({ min: 100, max: 3000 }),
    annualRevenue: faker.finance.amount({
      min: 1000000,
      max: 20000000,
      dec: 0,
    }),
    sla: faker.helpers.arrayElement(slaTypes),
    UpsellOpportunity__c: faker.helpers.arrayElement(UpsellOpportunity__c),
    CustomerPriority__c: faker.helpers.arrayElement(CustomerPriority__c),
    billingStreet,
    billingCity,
    billingState,
    billingPostalCode,
    billingCountry,
  };
}

function buildOpps(amount, accountName) {
  const result = [];
  const types = ['foo', 'bar', 'baz'];
  const stages = [
    'Prospecting',
    'Qualification',
    'Needs Analysis',
    'Value Proposition',
    'Perception Analysis',
    'Closed Won',
    'Closed Lost',
  ];
  for (let i = 0; i < amount; i += 1) {
    result.push({
      accountName,
      type: faker.helpers.arrayElement(types),
      stage: faker.helpers.arrayElement(stages),
      opportunityName: `${accountName} - ${faker.helpers.arrayElement(types)}`,
      amount: faker.finance.amount(50000, 400000, 0),
    });
  }
  return result;
}

const seedAccountsHelper = (amount, arr, seed) => {
  faker.seed(seed);
  for (let i = 0; i < amount; i += 1) {
    arr.push(createRandomAccount());
  }
};

const accounts = [];
const accountsDeux = [];
const accountsTrois = [];

const TOTAL_ACCOUNTS = 500;
const FORTY_PERCENT_MATCH = TOTAL_ACCOUNTS * 0.4;
const THIRTY_PERCENT_MATCH = TOTAL_ACCOUNTS * 0.3;

// All have first 15,0000
seedAccountsHelper(TOTAL_ACCOUNTS, accounts, 0);
seedAccountsHelper(FORTY_PERCENT_MATCH, accountsDeux, 0);
seedAccountsHelper(THIRTY_PERCENT_MATCH, accountsTrois, 0);

// Fill in the rest with seed after match points
seedAccountsHelper(
  TOTAL_ACCOUNTS - FORTY_PERCENT_MATCH,
  accountsDeux,
  FORTY_PERCENT_MATCH
);
seedAccountsHelper(
  TOTAL_ACCOUNTS - THIRTY_PERCENT_MATCH,
  accountsTrois,
  THIRTY_PERCENT_MATCH
);

accounts.forEach((account, idx) => {
  stream.write(account);
});

stream.end();
