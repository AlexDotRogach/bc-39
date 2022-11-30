// Отримати всі div і якщо
// дата атрибут дорівнюватиме
// good фарбувати в зелений якщо bad в червоний
// якщо unknown то в білий

const elementsEl = document.querySelectorAll("[data-name]");

const settingState = {
  good: "green",
  bad: "red",
  unknown: "white",
};

elementsEl.forEach((element) => {
  element.style.backgroundColor = settingState[element.dataset.name];
});

// good  - green
// bad - red
// unknown - white
