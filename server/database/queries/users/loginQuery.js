const Pool = require('../../config/connection');

const signInUserQuery = (id) => Pool.query({
  text: 'select * from patients where id = $1',
  values: [id],
});

module.exports = signInUserQuery;
