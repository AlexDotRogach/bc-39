export default function getResult(url) {
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(response.status);
    })
    .catch(console.log);
}
