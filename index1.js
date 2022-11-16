// Створити функцію, яка з 2 масивів створює
// об'єкт та повертає його
// 1 - ключі, 2 значення

const keys = ["first", "second", "third"];
const values = ["valueFirst", "valueSecond", "valueThird"];

function createObj() {
  const newObj = {};
  //   for (const key of keys) {
  //     let index = keys.indexOf(key);
  //     newObj[key] = values[index];
  //   }

  for (let i = 0; i < keys.length; i++) {
    if (values[i + 1]) {
      newObj[keys[i]] = values[i + 1];
      continue;
    }

    newObj[keys[i]] = "no values";
  }

  return newObj;
}

console.log(createObj());

// for(let i = 0; i < ; i++)

// const obj = {
//   key: "keyValue",
// };

// obj.test = "testValue";

// console.log(obj);
