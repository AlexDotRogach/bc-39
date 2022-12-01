// Дано абзаци з числами. Після
// натискання на абзац у ньому має
// з'явитися квадрат числа, що містить.

const findParagraphs = document.querySelectorAll("p");

for (let i = 0; i < findParagraphs.length; i++) {
  findParagraphs[i].addEventListener("click", numQuadro);
}

function numQuadro({ target }) {
  const { textContent } = target;

  if (!isNaN(+textContent)) target.textContent *= textContent;
}

const arr = [1, 3, 3, 4, 5];

function test(value1, value2, ...arg) {
  console.log(value1, value2, arg);
}

test(...arr);
