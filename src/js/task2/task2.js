import './task2.css';

// Створити функцію, яка повертатиме масив промісів.
// Параметр amount відповідає за те, скільки промісів ми створимо.
// Створити змінну, що регулюватиме в якому стані повернеться проміс
// Вивести проміси в консоль.
function createPromisesArray(amount) {
  let promiseArray = [];
  for (let i = 0; i < amount; i += 1) {
    promiseArray.push(createPromise(i));
  }
  return promiseArray;
}

function createPromise(i) {
  return new Promise((resolve, reject) => {
    if (Math.round(Math.random())) {
      resolve(i);
    }
    reject(i);
  });
}

console.log(createPromisesArray(4));
