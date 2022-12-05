import './index.css';
// 1. Реалізувати клас
// 2. створити масив, створити в констрокторі парента
// 3. Метод додавання
// 4. Метод видалення
// 5. Метод рендера списку
// 6. Кнопки видалення з елементів

class ToDoList {
  static createMarkup(text) {
    return `
    <div class="item">
        <div class="text">${text}</div>
          <button class="delete">remove</button>
    </div>
    `;
  }

  #items = [];

  constructor(parent) {
    this.parent = parent;
  }

  addItem(value) {
    if (!value || this.#items.includes(value)) return '';

    this.#items.push(value);
    this.renderItem();
  }

  removeItem({
    target: {
      previousElementSibling: { textContent },
    },
  }) {
    this.#items.splice(this.#items.indexOf(textContent), 1);
    this.renderItem();
  }

  renderItem() {
    this.parent.innerHTML = '';
    this.parent.insertAdjacentHTML(
      'beforeend',
      [...this.#items.map(ToDoList.createMarkup)].join('')
    );

    [...this.parent.children].forEach(({ lastElementChild }) =>
      lastElementChild.addEventListener('click', this.removeItem.bind(this))
    );
  }

  onSubmit(e) {
    e.preventDefault();
    const {
      target: {
        elements: {
          text: { value },
        },
      },
    } = e;

    this.addItem(value);
  }
}

const myToDo = new ToDoList(document.querySelector('.items'));

const form = document.querySelector('#form');

form.addEventListener('submit', myToDo.onSubmit.bind(myToDo));
