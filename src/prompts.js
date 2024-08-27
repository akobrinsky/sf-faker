import { input, confirm, select } from '@inquirer/prompts';
import inquirer from 'inquirer';
import DatePrompt from 'inquirer-date-prompt';

import { DemoBeams } from './bulk_api.js';
inquirer.registerPrompt('date', DatePrompt);

const BeamInstance = new DemoBeams();
// const createOppies = await confirm({
//   message: 'Hey there friend, would you like to make some oppiez???? 🤑🤑🤑🤑🤑',
// });
const startProcess = async (action) => {
  if (!action) {
    const initialAction = await initialPrompt();
    return startProcess(initialAction);
  }
  // let bulkAction
  if (action === 'create_all') {
    await BeamInstance.createAndUploadAccounts();
    // bulkAction = await initialPrompt();
  }

  if (action === 'purge') {
    await BeamInstance.purgeAllOfTheThings();
  }

  if (action == 'create_oppies') {
    await promptForOppyDateRange();
  }

  if (action === 'switch_instance') {
    await setupInstance();
  } else {
    const nextAction = await initialPrompt();
    return startProcess(nextAction);
  }
};

const setupInstance = async () => {
  // prompt for sf instance user would like tos etup
  const sfInstance = await select({
    message: 'Which SF instance would you like to setup?',
    choices: [
      {
        name: 'Patient Zero - All of the things',
        value: 'one',
        description:
          'Patient Zero is the base instance that the other two match against',
      },
      {
        name: 'Half Matches',
        value: 'two',
        description: 'Matches 50% accounts with Patient Zero',
      },
      {
        name: '30% Matches',
        value: 'three',
        description:
          'Matches 30% accounts with Patient Zero AND the Half Match Instance',
      },
    ],
  });
  
  BeamInstance.setSfInstance(sfInstance);
  
  // prompt for email address for current instance
  const email = await input({
    message: 'Please enter the email associated with account',
  });
  BeamInstance.setEmailAddress(email);

  // go through auth and setup bearer token... etc
  await BeamInstance.loginToSalesforce();
  await BeamInstance.setupEnvironment();
  // bulkAction = await initialPrompt();
  return await startProcess();
};

const initialPrompt = async () => {
  const result = await select({
    message: 'What would you like to do today?',
    choices: [
      {
        name: 'Give me all of the stuff',
        value: 'create_all',
        description: 'Feed Accounts, Oppies, Contacts and Leads',
      },
      {
        name: 'I just need to create some oppies',
        value: 'create_oppies',
        description:
          'Feed oppies into your sf instance with a defined date range',
      },
      {
        name: 'Purge All Of The Things 🔪🔪🔪🔪',
        value: 'purge',
        description:
          '🚨🚨🚨: Alert... this is a hard delete of Accounts, Leads, Cases, Opportunities and Contacts',
      },
      {
        name: 'Switch SF Instance',
        value: 'switch_instance',
      },
    ],
  });
  return result;
};

const promptForOppyDateRange = async () => {
  const initialStart = new Date();
  initialStart.setFullYear(initialStart.getFullYear() - 1);

  const initialEnd = new Date();

  initialEnd.setFullYear(initialEnd.getFullYear() + 1);
  const amountOfOppies = await input({
    message: 'How many opportunities would you like to make?',
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
  console.log(`\nuploaded ${amountOfOppies} oppies!\n`);
  console.log(`\date range change was successful\n`);
  BeamInstance.setDateRange(Start, End);
};
// await promptForOppyDateRange()

// await startProcess()
await setupInstance();
// if (action === 'create_all') {
//   await Foo.createAndUploadAccounts();
//   await initialPrompt();
// }

// if (bulkAction === 'purge') {
//   await Foo.purgeAllOfTheThings();
//   await initialPrompt();
// }

// if (bulkAction == 'create_oppies') {
//   console.log('weierd');
//   console.log('lfg');
//   await initialPrompt();
// }

// prompt for date for oppies

// createTheOppies(Start, End, ['005Ho0000090mJaIAI', '005Ho0000090m2MIAQ']);
if (false) {
  await BeamInstance.loginToSalesforce();
  await BeamInstance.setupEnvironment(email);

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
      await BeamInstance.purgeAllOfTheThings();
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
      await BeamInstance.createQueryJob(queryAndFileLookup.user.query);
      await BeamInstance.checkJob('user');
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
} 