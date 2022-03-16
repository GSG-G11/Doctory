const Pool = require('../../config/connection');

const getReviewQuery = (id) => Pool.query({
  text: `select r.content, p.name, p.id
  from reviews as r
  join patients as p on p.id = r.patient_id
  where r.doctor_id = $1;`,
  values: [id],
});

module.exports = getReviewQuery;
