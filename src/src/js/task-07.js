const inputEl = document.querySelector('#font-size-control');

const spanEl = document.querySelector("#text");

inputEl.addEventListener('input', onRangeMove);

function onRangeMove(event) {
    spanEl.style.fontSize = event.target.value + "px";
}