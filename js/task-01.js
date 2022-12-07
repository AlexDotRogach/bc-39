// реалізувати на основі вспливання зміну коліру

const divs = document.querySelectorAll("div");

divs.forEach((div) => {
  div.addEventListener("click", clickDiv);
});

function clickDiv(e) {
  console.log(e.currentTarget);
}
