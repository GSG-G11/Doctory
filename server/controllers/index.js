const login = require('./users/login');
const signup = require('./users/signup');
const allDoctors = require('./doctors/doctor');
const doctorInfo = require('./doctors/doctorInfo');
const addReview = require('./reviews/addReview');
const allReviews = require('./reviews/reviews');

module.exports = {
  signup,
  login,
  doctorInfo,
  allDoctors,
  allReviews,
  addReview,
};
