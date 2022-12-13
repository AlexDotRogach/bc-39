function checkFizzBuzz(number) {
  if (number % 5 === 0 && number % 3 === 0) {
    return 'fizz buzz';
  }

  if (number % 3 === 0) {
    return 'fizz';
  }
  if (number % 5 === 0) {
    return 'buzz';
  }

  return number;
}

export default checkFizzBuzz;
