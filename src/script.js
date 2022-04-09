const burgerIcon = document.getElementById('burger-icon');
const loginForm = document.getElementById('trybewarts-login');

const houseSelect = document.getElementById('house');

const contentCheckboxes = document.getElementById('content-checkboxes');
const rateSelect = document.getElementById('rate');

const agreementCheckbox = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');

const commentTextarea = document.getElementById('comment');
const counter = document.getElementById('counter');

const form = document.getElementById('form');

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
    input.className = 'mr-1 content-checkbox';

    label.innerHTML = `${input.outerHTML}${value}`;
    contentCheckboxes.lastElementChild.appendChild(label);
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

const clearForm = () => {
  while (form.children.length !== 0) form.removeChild(form.lastChild);
  form.classList.remove('items-center');
  form.classList.add('items-start');
};

const createOutput = (value) => {
  const p = document.createElement('p');
  p.innerText = value;

  form.appendChild(p);
};

// eslint-disable-next-line max-lines-per-function
const setFields = () => {
  const firstName = document.getElementById('input-name');
  const lastName = document.getElementById('input-lastname');

  const name = `Nome: ${firstName.value} ${lastName.value}`;
  const email = `Email: ${document.getElementById('input-email').value}`;
  const house = `Casa: ${houseSelect.value}`;
  let family = '';
  let subjects = [];
  const rate = `Avaliação: ${rateSelect.value}`;
  const notes = `Observações: ${commentTextarea.value}`;

  document.getElementsByName('family').forEach((el) => {
    if (el.checked) family = `Família: ${el.value}`;
  });
  document.querySelectorAll('.content-checkbox').forEach((el) => {
    if (el.checked) subjects.push(el.value);
  });
  subjects = `Matérias: ${subjects.join(', ')}`;

  clearForm();
  [name, email, house, family, subjects, rate, notes].forEach(createOutput);
};

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  setFields();
});
agreementCheckbox.addEventListener('click', ({ target: { checked } }) => {
  submitBtn.disabled = !checked;
});

commentTextarea.addEventListener('keyup', ({ target }) => {
  counter.innerText = 500 - target.value.length;
});

window.onload = () => {
  setHouseOptions();
  setContentCheckboxes();
  setRateOptions();
};
