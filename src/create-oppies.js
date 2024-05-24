import { faker } from "@faker-js/faker";
import { format } from "@fast-csv/format";
import { parseFile } from "@fast-csv/parse";
import { createWriteStream } from "fs";
import { DateTime } from "luxon";

const ingestFileName = "extracted-accounts.csv";
const oppyCSV = createWriteStream("oppies.csv");

const stream = format({ headers: true });
stream.pipe(oppyCSV);

function getMinMaxForAverage(average, range = 20) {
  const min = average - range;
  const max = average + range;
  return { min, max };
}

export const createTheOppies = ({ startDate, endDate, userIds }) => {
  // Build up account id and names from SF account export
  userIds;
  let numberOfOppiesCreated = 0;
  const accountIdsAndNames = [];
  parseFile(ingestFileName)
    .on("error", (error) => console.error(error))
    .on("data", (row) => {
      const [ID, NAME] = row;
      const numberOfOpps = faker.number.int({ min: 1, max: 2 });
      if (ID !== "ID") {
        numberOfOppiesCreated += numberOfOpps;
        accountIdsAndNames.push(
          buildOpps(numberOfOpps, NAME, ID, startDate, endDate, userIds)
        );
      }
    })
    .on("end", (rowCount) => {
      console.log(
        `finished creating opportunities: ${numberOfOppiesCreated} created`
      );
    });
};

const buildDumbName = (name) => {
  const extraOppyTitle = `${faker.company.catchPhraseAdjective()} ${faker.word.noun()}`;
  return `${name} - ${extraOppyTitle}`.replace(/(^|[\s-])\S/g, (match) =>
    match.toUpperCase()
  );
};

function buildOpps(
  amount,
  accountName,
  AccountId,
  startDate,
  endDate,
  userIds
) {
  const types = [
    "Existing Customer - Upgrade",
    "Existing Customer - Replacement",
    "Existing Customer - Downgrade",
    "New Customer",
  ];
  const stages = [
    { weight: 1, value: "Prospecting" },
    { weight: 1, value: "Qualification" },
    { weight: 1, value: "Needs Analysis" },
    { weight: 1, value: "Value Proposition" },
    { weight: 1, value: "Perception Analysis" },
    { weight: 4, value: "Closed Won" },
    { weight: 1, value: "Closed Lost" },
  ];
  for (let i = 0; i < amount; i += 1) {
    const StageName = faker.helpers.weightedArrayElement(stages);
    const from = DateTime.fromSeconds(startDate);
    const end = DateTime.fromSeconds(endDate);

    const isClosed = StageName === "Closed Won" || StageName === "Closed Lost";

    // if deal is closed, we need to put the close date in the past
    // generally deal close dates are set to the future though
    const closeDateOptions = isClosed
      ? {
          from,
          to: DateTime.local().minus({ days: 1 }),
        }
      : {
          from: DateTime.local().plus({ days: 2 }),
          to: end,
        };

    const Name = buildDumbName(accountName);

    const { min, max } = getMinMaxForAverage(150)

    const CloseDate = faker.date.between(closeDateOptions).toISOString();
    const earliestCreateDate = DateTime.fromISO(CloseDate).minus({ days: max }); 
    const latestCreateDate = DateTime.fromISO(CloseDate).minus({ days: min }); 

    const CreatedDate = isClosed
      ? faker.date
          .between({
            from: earliestCreateDate.toJSDate(),
            to: latestCreateDate.toJSDate(),
          })
          .toISOString()
      : faker.date
          .between({
            from: DateTime.local().minus({ days: 125 }),
            to: DateTime.local().minus({ days: 1 }),
          })
          .toISOString();
if (isClosed) {

  console.log({
    CreatedDate,
    CloseDate,
  });
}

    stream.write({
      AccountId,
      CloseDate,
      CreatedDate,
      Name,
      StageName,
      OwnerId: faker.helpers.arrayElement(userIds),
      Type: faker.helpers.arrayElement(types),
      Amount: faker.finance.amount(50000, 400000, 0),
    });
  }
}

createTheOppies({
  startDate: 1664376515,
  endDate: 1727534915,
  userIds: ["005Ho0000090mJaIAI", "005Ho0000090m2MIAQ"],
});


const buildUnixTime = (date) => {
  const foo = new Date(date);
  return Math.round(foo.getTime() / 1000);
};

const { min, max } = getMinMaxForAverage(150)  
