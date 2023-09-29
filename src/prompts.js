import { input, confirm, select } from '@inquirer/prompts';
import { createAccounts } from './create-accounts.js';
import { createTheOppies } from './create-oppies.js';
import inquirer from 'inquirer';
import DatePrompt from 'inquirer-date-prompt';
import cfonts from 'cfonts'

cfonts.say(`oh hi hans!!`, {
  align: 'center', // define text alignment
  letterSpacing: 1, // define letter spacing
  lineHeight: 2, // define the line height
  space: true, // define if the output text should have empty lines on top and on the bottom
  gradient: '#306674,#F23251', // define your two gradient colors
  transitionGradient: true, // define if this is a transition between colors directly
});
inquirer.registerPrompt('date', DatePrompt);

import { BulkStuff, queryAndFileLookup } from './bulk_api.js';

// const email = await input({ message: "What's your SF dev instance email?" });
const email = false;
// const createOppies = await confirm({
//   message: 'Hey there friend, would you like to make some oppiez???? 🤑🤑🤑🤑🤑',
// });
const initialStart = new Date();
initialStart.setFullYear(initialStart.getFullYear() - 1);

const initialEnd = new Date();

initialEnd.setFullYear(initialEnd.getFullYear() + 1);
const amountOfOppies = await input({
  message: "How many opportunities would you like to make?",
});
const { Start } = await inquirer.prompt({
  type: 'date',
  name: 'Start',
  message: 'Start date',
  prefix: '📆',
  filter: (d) => Math.floor(d.getTime() / 1000),
  locale: 'en-US',
  format: { month: 'short', hour: undefined, minute: undefined },
  clearable: true,
  default: initialStart,
});
const { End } = await inquirer.prompt({
  type: 'date',
  name: 'End',
  message: 'End date',
  prefix: '📆',
  filter: (d) => Math.floor(d.getTime() / 1000),
  locale: 'en-US',
  format: { month: 'short', hour: undefined, minute: undefined },
  clearable: true,
  default: initialEnd,
});

createTheOppies(Start, End, ['005Ho0000090mJaIAI', '005Ho0000090m2MIAQ']);
if (email) {
  const Foo = new BulkStuff();

  await Foo.loginToSalesforce();
  await Foo.setupEnvironment(email);

  const buildChoices = async (disablePurge = false) => {
    let result = await select({
      message: 'What would you like to do today?',
      choices: [
        {
          name: 'Purge accounts',
          value: 'purge',
          description:
            'Purge all accounts for this SF dev instance... note that this wipes out contacts and opportunities as well!',
          disabled: disablePurge,
        },
        {
          name: 'Create accounts',
          value: 'create_accounts',
          description: 'Create accounts with predictable overlaps',
        },
      ],
    });

    if (result === 'purge') {
      // TO-DO: purge accounts then trigger the prompt again
      console.log('purging...');
      await Foo.purgeAllOfTheThings()
      result = await buildChoices(true);
    }
    if (result === 'create_accounts') {
      return result;
    }
  };

  let answer = await buildChoices();

  if (answer === 'create_accounts') {
    const extractUserIds = await confirm({
      message: 'Extract User Ids to map to accounts and oppies',
    });

    if (extractUserIds) {
      // get and set user ids
      await Foo.createQueryJob(queryAndFileLookup.user.query);
      await Foo.checkJob('user');
    }

    // const numAccounts = await input({ message: "How many accounts would you like to create?" });

    // const foo = await input({ message: "How many SF Instances would you like to feed 🥑🥕🥩🍍" });
    // const foo1 = await input({ message: "How many leads would you like to create?" });
    // const foo2 = await confirm({ message: "Do you want to create some fresh oppies?" });

    // if (numAccounts > 0) {
    //   // Write new Accounts to csv
    //   createAccounts(numAccounts);

    //   // Upload new accounts
    //   // await Foo.createQueryJob(queryAndFileLookup.account.query);
    //   // await Foo.checkJob('account');
    //   console.log('etc');
    // }
  }
} else {
  console.log('hell yeah... way to go my friend');
}
