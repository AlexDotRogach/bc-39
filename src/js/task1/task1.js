import './task1.css';
// Вбудована функція setTimeout використовує колбек-функцію.
// Створіть альтернативу, яка використовує проміси.
// Функція delay(ms) повинна повертати проміс,
// який перейде в стан "виконаний" через ms мілісекунд,
// так щоб ми могли додати до нього .then:

// 2
// Зробити так, щоб promise повертал значеня у вигляді часу
// та вивести
// масив виконання всіх промісів

function delay(time) {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => resolve(time), time);
    } else {
      setTimeout(reject, time);
    }
  });
}

delay(1000)
  .then(() => {
    console.log('finish');
  })
  .catch(e => console.log(e, 'fail'))
  .finally(() => console.log('finish from finally'));

Promise.race([delay(5000), delay(2000), delay(3000)]).then(data => {
  console.log(data);
});
