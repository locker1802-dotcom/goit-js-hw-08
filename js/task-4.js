
const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget); // объект с данными формы
  const email = formData.get('email').trim();
  const password = formData.get('password').trim();

  if (!email || !password) {
    alert('All form fields must be filled in');
  return;  // выйти из функции, дальше не выполнять
    }
    const data = {
    email,
    password,
    };
    console.log(data);
    form.reset();
});