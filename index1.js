// Вивести перші букви ключів об'єкта,
// Та створити функцію яка повертає об'єкт
// з кількістю повторення букв

const objValues = {
  first: "valueFirst",
  second: "valueSecond",
  third: "valueThird",
  fourth: "valueFourth",
  Fifth: "valueFifth",
  sixth: "valueSixth",
};

console.log(counterFirstLetters(objValues));

// {
//   f: 3,
//   t: 1,
//   s: 2
// }

function counterFirstLetters(obj) {
  const FirstLettersObj = {};

  for (const key in obj) {
    const firstLetter = key[0].toLowerCase();

    // console.log(FirstLettersObj[firstLetter]);

    if (FirstLettersObj.hasOwnProperty(firstLetter)) {
      FirstLettersObj[firstLetter] += 1;
      continue;
    }

    FirstLettersObj[firstLetter] = 1;
  }

  return FirstLettersObj;
}
