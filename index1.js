// Даний масив із числами.
// Створіть функцію
// яка буде збільшивати
// кожний елемент удвічі.

const numbers = [1, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersSecond = [1, 3, 2, 5];

// const doubleNumbers = numbers.map((number) => number * 2);
const doubleNumbers = (array) => array.map((item) => item * 2);

// console.log(doubleNumbers);
console.log(doubleNumbers(numbers));
console.log(doubleNumbers(numbersSecond));
