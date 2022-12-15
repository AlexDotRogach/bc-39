import './task2.css';

// 3) Напишіть функцію printNumbers(from, to),
// яка виводить число кожну секунду, починаючи
// з from і закінчуючи to.
// function printNumbers(from, to){

function printNumbers(from, to) {
  const intervalId = setInterval(() => {
    console.log(from);
    from += 1;

    if (from > to) {
      clearInterval(intervalId);
    }
  }, 1000);
}

printNumbers(1, 10);

// function printNumbers(from, to) {
//     if (from > to) {
//       clearInterval(intervalId);
//     }
//   }

//   let counter = 0;

//   const intervalId = setInterval(() => {
//     counter += 1;
//     console.log(counter);
//     printNumbers(counter, 3);
//   }, 1000);
