// Потрібно дістати кожну першу букву та вивести їх через крапку в більшому регістрі
// I am a student again --> S.A
// Якщо в нас слово має тільки дві букви або одну то пропускаємо

const phase = "I am a student again ";
let currentWord = "";
let result = "";

for (let i = 0; i < phase.length; i += 1) {
  currentWord += phase[i];

  if (phase[i + 1] === " ") {
    currentWord = currentWord.trim();
    if (currentWord.length > 2) {
      result += currentWord[0].toUpperCase() + ".";
    }

    currentWord = "";
  }
}

console.log(result.slice(0, -1));
