import { faker } from '@faker-js/faker';
import { format } from '@fast-csv/format';
import { parseFile } from '@fast-csv/parse';
import { createWriteStream } from 'fs';
import { DateTime } from 'luxon';

const ingestFileName = 'extracted-accounts.csv';
const oppyCSV = createWriteStream('contacts.csv');

const stream = format({ headers: true });
stream.pipe(oppyCSV);

let numberOfContactsCreated = 0;
parseFile(ingestFileName)
  .on('error', (error) => console.error(error))
  .on('data', (row) => {
    const [accountId, , accountDomain] = row;
    const numberOfContacts = faker.number.int({ min: 1, max: 2 });
    numberOfContactsCreated += numberOfContacts;
    if (accountId !== 'ID') writeContacts(numberOfContacts, accountId, accountDomain);
  })
  .on('end', (rowCount) => {
    console.log(`${rowCount} account rows processed`);
    console.log(
      `finished creating contacts: ${numberOfContactsCreated} created`
    );
  });

function writeContacts(amount, accountId, url) {
  for (let i = 0; i < amount; i += 1) {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    const email = firstName.toLowerCase()[0] + lastName.toLowerCase() + `@${url}`;
    const birthdate = faker.date
      .between({
        from: DateTime.local().minus({ years: 55 }),
        to: DateTime.local().minus({ years: 30 }),
      })
      .toISOString();
    const payload = {
      accountId,
      birthdate,
      firstName,
      lastName,
      email,
      assistantName: faker.person.fullName(),
      title: faker.person.jobTitle(),
      phone: faker.phone.number('###-###-####'),
      assistantPhone: faker.phone.number('###-###-####'),
    }
    stream.write(payload);
  }
}
