/**
 *? Використовуючи функцію if...else,
 *? напишіть код, який запитуватиме:
 *? "Яка офіційна назва JavaScript?"
 *? Якщо користувач вводить "ECMAScript",
 *? то показати через alert: "Вірно!"
 *? інакше відобразити:"Не знаєте? ECMAScript!"
 */

function cheakAnswer(text) {
  if (text === "ECMAScript") {
    alert("Вірно!");
  } else {
    alert("Не знаєте? ECMAScript!");
  }
}
const answer = prompt("Яка офіційна назва JavaScript?");
cheakAnswer(answer);
