// Дано посилання. Прив'яжіть всім
// посиланням подію - за наведенням на
// посилання в атрибут title запишеться її текст.

const selectEl = document.querySelectorAll("a");
console.log(selectEl);

for (const el of selectEl) {
  el.addEventListener("mouseout", addTitle);
}

function addTitle(event) {
  const target = event.target;
  const text = target.textContent;

  target.dataset.title = text;
  target.setAttribute("title", text);
  target.removeAttribute("title");
  console.log(target.getAttribute("title"));
}
