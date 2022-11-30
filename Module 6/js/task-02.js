// Отримати всі елементи div з класом pane
// І перезаписати текст на текст із масива

const texts = [
  { name: "Кінь", text: "Навіщо я прочитав про коня" },
  { name: "Віслюк", text: "Навіщо я прочитав про віслюка" },
  { name: "Корова", text: "Навіщо я прочитав про корову" },
];

const panes = document.querySelectorAll(".pane");

panes.forEach((pane) => {
  // console.log(pane.firstElementChild.textContent);
  texts.forEach((text) => {
    if (text.name === pane.firstElementChild.textContent)
      console.log(pane.firstElementChild);
    pane.lastElementChild.textContent = text.text;
  });
});

console.log(document.querySelector("title"));
