/* eslint-disable no-undef */
const url = window.location.href.split('/')[4];
getFetch(`/doctors/${url}/reviews`, reviewsHandel);
getFetch('/cookie', checkCookie);

const addReviewBtn = document.querySelector('.add-review');
addReviewBtn.addEventListener('click', async () => {
  const { value: text } = await Swal.fire({
    input: 'textarea',
    inputLabel: 'Type Your Review',
    inputPlaceholder: 'Type your Review here...',
    inputAttributes: {
      'aria-label': 'Type your Review here',
    },
    showCancelButton: true,
  });

  if (text) {
    const cookiehandel = (dataObj) => {
      console.log(dataObj,"jj");
      const data = {
        content: text,
        patientId: dataObj.id,
      };
      postFetch(`/doctors/${url}/reviews`, data , console.log);
      getFetch(`/doctors/${url}/reviews`, reviewsHandel);
      Swal.fire('Your Review was added Succssfully!');
    };
    getFetch('/cookie', cookiehandel);
  }
});
