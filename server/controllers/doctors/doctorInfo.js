const { getDoctorInfoQuery } = require('../../database/queries/doctors/getDoctorInfoQuery');

const doctorInfo = (req, res) => {
  getDoctorInfoQuery(req.params.id)
    .then((data) => res.json(data.rows[0]))
    .catch((error) => res.status(500).json({ message: error }));
};

module.exports = doctorInfo;
