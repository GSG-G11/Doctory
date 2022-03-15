const hashPassword = require('./hashPassword');
const comparePasswords = require('./comparePassword');
const sendTokens = require('./jwtSign');
const verifyToken = require('./jwtVerify');

module.exports = {
  hashPassword,
  comparePasswords,
  sendTokens,
  verifyToken,
};
