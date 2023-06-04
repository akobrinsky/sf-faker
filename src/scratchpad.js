import { faker } from '@faker-js/faker'
import { format } from '@fast-csv/format'
import { appendFileSync, writeFileSync } from 'fs'
const fileName = 'accounts.csv';
const csvFile = fs.createWriteStream(fileName);
const stream = format({ headers:true });
stream.pipe(csvFile);

const buildDomain = (accountName) => {
  const suffix = faker.internet.domainSuffix()
  const domainName = accountName.split(/[\' ,-]+/).join('-').toLowerCase()
  return `${domainName}.${suffix}`
}

function createRandomAccount() {
  const accountTypes = ['Customer - Foo', 'Customer - Channel', 'Customer - Direct']
  const name = faker.company.name()
  const email = faker.internet.email({
    allowSpecialCharacters: false,
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    provider: 'google.com'
  })
  
  return {
    name,
    domain: buildDomain(name),
    type: faker.helpers.arrayElement(accountTypes),
    email
  };
}

const seedAccountsHelper = (amount, arr, seed) => {
  faker.seed(seed)
  for (let i = 0; i < amount; i += 1) {
    arr.push(createRandomAccount())
  }
}

class User {
  constructor({name, id, type}) {
    this.name = name
    this.id = id
    this.type = type
  }
}

const accounts = []
const accountsDeux = []
const accountsTrois = []

const TOTAL_ACCOUNTS = 1000
const FORTY_PERCENT_MATCH = TOTAL_ACCOUNTS * 0.4
const THIRTY_PERCENT_MATCH = TOTAL_ACCOUNTS * 0.3

console.log(TOTAL_ACCOUNTS,FORTY_PERCENT_MATCH, THIRTY_PERCENT_MATCH);

// All have first 15,0000
seedAccountsHelper(TOTAL_ACCOUNTS, accounts, 0)
seedAccountsHelper(FORTY_PERCENT_MATCH, accountsDeux, 0)
seedAccountsHelper(THIRTY_PERCENT_MATCH, accountsTrois, 0)

// Fill in the rest with seed after match points
seedAccountsHelper(TOTAL_ACCOUNTS - FORTY_PERCENT_MATCH, accountsDeux, FORTY_PERCENT_MATCH)
seedAccountsHelper(TOTAL_ACCOUNTS - THIRTY_PERCENT_MATCH, accountsTrois, THIRTY_PERCENT_MATCH)

accounts.forEach((account, idx) => {
  const {name, domain, type, email} = account
  stream.write({name, domain, type, email})
});

stream.end()

accountsDeux.forEach((account, idx) => {
  const {name, domain, type} = account
  const csv = `${name},${domain},${type}\n`
  appendFileSync(`./accountsDeux.csv`, csv);
});

accountsTrois.forEach((account, idx) => {
  const {name, domain, type} = account
  const csv = `${name},${domain},${type}\n`
  appendFileSync(`./accountsTrois.csv`, csv);
});

for (let i = 0; i < 10; i++) {
  console.log(faker.commerce.product())
}