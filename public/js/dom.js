/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
const doctors = document.querySelector('.doctors');
const handleDoctors = (data) => {
  const tempDoctors = document.querySelector('#template');
  doctors.textContent = '';
  data.forEach((doctor) => {
    const clone = tempDoctors.content.cloneNode(true);
    clone.querySelector('.card').setAttribute('data-index', doctor.id);
    clone.querySelector('a').href = `/doctors/${doctor.id}`;
    clone.querySelector('.image').src = doctor.img_url;
    clone.querySelector('.name').textContent = doctor.name;
    clone.querySelector('.department').textContent = doctor.department;
    doctors.appendChild(clone);
  });
};

const reviewsHandel = (data) => {
  const reviewDiv = document.querySelector('#review');
  data.forEach((review) => {
    const patientName = document.createElement('p');
    patientName.textContent = review.name;

    const content = document.createElement('p');
    content.textContent = review.content;

    reviewDiv.appendChild(patientName);
    reviewDiv.appendChild(content);
  });
};

const ErrorHandler = (errorList) => {
  const errorsListDiv = document.querySelector('#errorsList');

  if (Array.isArray(errorList.message)) {
    errorList.message.forEach((error) => {
      const p = document.createElement('p');
      p.textContent = error.message;
      errorsListDiv.appendChild(p);
    });
  } else {
    const p = document.createElement('p');
    p.textContent = errorList.message;
    errorsListDiv.appendChild(p);
  }
};

const logoutBtn = document.querySelector('.logout');
const signupBtn = document.querySelector('.signup');
const loginBtn = document.querySelector('.login');
const addReview = document.querySelector('.add-review');
const showLogout = () => {
  logoutBtn.style.display = 'inline-block';
  signupBtn.style.display = 'none';
  loginBtn.style.display = 'none';
  if (window.location.href !== 'http://127.0.0.1:8000/') {
    addReview.style.display = 'inline-block';
  }
};
const hideLogout = () => {
  logoutBtn.style.display = 'none';
  signupBtn.style.display = 'inline-block';
  loginBtn.style.display = 'inline-block';
  if (window.location.href !== 'http://127.0.0.1:8000/') {
    addReview.style.display = 'none';
  }
};
const checkCookie = (data) => {
  if (data.message === 'Unauthorized') hideLogout();
  else showLogout();
};
