const categoriesEl = document.querySelector('#categories'); // стукаємось до категорій елементів за ID

console.log('Number of categories:', categoriesEl.children.length); // отримавши доступ до "categoriesEl" ми маємо доступ до всіх елементів UL, тепер стукаємось до дітей UL і отримуємо "length"

const catItemEl = document.querySelectorAll('.item'); //стукаємось до лішок з класом  '.item' батька (тоб-то дитини батька... наче вірно зрозумів по дереву !можу помилятись! , але можу достукатись до "h2 and li")
console.log('catItemAll', catItemEl); // для перевірки куди доліз  і внизу приклад що видно по "innerHTML"  для 0-го індексу: >>

        // <h2>Animals</h2>

        // <ul>
        //   <li>Cat</li>
        //   <li>Hamster</li>
        //   <li>Horse</li>
        //   <li>Parrot</li>
        // </ul>
      




catItemEl.forEach(el => {
    const h2El = el.querySelector('h2'); // отримуємо h2
    const liEl = el.querySelectorAll('li');// отримуємо li
     // робимо перебір і виводимо інф.
    console.log(`Category: ${h2El.textContent}`);
    console.log(`Elements: ${liEl.length}`);
});