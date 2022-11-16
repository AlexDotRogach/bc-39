// Вивести кількість вкладених об'єктів в об'єкті

const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  stats1: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
  arr: [11, 22, 33],
};

function objectCounter(object) {
  let counter = 0;

  for (const key in object) {
    console.log(object[key]);

    if ("object" === typeof object[key] && !Array.isArray(object[key])) {
      counter += 1;
    }
  }

  return counter;
}

console.log(objectCounter(user));
