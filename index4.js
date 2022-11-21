// Спростіть коллбек через стрілочну функцію.

// let result = every([1, -1, 3, 4, 5], function (elem) {
//   if (elem > 0) {
//     return true;
//   } else {
//     return false;
//   }
// });

// function every(arr, callback) {
//   const newArr = [];

//   arr.forEach((element) => {
//     newArr.push(callback(element));
//   });

//   return newArr;
// }

// console.log(result);

// function bulleanCheck(array) {
//   const trueArray = array.filter((item) => item > 0).map(() => true);
//   const falseArray = array.filter((item) => item < 0).map(() => false);

//   return trueArray.concat(falseArray);
// }
// console.log(bulleanCheck([1, -1, 3, 4, 5]));

function bulleanCheck(array) {
  return array.reduce((acc, item) => {
    // if (item > 0) {
    //   acc.push(true);
    //   return acc;
    // }
    // acc.push(false);
    // return acc;

    item > 0 ? acc.push(true) : acc.push(false);
    return acc;
  }, []);
}

console.log(bulleanCheck([1, -1, 3, 4, 5]));
