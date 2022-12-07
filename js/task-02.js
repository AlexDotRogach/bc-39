const infoEl = document.querySelectorAll("div");

for (const info of infoEl) {
  info.addEventListener("click", onClick);
}

function onClick(event) {
  event.target.firstElementChild.classList.toggle("hide");
  event.stopPropagation();
}
