import './task3.css';
import addTask from './add-task/add-task';
import removeTask from './remove-task';

// для створення туду
{
  /* <div class="item">
  <div class="text">${text}</div>
  <button class="delete">remove</button>
</div>; */
}

const refs = {
  form: document.querySelector('#form'),
  items: document.querySelector('.items'),
};

const fun = e => addTask(e, refs);

refs.form.addEventListener('submit', fun);
refs.items.addEventListener('click', removeTask);
