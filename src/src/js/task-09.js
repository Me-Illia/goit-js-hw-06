const butEl = document.querySelector(".change-color");
const colorEl = document.querySelector(".color");
const bodyEl = document.querySelector("body")

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

butEl.addEventListener('click', event => {
  event = getRandomHexColor();
  bodyEl.style.backgroundColor = event;
  colorEl.textContent = event;

});
