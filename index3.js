// Дано масив з рядками.
// Створіть функцію яка
// зробіть великим перший символ кожного рядка.

const strings = ["java", "sql", "javaScript", "c++", "node"];

function increaseFirstLetter(array) {
  return array.map((word) => `${word[0].toUpperCase()}${word.slice(1)}`);
}

function findLetter(letter, array) {
  //   return array
  //   .reduce((acc, word) => {
  //     if (word.toLowerCase().includes(letter.toLowerCase())) acc += 1;
  //     return acc;
  //   }, 0);

  return array.filter((word) =>
    word.toLowerCase().includes(letter.toLowerCase())
  ).length;
}

// console.log(increaseFirstLetter(strings));
// console.log(findLetter("J", strings));

function createObj(words, increase, find, ...restLetters) {
  const obj = {
    upperFirstLetter: increase(words),
    counterLetters: {},
  };

  if (restLetters.length > 0) {
    restLetters.forEach(
      (letter) => (obj.counterLetters[letter] = find(letter, words))
    );
  }

  return obj;

  //   console.log(restLetters);
}

console.log(createObj(strings, increaseFirstLetter, findLetter, "k", "j"));
