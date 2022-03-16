/* eslint-disable no-undef */
const loginFrom = document.querySelector('#login-form');

loginFrom.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = {
    email: loginFrom.email.value,
    password: loginFrom.password.value,
  };
  postFetch('/login', data, ErrorHandler);
});
