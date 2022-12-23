import fetchBook from "./form-api/fetch.js";
import apiSettings from "./form-api/api-settings";

export default async function render() {
  const parent = document.querySelector(".books");
  const { BASE_URL: url } = apiSettings;

  const data = await fetchBook(url);

  parent.innerHTML = "";
  parent.insertAdjacentHTML("beforeend", createMarkup(data));
}

function createMarkup(data) {
  return data
    .map(({ id, name, rating, describe }) => {
      return `
    <div class="books__item" data-id=${id}>
    <div class="books__name"><span>name:</span>${name}</div>
    <div class="books__rating"><span>rating:</span>${rating}</div>
    <div class="books__describe">
    ${describe}
    </div>
    <button class="delete">delete</button>
</div>
`;
    })
    .join("");
}
