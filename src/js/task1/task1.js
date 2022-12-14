import './task1.css';

// Є 2 input, перший відповідає за ключ об'єкта інший за значення.
// Зробіть так, щоб у консоль виводився об'єкт після відправки,
// використовуй json parce. Приклад формату json: '{"key":"sad","value":"asd"}'

const formEl = document.querySelector('#form');

formEl.addEventListener('submit', onSubmitObject);
checkStorage(formEl);

function onSubmitObject(e) {
  e.preventDefault();
  const data = new FormData(form);
  const inputObj = {};

  for (let [key, value] of data) {
    inputObj[key] = value;
  }

  const jsonObj = JSON.stringify(inputObj);

  localStorage.setItem('value', jsonObj);
}

function checkStorage({ elements }) {
  if (localStorage.length > 0) {
    const parseObj = JSON.parse(localStorage.getItem('value'));

    // v2
    // const { key, value } = elements;
    // const arr = [key, value];
    // console.log(elements);
    // for (const key in parseObj) {
    // v1
    //   elements[key].value = parseObj[key];
    // end v1
    //   v2
    //   arr.forEach(item => {
    //     if (item.name === key) {
    //       item.value = parseObj[key];
    //     }
    //   });
    // }

    // v3
    // for (let key in elements) {
    //   console.log(form[key]);
    //   if (form[key]) {
    //     if (parseObj[form[key].name]) {
    //       form[key].value = parseObj[form[key].name];
    //     }
    //   }
    // }
  }
}

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let i = 0;

// while (i < 10) {
//   i++;
//   console.log(i);
// }

// do {

// } while (i !== 0);

// const test = [['test'], ['testSecond']];

// console.log(test);
