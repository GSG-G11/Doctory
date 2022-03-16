const addUserQuery = require('./users/signupQuery');
const loginUserQuery = require('./users/loginQuery');
const checkUserQuery = require('./users/checkUserQuery');
const allDoctorQuery = require('./Doctors/allDoctorQuery');
const getDoctorInfoQuery = require('./Doctors/getDoctorInfoQuery');
const addReviewQuery = require('./Reviews/AddReviewQuery');
const getReviewQuery = require('./Reviews/getReviewsQuery');

module.exports = {
  addUserQuery,
  loginUserQuery,
  checkUserQuery,
  allDoctorQuery,
  getDoctorInfoQuery,
  addReviewQuery,
  getReviewQuery,
};
