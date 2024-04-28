/**
 *? Використовуючи функцію if...else,
 *? напишіть код, який запитуватиме:
 *? "Яка офіційна назва JavaScript?"
 *? Якщо користувач вводить "ECMAScript",
 *? то показати через alert: "Вірно!"
 *? інакше відобразити:"Не знаєте? ECMAScript!"
 */

// function cheakAnswer(text) {
//   if (text === "ECMAScript") {
//     alert("Вірно!");
//   } else {
//     alert("Не знаєте? ECMAScript!");
//   }
// }
// const answer = prompt("Яка офіційна назва JavaScript?");
// cheakAnswer(answer);

/**
Напишіть програму, яка отримає від користувача
 число (кількість хвилин) та виведе в консоль
 рядок у форматі годин та хвилин
 https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
 70 === 01:10
 */
// function calkTime(time) {
//   if (typeof time !== "number") {
//     return
//   }
//   const hours = Math.floor(time / 60).toString().padStart(2, 0);
//   const min = (time % 60).toString().padStart(2, 0);
//   return `${hours}:${min}`

// }

// const answer = +prompt("Number please");
// console.log(calkTime(answer));

//  *? Напишіть цикл, який виводить у консоль
//  *? всі непарні числа  від max до min  за спаданням
//  const max = 50;
//  const min = 23;
//  for(let i = max; i >= min; i--) {
//   if(i % 2 === 0) {
//    console.log(i);
//   }

//  }

/**
*? Напишіть код, який питає
*? логін за допомогою prompt та логує результат
*? у консоль браузера
    
*? Якщо відвідувач вводить "Admin",
*? то prompt запитує пароль.
*? Якщо нічого не ввели або натиснуто клавішу Esc
*? вивести рядок "Canceled"
*? В іншому випадку вивести рядок "Я вас не знаю"
    
*? Пароль перевірять так:
*? Якщо введено пароль "Password",
*? то вивести рядок "hello admin"
*? інакше виводить рядок "Невірний пароль!"
 */

// function autorization() {
//   const login = prompt("Enter login:");
//   if (login === "Admin") {
//     const password = prompt("Enter password:");
//     if (password === "Password") {
//       alert("hello admin");
//     } else {
//       alert("Wrong password!");
//     }
//   } else if (login === "" || login === null) {
//     // (!login) === (login === "" || login === null) -- false
//     alert("Canceled");
//   } else {
//     alert("I don't know!");
//   }
// }

// autorization();

/**
 *? При завантаженні сторінки користувачеві пропонується
 *? в prompt ввести число. Введення додається до значення
 *? змінної total.
 *? Операція введення числа триває до того часу,
 *? поки користувач не натисне кнопку Cancel у prompt.
 *? Після того як користувач припинив введення, натиснувши на
 *? кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
 
 *! Робити перевірку, що користувач ввів саме число,
 *! а не довільний набір символів не потрібно.
//  */
// let number = prompt("Enter number");
// let total = 0;
// while (number !== null) {
//   console.log(number);
//   total += Number(number);
//   number = prompt("Enter number");
//   }
// alert (`Загальна сума введених чисел дорівнює ${total}.`)
