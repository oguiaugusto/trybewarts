const burgerIcon = document.getElementById('burger-icon');
const loginForm = document.getElementById('trybewarts-login');

burgerIcon.addEventListener('click', () => {
  loginForm.classList.toggle('open');
});

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const children = e.target;
  children[0].value = '';
  children[1].value = '';

  children[0].disabled = true;
  children[1].disabled = true;
  children[2].disabled = true;

  loginForm.classList.toggle('open');
  alert('Olá, Tryber');
});
