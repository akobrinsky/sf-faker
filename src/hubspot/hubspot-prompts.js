import { input, password } from '@inquirer/prompts';
import { HubSpotBulk } from './bulk_api_hubspot.js';
import { createAccounts } from './create-companies.js';


const clientId = await input({ message: "What's your HubSpot App Client Id?" });
const clientSecret = await password({ message: "What's your HubSpot App Client Secret?", mask: true });


if (clientId && clientSecret) {

    const hubSpotInstance = new HubSpotBulk(clientId, clientSecret);
    await hubSpotInstance.createOAuthURL();
    console.log('Grant access in your browser & copy the code into the next prompt');
    const authorizationCode = await input({ message: "What's your authorization code" });
    await hubSpotInstance.getAccessToken(authorizationCode)
    console.log('creating companies ...');
    createAccounts(10)
    console.log('importing companies to HS ...')
    await hubSpotInstance.importFile('../../hs-companies-one.csv')
    console.log('exiting ...');

}
