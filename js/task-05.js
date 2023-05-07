const input = document.querySelector("#name-input");
const inputSpan = document.querySelector('#name-output');

function onInputAction(event) {
    const valueInput = event.currentTarget.value;

    if (valueInput.length === 0) {
        return inputSpan.textContent = "Anonymous";
    } inputSpan.textContent = valueInput;
};

input.addEventListener('input', onInputAction);

// Метод addEventListener()
// Додає слухача події на елемент.

// element.addEventListener(event, handler, options);

// event - ім'я події, рядок, наприклад "click".
// handler - колбек-функція, яка буде викликана під час настання події.
// options - необов'язковий об'єкт параметрів з розширеними налаштуваннями.

// const button = document.querySelector(".my-button");
// button.addEventListener("click", () => {
//   console.log("Button was clicked");
// });

// Для колбека можна (і бажано) використовувати окрему функцію і передавати на неї посилання. Іменована функція підвищує читабельність коду.

// const button = document.querySelector(".my-button");
// const handleClick = () => {
//   console.log("Button was clicked");
// };
// button.addEventListener("click", handleClick);