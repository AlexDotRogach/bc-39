import './task2.css';
import check from './checkFizzBuzz';
// Потрібно написати функцію, що
// виводить у консоль числа від 1 до n, де n
// - це ціле число, яка функція приймає
// як параметр, з такими умовами:
// виведення fizz замість чисел, кратних 3;
// виведення buzz замість чисел, кратних 5;
// виведення fizz buzz замість чисел, кратних як 3, і 5.

// function fizzBuzz(n) {
//   for (let i = 0; i < n; i++) {
//     console.log(check(i));
//   }
// }

// fizzBuzz(20);

function fizzBuzz(n) {
  if (n === 0) {
    return '';
  }

  console.log(check(n));

  fizzBuzz(n - 1);
}

fizzBuzz(10);
