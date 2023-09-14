import { input, confirm, select } from '@inquirer/prompts';
import { createAccounts } from './create-accounts.js';
import inquirer from "inquirer";
import DatePrompt from "inquirer-date-prompt";

inquirer.registerPrompt("date", DatePrompt);


import { BulkStuff, queryAndFileLookup } from './bulk_api.js';

const email = await input({ message: "What's your SF dev instance email?" });

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
          description: 'Purge all accounts for this SF dev instance... note that this wipes out contacts and opportunities as well!',
          disabled: disablePurge
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
      console.log('purging...')
      result = await buildChoices(true)
    }
    if (result === 'create_accounts') {
      return result
    }
  }

  let answer = await buildChoices()

  if (answer === 'create_accounts') {
    const extractUserIds = await confirm({ message: "Extract User Ids to map to accounts and oppies" });
    
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
  console.log('nothing to do then, ttfn');
}
