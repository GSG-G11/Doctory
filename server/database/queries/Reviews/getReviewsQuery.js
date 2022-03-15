const Pool = require('../../config/connection');

const getReviewQuery = () => Pool.query({
  text: `select *, p.name
  from reviews as r
  left join patients as p on p.id = r.patient_id;`,
  values: [],
});

module.exports = getReviewQuery;
