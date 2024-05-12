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
// напиши код який із массиву arr видаляє елемент foo.
// розвертає цей массив
// і повертає рядок js is the best
// вхідний массив не має змінюватись (мутується)
// const arr = ["best", "the", "foo", "is", "js"];

// function delateElement (array, elem) {
//     const copia = [...array];
//     const index = copia.indexOf(elem);
//     if (index !== -1) {
//         copia.splice(index, 1);
//     }

//     copia.reverse();
//     return copia.join(` `);
// }

// console.log(delateElement (arr, "ww"));

// =============================================/28.04.2024====================================================
// =============================================Task-5====================================================
//**
// // *? Напишіть функцію, яка приймає массив об'єктів і повертає новий массив
// // *? Зробіть знижку 20 % на всі фрукти у масиві
// // *? Надайте ід для кожного продукту
// // */
// const fruits = [
//   { name: "apple", price: 200 },
//   { name: "orange", price: 300 },
//   { name: "grapes", price: 750 },
// ];

// function updateFruits(arr) {
//   const fruitsWithDiscout = [];
//   const discout = 0.8;
//   let id = 1;

//   for (const fruit of arr) {
//     let netObj = { ...fruit, price: fruit.price * discout, id };

//     console.log(netObj);
//     fruitsWithDiscout.push(netObj);
//     id += 1;
//   }

//   return fruitsWithDiscout;
// }
// console.log(updateFruits(fruits));
// console.log(fruits);

// =============================================/28.04.2024====================================================
/*Напишіть функцію checkBrackets(str) яка приймає рядок VS коду (someFn)
  і перевіряє правильність закриття дужок () {} []
  Якщо рядок містить коректний код функція повертає true.
  В іншому випадку повертає false
*/
// const someFn = `function foo() {
//   const arr = [1, 2, 3];
//   console.log(arr);
// }`;

// function checkBrackets(str) {

// }

// checkBrackets(someFn);
// =============================================/12.05.2024====================================================
///**

// *? Напишіть функцію, яка приймає массив об'єктів і повертає новий массив

// *? Зробіть знижку 20 % на всі фрукти у масиві

// *? Надайте ід для кожного продукту

// */

// const fruits = [
//   { name: "apple", price: 200 },
//   { name: "orange", price: 300 },
//   { name: "grapes", price: 750 },
// ];

// function updateFruits(arr) {
//   const fruitsWithDiscout = [];
//   const discout = 0.8;
//   let id = 1;

//   for (const fruit of arr) {
//     let netObj = { ...fruit, price: fruit.price * discout, id };

//     console.log(netObj);
//     fruitsWithDiscout.push(netObj);
//     id += 1;
//   }

//   return fruitsWithDiscout;
// }
// console.log(updateFruits(fruits));
// console.log(fruits);

// =============================================/28.04.2024====================================================
/*Напишіть функцію checkBrackets(str) яка приймає рядок JS коду (someFn)
  і перевіряє правильність закриття дужок () {} []
  Якщо рядок містить коректний код функція повертає true.
  В іншому випадку повертає false
*/
// function checkBrackets(str) {
//   const elements = str.split("");
//   // console.log(elements);
//   let elems = [];
//   for (const element of elements) {
//     if (
//       element === "(" ||
//       element === ")" ||
//       element === "{" ||
//       element === "}" ||
//       element === "[" ||
//       element === "]"
//     ) {
//       elems.push(element);
//     }
//   }
//   // console.log(elems);
//   if (elems.length % 2 !== 0) {
//     return `false`;
//   }
//   if (
//     elems.indexOf("(") > elems.indexOf(")") &&
//     elems.indexOf("{") > elems.indexOf("}") &&
//     elems.indexOf("[") > elems.indexOf("]")
//   ) {
//     return `false`;
//   }
//   for (const elem of elems) {
//     if (elem === "(") {
//       const elem1 = [...elems.join("").slice(elems.indexOf("("))];
//       // console.log(elem1);
//       let brackets = [];
//       for (const opt of elem1) {
//         if (opt !== ")") {
//           brackets.push(opt);
//         } else if (opt === ")") {
//           brackets.push(opt);
//           break;
//         }
//       }
//       if (brackets.length % 2 !== 0) {
//         return `false`;
//       }
//     } else if (elem === "{") {
//       const elem2 = [...elems.join("").slice(elems.indexOf("{"))];
//       // console.log(elem2);
//       let brackets = [];
//       for (const opt of elem2) {
//         if (opt !== "}") {
//           brackets.push(opt);
//         } else if (opt === "}") {
//           brackets.push(opt);
//           break;
//         }
//       }
//       if (brackets.length % 2 !== 0) {
//         return `false`;
//       }
//     } else if (elem === "[") {
//       const elem3 = [...elems.join("").slice(elems.indexOf("["))];
//       // console.log(elem3);
//       let brackets = [];
//       for (const opt of elem3) {
//         if (opt !== "]") {
//           brackets.push(opt);
//         } else if (opt === "]") {
//           brackets.push(opt);
//           break;
//         }
//       }
//       if (brackets.length % 2 !== 0) {
//         return `false`;
//       }
//       return `true`;
//     }
//   }
// }
// const someFn = `function foo() {
//   const arr = [1, 2, 3];
//   console.log(arr);
// }`;

// console.log(checkBrackets(someFn));
// ==================================================================================================================
// function checkBrackets(str) {
//   const stack = [];
//   const obj = {
//     "(": ")",
//     "{": "}",
//     "[": "]",
//   };
//   for (let i = 0; i < str.length; i++) {
//     const bracket = str[i];
//     if (bracket === "(" || bracket === "{" || bracket === "[") {
//       stack.push(bracket);
//     }
//     if (bracket === "}" || bracket === ")" || bracket === "]") {
//       const lastEl = stack.pop();
//       if (bracket !== obj[lastEl]) {
//         return false;
//       }
//     }
//   }
//   if (stack.length) return false;
//   return true;
// }
// ===========================================================================================

// const fruits = [

//   { name: "apple", price: 200 },

//   { name: "orange", price: 300 },

//   { name: "grapes", price: 750 },

// ];

// function updateFruits(arr) {
//   return arr.map((el, index) => ({

//     ...el,
//     price: el.price * 0.8,
//     id:index +1}))

// }
// console.log(updateFruits(fruits));
// ======================================================================================
/**
 *? З об'єкту concerts потрібно отримати масив
 *? в якому будуть лише імена міст.
 *? З масиву потрібно прибрати міста, в яких концерт уже пройшов і
 *? відсортувати їх у хронологічному порядку.
 *? Результат вивести у консоль.
 *? Очікуваний результат ["Одеса", "Умань", "Харків"]
 */
// const concerts = {
//   Київ: new Date("2020-04-01"),
//   Умань: new Date("2025-07-02"),
//   Вінниця: new Date("2020-04-21"),
//   Одеса: new Date("2025-03-15"),
//   Хмельницький: new Date("2020-04-18"),
//   Харків: new Date("2025-07-10"),
// };

// const city = Object.keys(concerts)
//   .filter((el) => concerts[el] > new Date())
//   .toSorted((a, b) => concerts[a] - concerts[b]);
// console.log(city);
// =============================================================================
/**
 *? Поверніть об'єкт, в якому вказано кількість тегів.
 *? Очікуваний результат {js: 3, nodejs: 3, html: 2, css: 2, react: 2}
 */
const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const tags = tweets.flatMap((el) => el.tags);
const newObject = tags.reduce((acc, el) => {
  console.log(`ітерація: ${acc}`);
  return { ...acc, [el]: acc[el] ? acc[el] + 1 : 1 };
}, {});
console.log(`Що отримали: ${newObject}`);
