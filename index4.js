// Напишіть функцію mul(n,m), яка приймає
// два аргументи та повертає добуток цих аргументів
// 100 > "більше 100"
// 100 < "меньше 100"
// Передавати в функцію додатково 2 функції
// та викликати як колбек в залежності від умови

// function mul(n, m, more, less) {
//   let result = n * m;

//   if (result > 100) {
//     more(result);
//     return "";
//   }

//   less(result);
// }

// function moreHundred(number) {
//   console.log(` ${number} більше 100`);
// }
// function lessHundred(number) {
//   console.log(` ${number} меньше 100`);
// }

// mul(7, 4, moreHundred, lessHundred);

function validateStrings(str1, str2) {
  if (typeof str1 === "string" && typeof str2 === "string") {
    console.log("Both strings r strings");
  } else {
    console.log("One or more strings r not string");
  }
  console.log(typeof str1);
}
validateStrings("test1", "test2");
