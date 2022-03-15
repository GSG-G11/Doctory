const signin = require('./signin');
const signup = require('./signup');
const allDoctors = require('./doctors/doctor');
const doctorInfo = require('./doctors/doctorInfo');
const addReview = require('./reviews/addreview');
const allreviews = require('./reviews/reviews');

module.exports = {
  signup,
  signin,
  doctorInfo,
  allDoctors,
  allreviews,
  addReview
};
