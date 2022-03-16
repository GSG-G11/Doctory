/* eslint-disable no-undef */
const signupFrom = document.querySelector('#signup-form');

const myInput = document.getElementById('password');
const message = document.getElementById('message');

myInput.onfocus = () => { message.style.display = 'flex'; };
myInput.onblur = () => { message.style.display = 'none'; };

myInput.onkeyup = () => {
  const letter = document.getElementById('letter');
  const capital = document.getElementById('capital');
  const number = document.getElementById('number');
  const length = document.getElementById('length');

  // Validate lowercase letters
  const lowerCaseLetters = /[a-z]/g;
  if (myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove('invalid');
    letter.classList.add('valid');
  } else {
    letter.classList.remove('valid');
    letter.classList.add('invalid');
  }

  // Validate capital letters
  const upperCaseLetters = /[A-Z]/g;
  if (myInput.value.match(upperCaseLetters)) {
    capital.classList.remove('invalid');
    capital.classList.add('valid');
  } else {
    capital.classList.remove('valid');
    capital.classList.add('invalid');
  }

  // Validate numbers
  const numbers = /[0-9]/g;
  if (myInput.value.match(numbers)) {
    number.classList.remove('invalid');
    number.classList.add('valid');
  } else {
    number.classList.remove('valid');
    number.classList.add('invalid');
  }

  // Validate length
  if (myInput.value.length >= 8) {
    length.classList.remove('invalid');
    length.classList.add('valid');
  } else {
    length.classList.remove('valid');
    length.classList.add('invalid');
  }
};

signupFrom.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = {
    name: signupFrom.name.value,
    email: signupFrom.email.value,
    password: signupFrom.password.value,
  };
  postFetch('/signup', data, ErrorHandler);
});
