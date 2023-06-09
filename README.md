# SF Faker
A simple node app to generate real-ish data in your dev salesforce instance. It uses the [faker api](https://fakerjs.dev/) to generate account, contact and opportunity info. By default, it creates 500 accounts, 1 - 2 opportunities on each account, 1 - 2 contacts on each account. Closed Won or Closed Lost stages are assigned a past close date and all other stages are assigned a random future date within 2 years. 

## Requirements
1. Make a [SF dev instance](https://developer.salesforce.com/signup)  
2. Make an extra user (the dev instances are only allowed 2 users). Give this user `Salesforce` user license and `System Administrator` profile
![image](https://github.com/akobrinsky/sf-faker/assets/22509914/9c99d811-da5d-416c-adac-7c87e424cb7e)
3. Install dataloader app

Unfortunately the salesforce Data Import Wizard doesn't support uploading opportunity data. You will have to use the [Data Loader](https://developer.salesforce.com/tools/data-loader) application. This page has downloads and instructions for Windows and Mac. 

### Linux Instructions
If you are on Linux, you'll need to build the jar from the [data loader repository](https://github.com/forcedotcom/dataloader). 

```
git clone https://github.com/forcedotcom/dataloader.git && cd dataloader
```

Install
```
./dlbuilder.sh
```

Direclty run created jar in the created target folder
```
sudo java -jar target/dataloader-58.0.2.jar
```

You should now see this GUI
![Screenshot from 2023-06-08 10-41-45](https://github.com/akobrinsky/sf-faker/assets/22509914/982c3f14-1277-4ca3-b015-a767e91e9384)

## .env
For each SF dev instance you'd like to setup, you'll want to set these two env variables. This is to emulate having different account owners as much as we can. Each account will get random assignment of these id's. 

```
USER_ONE_ID=FOO
USER_TWO_ID=BAR
```

You can get these ids from the dataloader tool. 
1. Click `Export` 
2. Select `User (User)`
3. click `Browse...` and tell it to export to a file named `exported-users.csv`
4. Click `Next`
5. and either select the id, and name fields from the ui, or paste in this query: 

```sql
select id, name from user
```
6. Click `Finish`

## Create Accounts
*reminder to have your user ids set in .env*
```
npm run build-accounts
```
Upload the generated `accounts-one.csv` to SF


> Note on files  
>`accounts-one.csv` - base for other files to match against  
>`accounts-two.csv` - matches 50% to accounts-one  
>`accounts-two.csv` - matches 30% to accounts-one

## Export Accounts to build Contacts and Opportunites
__Important: name the export `exported-accounts.csv`__

![Screenshot from 2023-06-08 12-00-04](https://github.com/akobrinsky/sf-faker/assets/22509914/b02dbe07-06a0-4584-800c-58e4b7704e15)  
Select the columns we need, order is importance here!
```sql

select id, name, website from account
```
## Create Contacts and Opportunities
```
npm run build-oppies-and-accounts
```
This creates `oppies.csv` and `contacts.csv`
Upload oppies and accounts to SF
