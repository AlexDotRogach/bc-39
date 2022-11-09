// Дано число. Ділить його на 2 стільки разів,
// поки результат поділу не стане меншим за 20.
// Коли результат поділу стане меньше за 20 вивести:
// Кількість ітерацій, саме число

let number = 1000;
let currentNumber = number;

for (let i = 1; i < number; i += 1) {
  currentNumber /= 2;

  if (currentNumber < 20) {
    console.log(`Number = ${Math.round(currentNumber)}. interation = ${i}`);
    break;
  }
}
