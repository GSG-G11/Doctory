const signin = require('./signin');
const signup = require('./signup');
const AllDoctors = require('./doctors/doctor');
const DoctorInfo = require('./doctors/doctorInfo');

module.exports = {
  signup,
  signin,
  DoctorInfo,
  AllDoctors,
};
