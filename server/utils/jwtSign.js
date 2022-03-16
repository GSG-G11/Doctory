const jwt = require('jsonwebtoken');
require('env2')('.env');

const createAccessToken = (user) => jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '15m' });

const sendAccessToken = (res, token, destination) => {
  res.cookie('access', token, {
    httpOnly: true,
    expires: new Date(Date.now() + 15 * 60 * 1000),
    secure: process.env.NODE_ENV === 'production',
  }).redirect(destination);
};

const sendTokens = async (res, user, destination) => {
  const accessToken = await createAccessToken(user);
  sendAccessToken(res, accessToken, destination);
};

module.exports = sendTokens;
