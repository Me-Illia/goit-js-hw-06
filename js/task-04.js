let counterValue = 0; // ствоюємо змінну куди буде записуватись значення

const decrBtn = document.querySelector('button[data-action="decrement"]'); // звертаємось до кнопки зі значенням (допомагають квадратні дужки)
const incrBtn = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector("#value"); // де будемо змінювати значення

const decrBtnClick = () => {
    counterValue -= 1;
    counter.textContent = counterValue;
};

const incrBtnClick = () => {
  counterValue += 1;
  counter.textContent = counterValue;
};

decrBtn.addEventListener('click', decrBtnClick);
incrBtn.addEventListener('click', incrBtnClick);