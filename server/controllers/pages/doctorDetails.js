const { join } = require('path');

const doctorDetailsPage = (req, res) => {
  res.status(200).sendFile(join(__dirname, '..', '..', '..', 'public', 'html', 'doctorDetails.html'));
};

module.exports = doctorDetailsPage;
