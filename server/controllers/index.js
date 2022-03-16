const login = require('./users/login');
const signup = require('./users/signup');
const signupPage = require('./pages/signup');
const loginPage = require('./pages/login');
const homePage = require('./pages/home');
const allDoctors = require('./doctors/doctor');
const doctorInfo = require('./doctors/doctorInfo');
const addReview = require('./reviews/addReview');
const allReviews = require('./reviews/reviews');
const doctorDetailsPage = require('./pages/doctorDetails');
const logout = require('./users/logout');
const getDecoded = require('./users/getIdByCookie');

module.exports = {
  signup,
  login,
  signupPage,
  loginPage,
  homePage,
  doctorInfo,
  allDoctors,
  allReviews,
  addReview,
  doctorDetailsPage,
  getDecoded,
  logout
};
