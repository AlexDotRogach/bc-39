import addBook from "./form-api/manipulation-reqeust/add-book.js";
import updateBook from "./form-api/manipulation-reqeust/update-book.js";
import render from "./render";
import deleteBook from "./form-api/manipulation-reqeust/delete-book.js";

export default function app() {
  render();
  const books = document.querySelector(".books");
  const [add, update] = document.querySelectorAll("form");

  books.addEventListener("click", deleteBook);
  add.addEventListener("submit", addBook);
  update.addEventListener("submit", updateBook);
}
