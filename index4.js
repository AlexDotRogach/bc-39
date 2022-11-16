// Напишіть функцію, яка
// поверхнево зрівнює два об'єкта.

const obj1 = {
  name: "Alex",
  surname: "Test3",
};

const obj2 = {
  name: "Alex",
  surname: "Test3",
};

function compare(firstObj, secondObj) {
  for (const key in firstObj) {
    if (secondObj[key]) {
      if (secondObj[key] === firstObj[key]) {
        console.log(secondObj[key]);
        continue;
      }
      return false;
    }

    console.log(`firstObj has a key that not in secondObj - ${key}`);
  }
  return true;
}

console.log(compare(obj1, obj2));
