// Дописати функцію showAllFriends
// так, щоб вона виводила всіх друзів
// і викликати її у правильному контексті

const student = {
  name: "Student1",
  friends: ["Student2", "Student3", "Student4"],
};

function showFriends(...parametr) {
  console.log(parametr);
  console.log(...this.friends);
}

showFriends.apply(student, [1, 2, 3]);
