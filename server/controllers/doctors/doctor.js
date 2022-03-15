const allDoctorQuery = require('../../database/queries/Doctors/allDoctorQuery')

const ViewAllDoctor = (req, res) => {
  allDoctorQuery()
    .then((data) => res.status(200).json(data.rows[0]))
    .catch((error) => res.status(500).json({ message: error }));
};

module.exports = ViewAllDoctor;
