const burgerIcon = document.getElementById('burger-icon');
const loginForm = document.getElementById('trybewarts-login');

const houseSelect = document.getElementById('house');

const contentCheckboxes = document.getElementById('content-checkboxes');
const rateSelect = document.getElementById('rate');

const agreementCheckbox = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');

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

const setHouseOptions = () => {
  const houses = [
    { name: 'Gitnória', id: 'gitnoria-house' },
    { name: 'Reactpuff', id: 'reactpuff-house' },
    { name: 'Corvinode', id: 'corvinode-house' },
    { name: 'Pytherina', id: 'pytherina-house' },
  ];

  houses.forEach(({ name, id }) => {
    const option = document.createElement('option');
    option.innerText = name;
    option.value = name;
    option.id = id;

    houseSelect.appendChild(option);
  });
};

const setContentCheckboxes = () => {
  const values = ['HoFs', 'Jest', 'Promises', 'React', 'SQL', 'Python'];
  values.forEach((value) => {
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.value = value;
    input.className = 'mr-1';

    label.innerHTML = `${input.outerHTML}${value}`;
    contentCheckboxes.appendChild(label);
  });
};

const setRateOptions = () => {
  for (let i = 1; i <= 10; i += 1) {
    const option = document.createElement('option');
    option.innerText = i;
    option.value = i;

    rateSelect.appendChild(option);
  }
};

submitBtn.addEventListener('click', (e) => e.preventDefault());
agreementCheckbox.addEventListener('click', ({ target: { checked } }) => {
  submitBtn.disabled = !checked;
});

window.onload = () => {
  setHouseOptions();
  setContentCheckboxes();
  setRateOptions();
};
