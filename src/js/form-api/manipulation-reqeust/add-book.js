import fetchBook from "../fetch";
import apiSettings from "../api-settings";
import render from "../../render";

export default async function addBook(e) {
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

  await fetchBook(BASE_URL, headersApi("POST", data));

  render();

  // fetchBook(BASE_URL, headersApi("POST", data)).then(() => {
  //   render();
  // });
}
