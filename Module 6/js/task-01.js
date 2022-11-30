// Напишіть сценарій на JavaScript
// для встановлення кольору фону абзацу.
// Напишіть функцію яка буде повертати випадковий колір.
// та назначати абзацу

const paragraphEl = document.querySelectorAll("p");

function randomColor() {
  return `rgb(${randomRgb(3)})`;
}

function randomRgb(num) {
  const arr = [];

  for (let i = 0; i < num; i++) {
    arr.push(Math.round(Math.random() * 256));
  }

  return [...arr];
}

function changeBgColor(paragraphs) {
  // for (let i = 0; i < paragraphs.length; i++) {
  //   paragraphs[i].style.backgroundColor = randomColor();
  // }

  paragraphs.forEach(
    (paragraph) => (paragraph.style.backgroundColor = randomColor())
  );
}

changeBgColor(paragraphEl);

// rgb(244, 232, 232);
