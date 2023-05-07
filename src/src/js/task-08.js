const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
    if (!email.value || !password.value) {
      alert('You have to fill form');
      return;
  }
  console.log(`{Login: ${email.value}, Password: ${password.value}}`);
    
  event.currentTarget.reset()
});