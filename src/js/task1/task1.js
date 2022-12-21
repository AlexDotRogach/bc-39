import './task1.css';

import getUser from './api/get-user';
// Створити функцію getUser, яка отримує першим параметром
// логін користувачів веб-сервісу «Github».
// Вивести на сторінку дані із запиту в контейнер name та date(created_at).
// Виводити лише дату та ім'я
// https://api.github.com/users/ім'я нашого користувача - api

const refs = {
  form: document.querySelector('.form'),
  dataInfo: document.querySelector('.data'),
};

refs.form.addEventListener('submit', inputLogin);

function inputLogin(e) {
  e.preventDefault();
  const {
    user: { value: login },
  } = e.currentTarget.elements;
  getUser(login, refs).then(data => showUser(data));
}

function showUser(obj) {
  const acceptValues = ['name', 'date'];

  for (const key in obj) {
    document.querySelector(
      `.${acceptValues.includes(key) ? key : 'garbage'}`
    ).textContent = obj[key];
  }
}
