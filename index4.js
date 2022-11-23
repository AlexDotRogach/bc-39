// Створити функцію конструктор робітника
// Створити метод у об'єкта
// який буде рахувати заробітну плату (salary * workDay)
// Та перебрати масив і викликати цей метод для кожного елемента

const employees = [
  {
    name: "Alex",
    salary: 500,
    workDay: 5,
  },
  {
    name: "Dima",
    salary: 200,
    workDay: 3,
  },
  {
    name: "Vasya",
    salary: 600,
    workDay: 21,
  },
  {
    name: "Sergei",
    salary: 400,
    workDay: 23,
  },
];

function Employee({ name, salary, workDay }, sumSalary) {
  this.name = name;
  this.salary = salary;
  this.workDay = workDay;
  this.sumSalary = sumSalary;
}

function calcSalary() {
  return this.salary * this.workDay;
}

const allEmployees = employees.map(
  (employee) => new Employee(employee, calcSalary)
);

console.log(allEmployees);

const allSalary = allEmployees.reduce((acum, employee) => {
  acum += employee.sumSalary();

  return acum;
}, 0);

console.log(allSalary);
