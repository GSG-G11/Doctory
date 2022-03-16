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

const reviewsHandel = (data) =>{
  const reviewDiv = document.querySelector('#review');
  data.forEach((review) => {
    const patientName = document.createElement('p')
    patientName.textContent = review.name;

    const content = document.createElement('p')
    content.textContent = review.content;

    reviewDiv.appendChild(patientName);
    reviewDiv.appendChild(content);

  })
}

const ErrorHandler = (errorList) =>{
  const errorsListDiv = document.querySelector('#errorsList')
  console.log(errorList.message);

  if(Array.isArray(errorList.message)){
    console.log('234');
    errorList.message.forEach((error)=>{
      const p = document.createElement('p');
      p.textContent= error.message
      errorsListDiv.appendChild(p)
    })
    
  }else{
    const p = document.createElement('p');
    p.textContent= errorList.message
    errorsListDiv.appendChild(p)
  }

}
