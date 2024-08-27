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
  
  BeamInstance.setDateRange(Start, End);
  await BeamInstance.createAndUploadOppies(+amountOfOppies)
  BeamInstance.setDateRange(null, null);
};

await setupInstance();