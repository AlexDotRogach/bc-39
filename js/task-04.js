// Є інпут з вибором типу
// При зміні значення інпут
// div з атрибутом canChange змінюються
// на ті, що були обрані в інпуті

// const changeElement = document.querySelectorAll("div[canchange]");
const inputForm = document.querySelector("#type");

inputForm.addEventListener("change", changeShape);

// function changeShape({ target: { value } }) {
//   for (let el of changeElement) {
//     const { classList } = el;

//     classList.remove(classList.value);
//     classList.add(value);
//   }
// }

//for (let el of changeElement) {
//    el.addEventListener('', changeShape)
//}

// function changeShape({ target: { value } }) {
//   let changeElement = document.querySelector("div[canchange]");

//   while (changeElement.nextElementSibling) {
//     const { nextElementSibling } = changeElement;

//     if (!changeElement.hasAttribute("canchange")) {
//       changeElement = nextElementSibling;
//       continue;
//     }

//     changeElement.classList = [value];
//     changeElement = nextElementSibling;
//   }
// }

function changeShape(element) {
  console.log(element);

  if (!element) return "";

  changeShape(element.nextElementSibling);
}

changeShape(document.querySelector("div[canchange]"));
