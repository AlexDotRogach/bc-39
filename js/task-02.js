// Сплив і занурення.
// Потрібно зробити так,
// щоб на Capturing phase (занурення) div фарбувався в чорний,
// Після 1 кліка відбудится фаза Capturing, потім після натискання кнопки
// ми змінемо поведінку та зробимо так, щоб процес став
// Bubbling phase (спливання) і вже тут покрасити в сірий

const allBoxes = document.querySelectorAll("div");
const button = document.querySelector(".up");

button.addEventListener("click", onclick);

function chageColor({ currentTarget }) {
  currentTarget.style.backgroundColor = "black";
  console.log(event.currentTarget);
}

allBoxes.forEach((box) => {
  box.addEventListener("click", chageColor);
});

function onclick(event) {
  allBoxes.forEach((box) => {
    box.removeEventListener("click", chageColor);
    box.addEventListener("click", chageColorToGray, true);
  });
}
function chageColorToGray({ currentTarget: ct }) {
  ct.style.backgroundColor = "gray";
  console.log(ct);
  setTimeout(() => {
    ct.innerHTML += "test";
  }, 300);
}
