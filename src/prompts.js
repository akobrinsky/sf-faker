import { input, confirm } from '@inquirer/prompts';
import { createAccounts } from './create-accounts.js';

import { BulkStuff, queryAndFileLookup } from './bulk_api.js';

const email = await input({ message: "What's your SF dev instance email?" });

if (email) {
  const Foo = new BulkStuff();
  
  await Foo.loginToSalesforce(email);
  await Foo.setupEnvironment(email);
  
  const setup = await confirm({ message: "Extract User Ids to map to accounts and oppies" });
  
  if (setup) {
    // get and set user ids
    await Foo.createQueryJob(queryAndFileLookup.user.query);
    await Foo.checkJob('user');
  }
  const numAccounts = await input({ message: "How many accounts would you like to create?" });
  if (numAccounts > 0) {
    // Write new Accounts to csv
    createAccounts(numAccounts);

    // Upload new accounts
    await Foo.createQueryJob(queryAndFileLookup.account.query);
    await Foo.checkJob('account');
  }
}
