// Потрібно викинути мусор з массива, якщо там є
// null, undefined, true, false то видаляємо та
// Виводемо скільки мусора ми знайшли

// const arr = [1, 2, true, 3, undefined, "str", null, "asd", false]; --> [1,2,3,"str","asd"]

const arr = [1, 2, true, 3, undefined, "str", null, "asd", false];
// const missedArr = [true, undefined, null, false];
const newArr = [];

// for (let i = 0; i < arr.length; i += 1) {
//   if (missedArr.includes(arr[i])) continue;

//   newArr.push(arr[i]);
// }

// console.log(newArr);

for (const item of arr) {
  switch (item) {
    case true:
    //   break;
    case undefined:
      console.log("data");
    //   break;
    case null:
    //   break;
    case false:
      break;
    default:
      newArr.push(item);
  }
}

console.log(newArr);
