import { DEFAULT_URL } from './github-settings';

export default function getUser(login, { dataInfo }) {
  return fetch(`${DEFAULT_URL}${login}`)
    .then(response => {
      if (response.ok) return response.json();
      throw { error: new Error(response.status), login };
    })
    .then(({ name, created_at }) => {
      return { name, date: created_at };
    })
    .catch(({ error, login }) => {
      console.log(error);
      for (const span of dataInfo.children) {
        span.textContent = '';
      }

      dataInfo.children[0].textContent = `${login} not found`;
    });
}
