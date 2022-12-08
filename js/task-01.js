// Вивести всі батьківські числа
const containerEl = document.querySelectorAll("[number]");

containerEl.forEach((element) => {
  element.addEventListener("click", onclick, { capture: true });
});

function onclick(e) {
  alert(e.currentTarget.textContent);
}
