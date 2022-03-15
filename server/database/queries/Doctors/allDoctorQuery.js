const Pool = require('../../config/connection');

const allDoctorQuery = () => Pool.query('select * from doctors;');

module.exports = allDoctorQuery;
