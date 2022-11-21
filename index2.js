// Знайти найбільше значення масиву
const arr = [14, 300, 32, 12, 43, -23];

function maxNumber(arr) {
  let compareNumber = arr[0];

  for (const item of arr) {
    if (compareNumber < item) {
      compareNumber = item;
    }
  }
  return compareNumber;
}

console.log(maxNumber(arr));

console.log(...arr);

console.log(Math.min(...arr));
