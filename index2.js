// Створити функцію, яка буде
// виводити в консоль привітання і
// Статичне ім'я (наприклад, user).
// Перебрати масив і на кожній ітерації її викликати

const objSpecWords = [
  { welcome: "Hello!", order: 1 },
  { welcome: "Hi!", order: 2 },
  { welcome: "Good evening!", order: 3 },
];

function showWelcome(name) {
  console.log(`${name},${this.welcome}`);
}

objSpecWords.forEach((word) => {
  showWelcome.call(word, "Alex");
});
