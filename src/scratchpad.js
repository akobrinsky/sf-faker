import { faker } from '@faker-js/faker'
import { cloneDeep, difference } from 'lodash'
function createRandomAccount() {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
    name: faker.company.name(),
    url: faker.internet.domainName()
  };
}

const seedFirst1000 = (amount, arr) => {
  faker.seed(132)
  for (let i = 0; i < amount; i += 1) {
    arr.push(createRandomAccount())
  }
}

faker.seed(132)
const accounts = []
const accountsDeux = []
const accountsTrois = []
seedFirst1000(1000, accounts)
seedFirst1000(1000, accountsDeux)
seedFirst1000(1000, accountsTrois)
accounts[0].username
accountsDeux[0].username
accountsTrois[0].username
console.log(accounts[9].url);