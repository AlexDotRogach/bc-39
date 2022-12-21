import './task2.css';

// Створити сценарій при якому, коли користувач вводить букву
// йому повертаються з бекенда користувачі, потрібно зробити так щоб
// якщо в імені буде та буква, то потрібно повертати is, якщо немає то просто
// повернути ім'я
// 'https://jsonplaceholder.typicode.com/users' - api

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (response.ok) return response.json();
    throw new Error(response.status);
  })
  .then(data => {
    app(data);
  })
  .catch(error => {
    console.log(error);
  });

function app(data) {
  const inputEl = document.querySelector('input');
  const dataEl = document.querySelector('.data');

  inputEl.addEventListener('input', onInputAction);

  function onInputAction(e) {
    const inputData = e.target.value;
    const dataFilter = data.filter(({ name }) => {
      return name.indexOf(inputData) >= 0;
    });
    console.log(dataFilter);
    showData(dataFilter);
  }
  
  function createMarkup(obj) {
    return `<div>
    <span>Name: ${obj.name}</span>
    <span>Tel: ${obj.phone}</span>
    </div>`;
  }

  function showData(arrData) {
    dataEl.innerHTML = '';
    dataEl.insertAdjacentHTML(
      'beforeend',
      arrData.map(data => createMarkup(data)).join('')
    );
  }
}
