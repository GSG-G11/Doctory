const { join } = require('path');

const homePage = (req, res) => {
  res.status(200).sendFile(join(__dirname, '..', '..', '..', 'public', 'index.html'));
};

module.exports = homePage;
