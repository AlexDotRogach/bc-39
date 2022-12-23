export default async function fetchBook(url, headers) {
  // return fetch(url, headers)
  //   .then((response) => {
  //     if (!response.ok) {
  //       throw new Error(response.status);
  //     }
  //     return response.json();
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  try {
    const response = await fetch(url, headers);
    console.log(response.ok);
    const data = response.ok
      ? await response.json()
      : showError(response.status);

    if (data) return data;
  } catch (error) {
    console.log("Erorr", error);
  }
}

function showError(status) {
  switch (`${status}`) {
    case "404":
      console.log("Info for user");
      break;
  }

  return false;
}
