// Потрібно дістати кожну першу букву та вивести їх через крапку в більшому регістрі
// I am a student again --> S.A
// Якщо в нас слово має тільки дві букви або одну то пропускаємо
// const phrase = "I am a student again";
// let result = "";
// let currentWord = "";

// for (let i = 0; i < phrase.length; i += 1) {
//   if (phrase[i] === " " || i === phrase.length - 1) {
//     if (currentWord.length > 2) {
//       result += i === phrase.length - 1 ? currentWord[0] : currentWord[0] + ".";
//     }
//     currentWord = "";
//     continue;
//   }

//   currentWord += phrase[i];
// }

// console.log(result.toUpperCase());

// Переписати як з масивом

let phrase = "I am a student again";
const phraseArr = phrase.split(" ");
const result = [];
console.log(phraseArr);

for (const word of phraseArr) {
  if (word.length > 2) {
    result.push(word[0].toUpperCase());
  }
}

console.log(result.join("."));
