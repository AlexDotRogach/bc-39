// Напишіть функцію, яка приймає 2 аргумента типу string
// та повертає їх разом через -
// mergStr("str1", "str2") => str1-str2
function mergStr(str1, str2) {
  const result = str1.split(" ").concat(str2.split(" "));
  //   const strings = `${str1}-${str2}`;
  return result.join("-");
}

console.log(mergStr("test1", "test2"));
