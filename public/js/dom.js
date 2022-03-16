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
    clone.querySelector('.descreption').textContent = doctor.descreption;
    clone.querySelector('.department').textContent = doctor.department;
    clone.querySelector('.phone').textContent = doctor.phone;
    doctors.appendChild(clone);
  });
};
