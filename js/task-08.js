// const form = document.querySelector('.login-form');

// form.addEventListener('submit', event => {
//   event.preventDefault(); // додаємо щоби не перезавантажувалась сторінка при передачі запиту
//   const {
//     elements: { email, password },
//   } = event.currentTarget;
//     if (!email.value || !password.value) {
//       alert('You have to fill form');
//       return;
//   }
//   console.log(`{Login: ${email.value}, Password: ${password.value}}`);
//     // formLogin.reset(); // малось на увазі це зробити?
//   event.currentTarget.reset()
// });
const formLogin = document.querySelector('.login-form');

formLogin.addEventListener('submit', event => {
  event.preventDefault();
  const formData = {};  // ПРОПУСТИВ УМОВУ СТУКАТИСЬ ТАКИМ МЕТОДОМ — element
  for (const element of formLogin.elements) {
    if (element.name) {
      formData[element.name] = element.value;
    }
  }
  if (formData.email && formData.password) {
    console.log(formData);
    formLogin.reset();
  } else {
    alert('You have to fill form');
  }
});

// ПЕРЕПИСАВ ПО ІНШОМУ 