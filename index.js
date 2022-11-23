// Реалізуйте клас Worker (Працівник), який матиме
// такі властивості:
// name (ім'я), surname (прізвище), rate (ставка за день роботи), days (кількість відпрацьованих днів).
// Також клас повинен мати метод getSalary(),
// який виводитиме зарплату працівника.
// Зарплата - це добуток (множення) ставки rate на
// кількість відпрацьованих днів days

// class Worker {
//   static salaryStatus = {
//     min: {
//       text: "minimal salary",
//       min: 0,
//       max: 999,
//     },
//     max: {
//       text: "maximal salary",
//       min: 1000,
//       max: 10000,
//     },
//   };

//   static getStatus(salary) {
//     const salaryObj = Worker.salaryStatus;

//     return salary > salaryObj.min.max ? salaryObj.max.text : salaryObj.min.text;
//   }

//   constructor({ name, surname, rate, days }) {
//     this.name = name;
//     this.surname = surname;
//     this.rate = rate;
//     this.days = days;
//     this.status = Worker.getStatus(this.getSalary());
//   }

//   getSalary() {
//     return this.rate * this.days;
//   }
// }

// const workers = [{ name: "Erick", surname: "Vasin", rate: 50, days: 21 }];

// const erick = new Worker(workers[0]);
// console.log(erick.getSalary());
// console.log(erick);

// Реалізуйте клас Validator, який перевірятиме рядки.
// Наприклад, у нього буде метод isEmail параметром приймає рядок
// і перевіряє, чи є він коректним емейлом чи ні. Якщо є – повертає true,
// якщо не є – то false. Крім того, клас буде мати такі
// методи: метод isDomain для перевірки домену

class Validator {
  static validate = {
    domen: ["com", "ua", "net"],
    mail: ["ukr", "gmail"],
  };

  constructor(str) {
    this.str = str;
    this.validate = this.isEmail();
  }

  isEmail() {
    // if (this.str.length <= 3) return false;

    // const mail = this.str.slice(
    //   this.str.indexOf("@") + 1,
    //   this.str.indexOf(".")
    // );

    // if (!Validator.validate.mail.includes(mail)) return false;

    // const domain = this.str.slice(this.str.indexOf(".") + 1);

    // if (!Validator.validate.domen.includes(domain)) return false;

    // return true;

    // v2
    const values = {
      mail: this.str.slice(this.str.indexOf("@") + 1, this.str.indexOf(".")),
      domain: this.str.slice(this.str.indexOf(".") + 1),
    };

    const validateValues = Validator.validate;

    const check =
      this.str.length > 3 &&
      validateValues.mail.includes(values.mail) &&
      validateValues.domen.includes(values.domain);

    if (check) return true;

    return false;
  }
}

const userEmail = new Validator("test@ukr.com");

console.log(userEmail.isEmail());

// test@gmail.com
// 1. length > 3;
// 2. AWTET@${}.${}

//   ("ukr", "gmail")
// ][("com", "ua", "net")];
