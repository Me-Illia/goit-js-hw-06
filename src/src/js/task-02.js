const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector("#ingredients"); // звертаємось до UL за ID 

const ingredientsArr = ingredients.map(el => { // звертаємось до масиву "ingredients" після чого мапаємо(.map) його і відбувається перебір елементів (el), тоб-то отримуємо доступ до всіх елементів масиву, після чого..... 
  const liEl = document.createElement('li');  // створюємо елементам "<li></li>"
  liEl.classList.add('item'); // створюємо(додаємо) клас (class="item") прилкад повний : <li class="item">Potatoes</li>
  liEl.textContent = el; //даємо значення текстового контенту "el" 

  return liEl; // повертаємо значення при виконанні об'єкта "liEl" в змінну "ingredientsArr"
  
});
ingredientsEl.append(...ingredientsArr); // для додавання безмежної кількості одночасно використовується ".append", в конспекті нічого не сказано за нього, але є інформація в відео "Репети в Модулі 6 - DOM та Події 1:28:38 (тайм код)" назва — Модуль 7. Занятие 13. Объектная модель документа (DOM)(14/09). 
// У нас є колекція, масив (const ingredients). Для того щоб його пеередати як колекціб незалежних аргументів, для цього використовуємо "три точки (...)  розгорнутий приклад : >>(...ingredientsArr)  "