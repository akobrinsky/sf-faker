import dotenv  from "dotenv"
dotenv.config()

const user1 = process.env.USER_ONE_ID
const user2 = process.env.USER_TWO_ID

const USER_IDS = [user1]

if (user2) USER_IDS.push(user2)

const memoizeUnique = (callback) => {
  let store = {};
  return function(...args) {
    let result;
    do {
      result = callback(...args);
      const key = JSON.stringify(args) + JSON.stringify(result);
      if (!store.hasOwnProperty(key)) {
        store[key] = result;
        break;
      }
    } while (true);
    return result;
  };
}

export {
  USER_IDS,
  memoizeUnique
}