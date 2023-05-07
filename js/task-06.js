const inputEl = document.querySelector("#validation-input");

const dataLength = inputEl.dataset.length;

function onInputBlur(event) {
    if (event.target.value.length === Number(dataLength)) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    };
}
inputEl.addEventListener("blur", onInputBlur);

// десь підгорів 1-н пукан... але вийшло