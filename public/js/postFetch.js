/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const postFetch = (url, data) => {
  showLoading();
  fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }).then((result) => result.json()).then((json) => {
    hideLoading();
    console.log(json);
  }).catch();
};