import { faker } from '@faker-js/faker';
import { format } from '@fast-csv/format';
import { parseFile } from '@fast-csv/parse';
import { createWriteStream } from 'fs';
import { DateTime } from 'luxon';

const ingestFileName = 'extracted-accounts.csv';
const oppyCSV = createWriteStream('contacts.csv');
const stream = format({ headers: true });
stream.pipe(oppyCSV);

export const createTheContacts = (userIds) => {
  let numberOfContactsCreated = 0;
  parseFile(ingestFileName)
    .on('error', (error) => console.error(error))
    .on('data', (row) => {
      const [accountId, , accountDomain] = row;
      const numberOfContacts = faker.number.int({ min: 1, max: 2 });
      if (accountId !== 'ID') {
        numberOfContactsCreated += numberOfContacts;
        writeContacts(numberOfContacts, accountId, accountDomain, userIds);
      }
    })
    .on('end', (rowCount) => {
      console.log(
        `Finished creating contacts: ${numberOfContactsCreated} created`
      );
    });
};

function writeContacts(amount, AccountId, url, userIds) {
  for (let i = 0; i < amount; i += 1) {
    const FirstName = faker.person.firstName();
    const LastName = faker.person.lastName();

    const Email = FirstName.toLowerCase()[0] + LastName.toLowerCase() + `@${url}`;
    const Birthdate = faker.date
      .between({
        from: DateTime.local().minus({ years: 55 }),
        to: DateTime.local().minus({ years: 30 }),
      })
      .toISOString();
    const payload = {
      AccountId,
      Birthdate,
      FirstName,
      LastName,
      Email,
      AssistantName: faker.person.fullName(),
      OwnerId: faker.helpers.arrayElement(userIds),
      Title: faker.person.jobTitle(),
      Phone: faker.phone.number('###-###-####'),
      AssistantPhone: faker.phone.number('###-###-####'),
    };
    stream.write(payload);
  }
}
