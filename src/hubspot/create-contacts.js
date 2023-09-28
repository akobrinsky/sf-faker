import { faker } from '@faker-js/faker';
import { format } from '@fast-csv/format';
import { createWriteStream } from 'fs';
import { DateTime } from 'luxon';
import { USER_IDS } from '../utils.js';

const contactsCSV = createWriteStream('hs-contacts.csv');
const stream = format({ headers: true });
stream.pipe(contactsCSV);

export const writeContacts = (amount, url) => {
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
