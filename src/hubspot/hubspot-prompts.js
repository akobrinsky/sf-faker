import { input, password } from '@inquirer/prompts';
import { HubSpotBulk } from './bulk_api_hubspot.js';
import { createAccounts } from './create-companies.js';

// const clientId = await input({ message: "What's your HubSpot App Client Id?" });
// const clientSecret = await password({ message: "What's your HubSpot App Client Secret?", mask: true });
const clientId = '43ed9d2f-79dd-4771-8545-e4efb553cdbc';
const clientSecret = '497c2972-0471-4215-8b4b-2b8c5e4568ef';

if (clientId && clientSecret) {

    const hubSpotInstance = new HubSpotBulk(clientId, clientSecret);
    await hubSpotInstance.createOAuthURL();
    console.log('Grant access in your browser & copy the code into the next prompt');
    const authorizationCode = await input({ message: "What's your authorization code" });
    await hubSpotInstance.getAccessToken(authorizationCode)
    console.log('creating companies ...');
    createAccounts(100)
    createContacts()
    createDeals()
    console.log('importing companies to HS ...')
    await hubSpotInstance.importFile('../../hs-companies-one.csv')
    console.log('exiting ...');

}
