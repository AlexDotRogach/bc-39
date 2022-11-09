// 1.
// За допомогою циклу for створіть новий рядок, додайте кожному элементу окрім 1 та останнього -.
// 1-2-3-4-5-6-7-8-9 - кінцевий результат

const numbers = "123456789";
let newNumbers = "";

for (let i = 0; i < numbers.length; i += 1) {
  if (i === numbers.length - 1) {
    newNumbers += numbers[i];
    continue;
  }

  newNumbers += numbers[i] + `-`;
}

// newNumbers = newNumbers.slice(0, newNumbers.length - 1);

console.log(newNumbers);

// str.slice(start, end);
