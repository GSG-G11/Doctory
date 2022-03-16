/* eslint-disable no-undef */
window.addEventListener('load', () => {
  getFetch('/doctors', handleDoctors);
  getFetch('/cookie', checkCookie);
});
