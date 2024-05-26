//TODO:==============================================
/*
Завдання 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
*/
const inputEl = document.querySelector("#alertInput");
const buttonEl = document.querySelector("#alertButton");

buttonEl.addEventListener("click", () => {
  console.log(inputEl.value);
});

//TODO:==============================================
/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/

const leftInputEl = document.querySelector("#leftSwapInput");
const rightInputEl = document.querySelector("#rightSwapInput");
const swapButtonEl = document.querySelector("#swapButton");
swapButtonEl.addEventListener("click", () => {
  const leftInputValue = leftInputEl.value;
  const rightInputValue = rightInputEl.value;
  leftInputEl.value = rightInputValue;
  rightInputEl.value = leftInputValue;
});

//TODO:==============================================
/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/
const passwordInputEl = document.querySelector("#passwordInput");
const passwordButtonEl = document.querySelector("#passwordButton");
passwordButtonEl.addEventListener("click", () => {
  if (passwordInputEl.type === "password") {
    passwordButtonEl.textContent = "Приховати";
    passwordInputEl.type = "text";
    return;
  }
  passwordInputEl.type = "password";
  passwordButtonEl.textContent = "Розкрити";
});

//TODO:==============================================
/*
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів,  "Збільшити" - більше на 10 пікселів.
*/

const decreaseEl = document.querySelector("#decrease");
const increaseEl = document.querySelector("#increase");
const boxEl = document.querySelector("#box");
decreaseEl.addEventListener("click", () => {
  const size = parseInt(getComputedStyle(boxEl).width);
  boxEl.style.width = size - 10 + "px";
  boxEl.style.height = size - 10 + "px";
});
increaseEl.addEventListener("click", () => {
  const size = parseInt(getComputedStyle(boxEl).width);
  boxEl.style.width = size + 10 + "px";
  boxEl.style.height = size + 10 + "px";
});

//TODO:==============================================
/*
Завдання 5
Додайте слухач кліку на window і визначте чи клікнув користувач у дів з id="place".
*/

//TODO:==============================================
/*
Завдання 6
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази
*/

//TODO:==============================================
/*
Завдання 7
При натисканні на коло він повинен слідувати за курсором.
При повторному натисканні він стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/
