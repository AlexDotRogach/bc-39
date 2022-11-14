// Напишіть функцію addN(n), яка поверне іншу функцію.
// Повернена функція повинна складати одержуваний аргумент
// з аргументом n функції, що повертає

function addFirst(n) {
  const test = 100;

  return function addSecond(n2) {
    return n + n2 + test;
  };
}

console.log(addFirst(5)(10));

// const resultTen = addFirst(10);

// console.log(result(10));
// console.log(result(20));

// console.log(resultTen(10));
// console.log(resultTen(20));
