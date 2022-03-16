/* eslint-disable no-undef */
window.addEventListener('load', () => {
  getFetch('/doctors', handleDoctors);
});

const addReviewBtn = document.querySelector('.add-review');
addReviewBtn.addEventListener('click', () => {
  const data = {
    content: 'feedback',
    patientId: 1,
  };
  postFetch('/doctors/1/reviews', data);
});
