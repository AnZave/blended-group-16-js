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

//  *? При завантаженні сторінки користувачеві пропонується
//  *? в prompt ввести число. Введення додається до значення
//  *? змінної total.
//  *? Операція введення числа триває до того часу,
//  *? поки користувач не натисне кнопку Cancel у prompt.
//  *? Після того як користувач припинив введення, натиснувши на
//  *? кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."

//  *! Робити перевірку, що користувач ввів саме число,
//  *! а не довільний набір символів не потрібно.
//  */
// let number = prompt("Enter number");
// let total = 0;
// while (number !== null) {
//   console.log(number);
//   total += Number(number);
//   number = prompt("Enter number");
//   }
// alert (`Загальна сума введених чисел дорівнює ${total}.`)

// =============================================28.04.2024====================================================
// =============================================Task-1====================================================

//  *? Напиши скрипт для об'єкта user,
//  *? послідовно:
//  *? 1 додати поле mood зі значенням 'happy'
//  *? 2 замінить hobby на 'skydiving'
//  *? 3 замінить значення premium на false
//  *? 4 виводить вміст об'єкта users у форматі
//  *? ключ: значення використовуючи Object.keys() і for...of

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tennis",
//   premium: true,
// };
// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;
// for (const key of Object.keys(user)) {
//   console.log(`${key}:${user[key]}`);
// }

// =============================================Task-2====================================================
//  Напишіть функцію, яка приймає об'єкт і рахує загальну суму зарплат працівників. */
// const someObj = {
//   worker1: 360,
//   worker2: 750,
//   worker3: 240,
// };

// function calcSalaryWorker(obj) {
//   const values = Object.values(obj);
//   let i = 0;
//   for (const value of values) {
//     i += value;
//   }
//   return i;
// }
// console.log(calcSalaryWorker(someObj));

// =============================================Task-3====================================================

//  *? Напишіть ф-цію calcTotalPrice(someStones, stoneName),

//  *? яка приймає масив об'єктів та

//  *? рядок під назвою каменю.

//  *? Функція рахує та повертає загальну вартість каменів

//  *? з таким ім'ям, ціною та кількістю з об'єкта

//  const stones = [

//     { name: "Изумруд", price: 1300, quantity: 4 },

//     { name: "Бриллиант", price: 2700, quantity: 6 },

//     { name: "Сапфир", price: 400, quantity: 7 },

//     { name: "Щебень", price: 150, quantity: 100 },

//   ];
//   function calcTotalPrice(someStones, stoneName) {
//     for (const i of someStones) {
//         if (i.name === stoneName) {
//            return i.price * i.quantity
//         }
//     }
//     return "Не знайдено"
//   }

// console.log(calcTotalPrice(stones, "Сапфирио"));
// =============================================Task-4====================================================

// =============================================/28.04.2024====================================================
