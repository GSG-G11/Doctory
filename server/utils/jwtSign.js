const jwt = require('jsonwebtoken');
require('env2')('.env');

const createAccessToken = (email) => jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '15m' });

const sendAccessToken = (res, token, destination) => {
  res.cookie('access', token, {
    httpOnly: true,
    expires: new Date(Date.now() + 15 * 60 * 1000),
    secure: process.env.NODE_ENV === 'production',
  }).redirect(destination);
};

const sendTokens = async (res, email, destination) => {
  const accessToken = await createAccessToken(email);
  sendAccessToken(res, accessToken, destination);
};

module.exports = sendTokens;
