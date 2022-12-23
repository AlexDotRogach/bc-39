import fetchBook from "../fetch";
import apiSettings from "../api-settings";

export default function deleteBook({ target }) {
  if (!target.classList.contains("delete")) return "";

  const { BASE_URL, headersApi } = apiSettings;
  const id = target.parentElement.dataset.id;

  target.parentElement.remove();
  fetchBook(`${BASE_URL}/${id}`, headersApi("DELETE", []));
}
