import { faker } from '@faker-js/faker';
import { format } from '@fast-csv/format';
import { createWriteStream } from 'fs';
import { USER_IDS, memoizeUnique, convertToRoman } from '../utils.js';

const MEMOIZE = false;

let memoizedCompanies = null;

const buildDomain = (accountName) => {
  const suffix = faker.internet.domainSuffix();
  const domainName = accountName
    .split(/[\' ,-]+/)
    .join('-')
    .toLowerCase();
  return `${domainName}.${suffix}`;
};

let companyNameLookup = {};

const seedAccountsHelper = (amount, arr, seed) => {
  faker.seed(seed);
  memoizedCompanies = memoizeUnique(faker.helpers.arrayElement);

  for (let i = 0; i < amount; i += 1) {
    arr.push(createRandomAccount());
  }
  memoizedCompanies = null;
};

function createRandomAccount() {
  const accountTypes = [
    'Prospect',
    'Partner',
    'Reseller',
    'Vendor',
    'Other',
  ];
  // const company = MEMOIZE
  //   ? memoizedCompanies(companies)
  //   : faker.helpers.arrayElement(companies);
  const ratingTypes = ['Hot', 'Warm', 'Cold'];
  const slaTypes = ['Gold', 'Silver', 'Platinum', 'Bronze'];
  const CustomerPriority__c = ['High', 'Low', 'Medium'];
  const UpsellOpportunity__c = ['Maybe', 'No', 'Yes'];

  const Address = faker.location.streetAddress(false);
  const City = faker.location.city();
  const State = faker.location.state();
  const Zip = faker.location.zipCode();
  const Country = 'United States';
  const companyName = faker.company.name();

  if (!Object.hasOwn(companyNameLookup, companyName)) {
    companyNameLookup[companyName] = 0
  } else {
    companyNameLookup[companyName] += 1
  }

  const buildName = (name) => {
    const numNames = companyNameLookup[name]
    if (numNames === 0) return name
    return `${name}-${convertToRoman(companyNameLookup[name])}`
  }

  const name = buildName(companyName)

  return {
    Name: name,
    Domain: buildDomain(name),
    CompanyOwner: faker.helpers.arrayElement(USER_IDS),
    Type: faker.helpers.arrayElement(accountTypes),
    // Rating: faker.helpers.arrayElement(ratingTypes),
    Number: faker.phone.number('###-###-###'),
    NumberOfEmployees: faker.number.int({ min: 100, max: 3000 }),
    Address,
    City,
    State,
    Zip,
    Country,
    AnnualRevenue: faker.finance.amount({
      min: 1000000,
      max: 20000000,
      dec: 0,
    }),
  };
}

const accountsLookup = {
  one: [],
  // two: [],
  // three: [],
};

export const createAccounts = (numAccounts = 500000) => {
  const TOTAL_ACCOUNTS = numAccounts;
  // const TOTAL_ACCOUNT_TWO = Math.floor(TOTAL_ACCOUNTS * 0.5);
  // const TOTAL_ACCOUNT_THREE = Math.floor(TOTAL_ACCOUNTS * 0.3);

  seedAccountsHelper(TOTAL_ACCOUNTS, accountsLookup.one, 100);
  companyNameLookup = {}
  // seedAccountsHelper(TOTAL_ACCOUNT_TWO, accountsLookup.two, 0);
  // companyNameLookup = {}
  // seedAccountsHelper(TOTAL_ACCOUNT_THREE, accountsLookup.three, 0);
  // companyNameLookup = {}

  // Fill in the rest with seed after match points
  // seedAccountsHelper(
  //   TOTAL_ACCOUNTS - TOTAL_ACCOUNT_TWO,
  //   accountsLookup.two,
  //   TOTAL_ACCOUNT_TWO
  // );
  // seedAccountsHelper(
  //   TOTAL_ACCOUNTS - TOTAL_ACCOUNT_THREE,
  //   accountsLookup.three,
  //   TOTAL_ACCOUNT_THREE
  // );

  // for (const file of ['one', 'two', 'three']) {
    const fileName = `hs-companies-one.csv`;
    const csvFile = createWriteStream(fileName);
    const stream = format({ headers: true });
    stream.pipe(csvFile);

    accountsLookup['one'].forEach((account) => {
      stream.write(account);
    });
    console.log(`${TOTAL_ACCOUNTS} created and written to ${fileName}`);

    stream.end();
  // }
};
