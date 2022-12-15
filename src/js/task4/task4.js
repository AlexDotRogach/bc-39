import './task4.css';
// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
// 4) Напишіть функію яка буде зчитувати з
// інпута введену дату,
// та виводити на сторінку різницю секунд
// хвилин годин днів віддосно сьогоднішної дати

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     console.log(selectedDates[0]);
//   },
// };

// flatpickr('#datetime-picker', options);

// const form = document.querySelector('#form');
// const output = document.querySelector('#root');

// form.addEventListener('submit', insertDifference);

// function insertDifference(e) {
//   e.preventDefault();
//   const value = e.currentTarget.elements.data.value;
//   console.log(value);
//   const inputDate = new Date(value).getTime();
//   const currentDate = new Date().getTime();

//   console.log(convertMs(Math.abs(currentDate - inputDate)));

//   output.insertAdjacentHTML(
//     'beforeend',
//     createDateMarkup(convertMs(Math.abs(currentDate - inputDate)))
//   );
// }

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// function createDateMarkup({ days, hours, minutes, seconds }) {
//   return `
//         <span style="display: flex; flex-direction: column;">
//         <span>days: ${days}</span> <span>hours: ${hours}</span> <span>minutes: ${minutes}</span> <span>seconds: ${seconds}</span>
//         </span>
//     `;
// }

function parallel(funcArray, doneAll) {
  const arr = [];

  for (const fun of funcArray) {
    arr.push(
      new Promise(res => {
        return fun(res);
      })
    );
  }

  Promise.all(arr).then(data => {
    doneAll(data);
  });
}

var a = function (done) {
  setTimeout(function () {
    done('result a');
  }, 300);
};

var b = function (done) {
  setTimeout(function () {
    done('result b');
  }, 200);
};

parallel([a, b], function (results) {
  console.log(results); // ['result a', 'result b']
});
