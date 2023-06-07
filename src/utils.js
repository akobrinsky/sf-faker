import { faker } from '@faker-js/faker';
import dotenv  from "dotenv"
dotenv.config()

const user1 = process.env.USER_ONE
const user2 = process.env.USER_TWO

const USER_IDS = [user1]

if (user2) USER_IDS.push(user2)

export {
  USER_IDS
}

const buildDumbName = (name) =>
  `${name} - ${faker.word.preposition()} ${faker.word.noun()}`
    .toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');

export function buildOpps(amount, accountName, accountId) {
  const result = [];
  const types = ['foo', 'bar', 'baz'];
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
    result.push({
      accountName,
      accountId,
      closeDate: faker.date.between({ from: '1/23/2020', to: '12/20/23' }),
      name: buildDumbName(accountName),
      type: faker.helpers.arrayElement(types),
      stage: faker.helpers.weightedArrayElement(stages),
      opportunityName: `${accountName} - ${faker.helpers.arrayElement(types)}`,
      amount: faker.finance.amount(50000, 400000, 0),
    });
  }
  return result;
}
