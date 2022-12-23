import fetchBook from "../fetch";
import apiSettings from "../api-settings";
import render from "../../render";

export default async function updateBook(e) {
  e.preventDefault();
  const { BASE_URL, headersApi } = apiSettings;

  const {
    name: { value: name },
    rating: { value: rating },
    describe: { value: describe },
  } = e.target.elements;

  const data = {
    name,
    rating,
    describe,
  };

  const books = document.querySelector(".books");

  const { is, element } = checkInBooks(books, data.name);

  if (!is) return "";

  const id = element.dataset.id;

  const dataResp = await fetchBook(
    `${BASE_URL}/${id}`,
    headersApi("PATCH", data)
  );

  render();
}

function checkInBooks(books, name) {
  const data = [...books.children].filter(
    ({ firstElementChild }) =>
      firstElementChild.textContent.slice(
        firstElementChild.textContent.indexOf(":") + 1
      ) === name
  );
  return {
    is: data.length > 0,
    element: data[0],
  };
}
