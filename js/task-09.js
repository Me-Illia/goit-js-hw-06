function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function refreshBackgroundColor() {
  const color = getRandomHexColor();
  document.body.style.background = color; // стукаємось до стилю беку щоби він змінював колір за функцією рандому
  document.querySelector('.color').textContent = color; //стукаємось до спана щоби виводило інф.кольору
}

const button = document.querySelector('.change-color'); // отримуємо доступ до кнопки за класом
button.addEventListener('click', refreshBackgroundColor); // робимо слухача кнопки при кліку викоання функції "function refreshBackgroundColor()"