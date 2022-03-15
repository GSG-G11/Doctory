const Pool = require('../../config/connection');

const allDoctorQuery = () => Pool.query({
  text: 'select password from doctors',
  values: [],
});

module.exports = allDoctorQuery;
