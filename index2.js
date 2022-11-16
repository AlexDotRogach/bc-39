// Створити функцію, яка з об'єкта
// створює масиви та повертає масив цих масивів
// 1 - ключі, 2 значення

const obj = {
  first: "valueFirst",
  second: "valueSecond",
  third: "valueThird",
};

function createArr(obj) {
  const keys = [];
  const values = [];

  // for (const key in obj) {
  //   keys.push(key);
  //   values.push(obj[key]);
  // }

  // for (const key of Object.keys(obj)) {
  //   keys.push(key);
  //   values.push(obj[key]);
  // }

  return { keys: keys, values: values };
}

console.log(createArr(obj));
