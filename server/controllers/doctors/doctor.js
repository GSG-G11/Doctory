const allDoctorQuery = require('../../database/queries/index');

const ViewAllDoctor = (req, res) => {
  allDoctorQuery()
    .then((data) => res.status(200).json(data.rows))
    .catch((error) => res.status(500).json({ message: error }));
};

module.exports = ViewAllDoctor;
