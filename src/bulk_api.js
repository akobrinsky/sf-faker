import axios from "axios";
import { processAndWriteFile, getIDsFromCSV, errorWrapper } from "./utils.js";
import fs from "fs";
import { createAccounts } from "./create-accounts.js";
import { createTheOppies } from "./create-oppies.js";
import { exec, spawn } from "child_process";
import { createTheContacts } from "./create-contacts.js";
import { createTheLeads } from "./create-leads.js";
import cfonts from "cfonts";

const cfontSettings = {
  align: "left", // define text alignment
  letterSpacing: 1, // define letter spacing
  lineHeight: 2, // define the line height
  space: true, // define if the output text should have empty lines on top and on the bottom
  gradient: "#306674,#F23251", // define your two gradient colors
  transitionGradient: true, // define if this is a transition between colors directly
};

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function buildStartAndEndDates() {
  const initialStart = new Date();
  initialStart.setFullYear(initialStart.getFullYear() - 1);

  const initialEnd = new Date();
  initialEnd.setFullYear(initialEnd.getFullYear() + 1);

  const start = Math.floor(initialStart.getTime() / 1000);
  const end = Math.floor(initialEnd.getTime() / 1000);

  return { start, end };
}

export class DemoBeams {
  constructor() {
    this.jobId = null;
    this.results = null;
    this.job = null;
    this.userIDs = null;
    this.numAccounts = 300;
    this.currentSfInstance = null;
    this.seedIndex = 100;
    this.email = null;
    this.startDate = null;
    this.endDate = null;
    this.averageTimeToClose = 120;

    this.setDateRange(null, null);
  }

  queryAndFileLookup(table) {
    const emailAddy = this.email.split("@")[1];
    return {
      User: {
        query: `SELECT Id FROM User WHERE Email LIKE '%${emailAddy}'`,
        file: "user-ids.csv",
      },
      Account: {
        query: "SELECT ID, Name, Website FROM Account",
        idQuery: "SELECT ID FROM Account",
        file: "extracted-accounts.csv",
      },
      Lead: {
        idQuery: "SELECT ID FROM Lead",
        file: "extracted-leads.csv",
      },
      Contact: {
        query: "SELECT ID FROM Contact",
        file: "extracted-contacts.csv",
      },
      Opportunity: {
        idQuery: "SELECT ID FROM Opportunity",
        file: "extracted-oppies.csv",
      },
      Case: {
        idQuery: "SELECT ID FROM Case",
        file: "extracted-cases.csv",
      },
      AllAccounts: {
        query:
          "SELECT Name, ID, Website, OwnerId, Type, Rating, Phone, SLA__c, UpsellOpportunity__c, CustomerPriority__c, NumberOfEmployees, BillingStreet, BillingCity, BillingState, BillingPostalCode, BillingCountry, AnnualRevenue FROM Account",
        file: "all_accounts.csv",
      },
    }[table];
  }
  setDateRange(start, end) {
    if (!start || !end) ({ start, end } = buildStartAndEndDates());
    this.startDate = start;
    this.endDate = end;
  }
  setNumberAccounts(amount) {
    this.numAccounts = amount;
  }

  setEmailAddress(email) {
    this.email = email;
  }

  setSfInstance(val) {
    this.currentSfInstance = val;
  }

  async createQueryJob(query) {
    try {
      const { data } = await axios.post(`/services/data/v58.0/jobs/query`, {
        operation: "query",
        query,
      });
      this.jobId = data.id;
      return data;
    } catch (err) {
      console.log(err.message);
    }
  }

  async loginToSalesforce() {
    return new Promise((resolve) => {
      const query = `sfdx org login web`;
      exec(query, (error, stdout, stderr) => {
        if (error) {
          console.error(error);
          return;
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
        }

        console.log(stdout);

        resolve();
      });
    });
  }

  async setupEnvironment(email) {
    return new Promise((resolve) => {
      const query = `sfdx org:display -o ${this.email || email} --json`;
      exec(query, (error, stdout, stderr) => {
        if (error) {
          console.error(error);
          return;
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
        }
        const { result } = JSON.parse(stdout);

        const { accessToken, instanceUrl, username } = result;
        const name = username.split(/[\+@]/)?.at(0);
        if (name.length) {
          cfonts.say(`oh hi, ${name}!`, cfontSettings);
        }

        const authBearer = `Bearer ${accessToken}`;
        axios.defaults.baseURL = instanceUrl;
        axios.defaults.headers = {
          Authorization: authBearer,
        };
        resolve();
      });
    });
  }

  async checkJob(table) {
    try {
      const { data } = await axios.get(
        `/services/data/v58.0/jobs/query/${this.jobId}`
      );
      console.log(`Checking ${table} job progress: ${this.jobId}`);
      if (data.state !== "JobComplete") {
        await timeout(500);
        await this.checkJob(table);
      } else {
        await this.getJobResults(table);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async checkJobProgress() {
    try {
      const { data } = await axios.get(
        `/services/data/v58.0/jobs/ingest/${this.job.id}`
      );
      console.log(`checking ingest job progress: ${this.job.id}`);
      if (data.state !== "JobComplete") {
        await timeout(500);
        return this.checkJobProgress();
      }
      return data.state;
    } catch (err) {
      console.log(err);
    }
  }

  async getJobResults(table) {
    try {
      const { data, headers } = await axios.get(
        `/services/data/v58.0/jobs/query/${this.jobId}/results`
      );
      // console.log(headers);
      processAndWriteFile(data, this.queryAndFileLookup(table).file);
      const locator = headers["sforce-locator"];
      // TODO - append to same csv
      // if (locator !== null) {
      //   const { data, headers } = await axios.get(
      //     `/services/data/v58.0/jobs/query/${this.jobId}/results?locator=${locator}`
      //   );
      //   processAndWriteFile(data, 'accounts-nextbatch.csv');
      // }
      const ids = await getIDsFromCSV(this.queryAndFileLookup(table).file);
      if (table === "Account") this.accountId = ids;
      if (table === "User") this.userIDs = ids;
    } catch (err) {
      errorWrapper(err);
    }
  }

  async createJob(table) {
    try {
      const body = JSON.stringify({
        object: table,
        contentType: "CSV",
        operation: "insert",
        lineEnding: "LF",
      });
      const { data } = await axios.post(
        "/services/data/v58.0/jobs/ingest/",
        body,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "X-PrettyPrint": "1",
          },
        }
      );
      this.job = data;
      return data;
    } catch (err) {
      errorWrapper(err);
    }
  }

  async createDeleteJob(table) {
    try {
      const body = JSON.stringify({
        object: table,
        contentType: "CSV",
        operation: "hardDelete",
        lineEnding: "LF",
      });
      const { data } = await axios.post(
        "/services/data/v58.0/jobs/ingest/",
        body,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "X-PrettyPrint": "1",
          },
        }
      );
      this.job = data;
      return data;
    } catch (err) {
      errorWrapper(err);
    }
  }

  async closeJob(id) {
    const body = JSON.stringify({ state: "UploadComplete" });
    try {
      const url = `/services/data/v58.0/jobs/ingest/${id}/`;
      const { data } = await axios.patch(url, body, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          Accept: "application/json",
          "X-PrettyPrint": "1",
        },
      });
      return data;
    } catch (err) {
      errorWrapper(err);
    }
  }

  async uploadFile(file) {
    try {
      const url = this.job.contentUrl;
      await axios.put(url, fs.createReadStream(file), {
        headers: {
          "Content-Type": "text/csv",
          Accept: "application/json",
        },
      });
    } catch (err) {
      errorWrapper(err);
    }
  }

  async completeInsertJob() {
    const body = JSON.stringify({ state: "UploadComplete" });

    try {
      const url = `/services/data/v58.0/jobs/ingest/${this.job.id}/`;
      const foo = await axios.patch(url, body, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          Accept: "application/json",
        },
      });
      return foo;
    } catch (err) {
      errorWrapper(err);
    }
  }

  async failedResults(id) {
    const url = `/services/data/v58.0/jobs/ingest/${id}/failedResults/`;
    try {
      const foo = await axios.get(url, {
        headers: {
          "Content-Type": "text/csv",
        },
      });
      return foo;
    } catch (err) {
      console.log(err);
    }
  }

  async getBatchResults(id) {
    const url = `/services/data/v58.0/jobs/ingest/${id}/failedResults/`;
    try {
      const foo = await axios.get(url, {
        headers: {
          "Content-Type": "text/csv",
        },
      });
      return foo;
    } catch (err) {
      errorWrapper(err);
    }
  }

  async purgeAllOfTheThings() {
    //  Lead
    await this.createQueryJob(this.queryAndFileLookup("Lead").idQuery);
    await this.checkJob("Lead");
    await this.createDeleteJob("Lead");
    await this.uploadFile(this.queryAndFileLookup("Lead").file);
    await this.completeInsertJob();
    console.log("All Leads have been deleted");

    //  Opportunity
    await this.createQueryJob(this.queryAndFileLookup("Opportunity").idQuery);
    await this.checkJob("Opportunity");
    await this.createDeleteJob("Opportunity");
    await this.uploadFile(this.queryAndFileLookup("Opportunity").file);
    await this.completeInsertJob();
    console.log("All Oppies have been deleted");

    //  Case
    await this.createQueryJob(this.queryAndFileLookup("Case").idQuery);
    await this.checkJob("Case");
    await this.createDeleteJob("Case");
    await this.uploadFile(this.queryAndFileLookup("Case").file);
    await this.completeInsertJob();
    console.log("All Cases have been deleted");

    //  Contact
    await this.createQueryJob(this.queryAndFileLookup("Contact").query);
    await this.checkJob("Contact");
    await this.createDeleteJob("Contact");
    await this.uploadFile(this.queryAndFileLookup("Contact").file);
    await this.completeInsertJob();
    console.log("All Contacts have been deleted");

    //  Account
    await this.createQueryJob(this.queryAndFileLookup("Account").idQuery);
    await this.checkJob("Account");
    await this.createDeleteJob("Account");
    await this.uploadFile(this.queryAndFileLookup("Account").file);
    await this.completeInsertJob();
    console.log("All Accounts have been deleted");
  }

  async createAndUploadAccounts() {
    // extract userids to map to accounts
    await this.createQueryJob(this.queryAndFileLookup("User").query);
    await this.checkJob("User");

    // write the accounts to csv with mapped user ids
    createAccounts(
      this.numAccounts,
      this.userIDs,
      this.currentSfInstance,
      this.seedIndex
    );

    // upload 'em
    await this.createJob("Account");
    await this.uploadFile("./accounts.csv");
    await this.completeInsertJob();

    const isJobFinished = await this.checkJobProgress();

    if (isJobFinished) {
      await this.createAndUploadOppies();
      await this.createAndUploadContacts();
      // await this.createAndUploadLeads();
    }
  }

  async createAndUploadOppies(numOppies) {
    await this.createQueryJob(this.queryAndFileLookup("User").query);
    await this.checkJob("User");

    await this.createQueryJob(this.queryAndFileLookup("Account").query);
    await this.checkJob("Account");

    // write the accounts to csv with mapped user ids
    createTheOppies({
      startDate: this.startDate,
      endDate: this.endDate,
      userIds: this.userIDs,
      numOppies
    });

    // upload 'em
    await this.createJob("Opportunity");
    await this.uploadFile("./oppies.csv");
    await this.completeInsertJob();

    const isJobFinished = await this.checkJobProgress();
    if (isJobFinished) {
      console.log("Finished processing opportunity ingest", isJobFinished);
    }
  }

  async createAndUploadContacts() {
    // write the accounts to csv with mapped user ids
    createTheContacts(this.userIDs);

    // upload 'em
    await this.createJob("Contact");
    await this.uploadFile("./contacts.csv");
    await this.completeInsertJob();

    const isJobFinished = await this.checkJobProgress();
    if (isJobFinished) {
      console.log("Finished processing contact ingest");
    }
  }
  async createAndUploadLeads() {
    // write the accounts to csv with mapped user ids
    createTheLeads(this.userIDs);

    // upload 'em
    await this.createJob("Lead");
    await this.uploadFile("./leads.csv");
    await this.completeInsertJob();

    const isJobFinished = await this.checkJobProgress();
    if (isJobFinished) {
      console.log("Finished processing lead ingest");
    }
  }
}

const listObjectInfo = async (object, query) => {
  try {
    const url = `/services/data/v58.0/sobjects/${object}/describe`;
    return axios.get(url, {
      headers: {
        "Content-Type": "text/csv",
      },
      body: {
        query,
        operation: "query",
      },
    });
  } catch (err) {
    console.log(err);
  }
};
const failedResults = async (id) => {
  const url = `/services/data/v58.0/jobs/ingest/${this.job.id}/failedResults/`;
  try {
    const foo = await axios.get(url, {
      headers: {
        "Content-Type": "text/csv",
      },
    });
    return foo;
  } catch (err) {
    console.log(err);
  }
};

// const Foo = new DemoBeams();
// await Foo.loginToSalesforce('aryeh+sf+full+bob@crossbeam.com');
// await Foo.setupEnvironment('aryeh+sf+fifty@crossbeam.com');
// await Foo.createAndUploadAccounts();
// await Foo.purgeAllOfTheThings();
// const failed = await Foo.getBatchResults('751Dn00000KLTbc');
// console.log(Foo.startDate, Foo.endDate);
