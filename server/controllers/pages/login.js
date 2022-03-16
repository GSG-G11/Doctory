const { join } = require('path');

const loginPage = (req, res) => {
  res.status(200).sendFile(join(__dirname, '..', '..', '..', 'public', 'html', 'login.html'));
};

module.exports = loginPage;
