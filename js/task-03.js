// Наведено список повідомлень з кнопками
// для видалення [x]. Змусіть кнопки працювати.

// const btn = document.querySelectorAll(".remove-button");

// btn.forEach((button) => {
//   button.addEventListener("click", removeClick);
// });
// function removeClick(event) {
//   event.target.parentElement.remove();
// }

const container = document.querySelector("#container");

container.addEventListener("click", removeClick);

function removeClick(event) {
  if (event.target.classList.contains("remove-button"))
    event.target.parentElement.remove();
}
