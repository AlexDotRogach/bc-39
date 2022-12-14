import './task2.css';
import obj from './storage';

const { save, load } = obj;

// Зробити так, щоб при кліку на div у якого є атрибут data-order
// змінював колір. Реалізувати механізм, який буде зберігати
// стан нашого дива і при перезапуску сторінки зберігати колір.

const listContainer = document.querySelector('.container');

listContainer.addEventListener('click', onClickColor);
loadColorFromLocalStorage(listContainer);

function onClickColor(event) {
  if (event.target.dataset.order) {
    const color = getRandomHexColor();
    event.target.style.backgroundColor = color;
    setLocalStorageColor(event.target.dataset.order, color);
  }
}

function setLocalStorageColor(key, color) {
  const obj = { [key]: color };
  let finishObj = {};

  finishObj = localStorage.getItem('divsColor')
    ? { ...load('divsColor'), ...obj }
    : // ? { ...JSON.parse(localStorage.getItem('divsColor')), ...obj }
      obj;

  //   if (localStorage.getItem('divsColor')) {
  //     finishObj = { ...JSON.parse(localStorage.getItem('divsColor')), ...obj };
  //   } else {
  //     finishObj = { ...obj };
  //   }

  save('divsColor', finishObj);
  //   localStorage.setItem('divsColor', JSON.stringify(finishObj));
}

function loadColorFromLocalStorage(parent) {
  if (localStorage.length > 0) {
    // const storageObj = JSON.parse(localStorage.getItem('divsColor'));
    const storageObj = load('divsColor');

    for (const div of parent.children) {
      if (storageObj[div.dataset.order]) {
        div.style.backgroundColor = storageObj[div.dataset.order];
      }
    }
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
