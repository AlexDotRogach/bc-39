// Порахуйте скільки повторюваних значень
// у масиві та видаліть дублікати
// result:
// [1,1,3,4,5,6,7,8,9,12,9,9,7] => our arr: 1,3,4,5,6,7,8,9,12
//                                 Repeated elements: 1,9,9,7
const arrNumbers = [1, 1, 3, 4, 5, 6, 7, 8, 9, 12, 9, 9, 7];
const arrClearNumbers = [];

// for (const number of arrNumbers) {
//   if (arrClearNumbers.includes(number)) {
//     arrRepeatedNumbers.push(number);
//   } else {
//     arrClearNumbers.push(number);
//   }
// }
// console.log(
//   `'arrClearNumbers' ${arrClearNumbers},
// 'arrRepeatedNumbers' ${arrRepeatedNumbers},
// 'length' ${arrRepeatedNumbers.length}`
// );

for (let i = 0; i < arrNumbers.length; i++) {
  if (arrNumbers.indexOf(arrNumbers[i]) === i)
    arrClearNumbers.push(arrNumbers[i]);
}

console.log(arrClearNumbers);
