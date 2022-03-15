const Pool = require('../../config/connection');

const getDoctorQuery = (id) => Pool.query({
  text: 'select * from doctors where id = $1;',
  values: [id],
});

module.exports = getDoctorQuery;
