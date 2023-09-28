import { faker } from '@faker-js/faker';
import { format } from '@fast-csv/format';
import { parseFile } from '@fast-csv/parse';
import { createWriteStream } from 'fs';
import { USER_IDS } from '../utils.js';
import { DateTime } from 'luxon';

const ingestFileName = 'extracted-accounts.csv';
const oppyCSV = createWriteStream('hs-contacts.csv');

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

function writeContacts(amount, AccountId, url) {
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
      // AccountId,
      Birthdate, // date_of_birth
      FirstName, // firstname
      LastName, // lastname
      Email, // email
      OwnerId: faker.helpers.arrayElement(USER_IDS), // hubspot_owner_id
      Title: faker.person.jobTitle(), // jobtitle
      Phone: faker.phone.number('###-###-####'), // phone
    }
    stream.write(payload);
  }
}
