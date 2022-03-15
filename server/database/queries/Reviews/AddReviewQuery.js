const Pool = require('../../config/connection');

const addReviewQuery = (content, doctorId, patientId) => Pool.query({
  text: 'insert into reviews (content, doctor_id, patient_id) values ($1, $2, $3) returning *;',
  values: [content, doctorId, patientId],
});

module.exports = addReviewQuery;
