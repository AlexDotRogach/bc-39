// Дано масив з рядками.
// Створіть функцію
// яка переверне символи кожного рядка
// у зворотному порядку.

const strings = ["java", "sql", "javaScript", "c++", "node"];

// function reverseStrings(array) {
//   const newArray = [];
//   array.forEach((item) => {
//     item.split("").reverse().join("");
//     newArray.push(item.split("").reverse().join(""));
//   });
//   return newArray;
// }

// function reverseStrings(array) {
//   return array.map(reverseWords);
// }

// function reverseWords(word) {
//   return word.split("").reverse().join("");
// }

// console.log(reverseStrings(strings));

console.log(
  strings.reduce((total, string) => {
    total.push(string.split("").reverse().join(""));

    return total;
  }, [])
);
