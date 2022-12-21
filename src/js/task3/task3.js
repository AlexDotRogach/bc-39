import './task3.css';

// Написати сценарій, при якому при натисканні кнопки чек,
// ми перевіряємо текст і якщо якась літера повторилася понад
// 5 разів
// то виводимо: letter |your letter| repeated more than five times
// Якщо все добре в консолі ми повинні побачити:
// a repeated 3 times task3.js:28:13
// s repeated 3 times task3.js:28:13
// d repeated 3 times task3.js:28:13
//   repeated 2 times
// Написати сценарій, при якому при натисканні кнопки чек,
// ми перевіряємо текст і якщо якась літера повторилася понад
// 5 разів
// то виводимо: letter |your letter| repeated more than five times
// Якщо все добре в консолі ми повинні побачити:
// a repeated 3 times task3.js:28:13
// s repeated 3 times task3.js:28:13
// d repeated 3 times task3.js:28:13
//   repeated 2 times

const form = document.querySelector('#form');

form.addEventListener('submit', checkLetters);

function checkLetters(event) {
  event.preventDefault();
  let textInput = event.currentTarget.elements['form-text'].value;
  // console.log(textInput);
  const objText = {};
  for (let i = 0; i < textInput.length; i++) {
    if (objText[textInput[i]]) {
      objText[textInput[i]] += 1;
    } else {
      objText[textInput[i]] = 1;
    }
  }
  infoLetters(objText)
    .then(objRes => {
      for (const key in objRes) {
        console.log(`${key} repeated ${objRes[key]} times`);
      }
    })
    .catch(letter => {
      console.log(`letter ${letter} repeated more than five times`);
    });
  // console.log(objText);
  // const inputString = event;
  // console.log(inputString);
}

function infoLetters(objLetters) {
  return new Promise((resolve, reject) => {
    for (const key in objLetters) {
      // console.log(objLetters[key]);
      if (objLetters[key] >= 5) {
        reject(key);
      }
    }
    resolve(objLetters);
  });
}
