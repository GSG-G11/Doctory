const addUserQuery = require('./users/signupQuery');
const loginUserQuery = require('./users/loginQuery');
const checkUserQuery = require('./users/checkUserQuery');
const allDoctorQuery = require('./doctors/allDoctorQuery');
const getDoctorInfoQuery = require('./doctors/getDoctorInfoQuery');
const addReviewQuery = require('./reviews/AddReviewQuery');
const getReviewQuery = require('./reviews/getReviewsQuery');

module.exports = {
  addUserQuery,
  loginUserQuery,
  checkUserQuery,
  allDoctorQuery,
  getDoctorInfoQuery,
  addReviewQuery,
  getReviewQuery,
};
