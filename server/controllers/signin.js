const comparePasswords = require('../utils/comparePassword');
const signInValidate = require('../validation/signInValidate');
const checkUserQuery = require('../database/queries/checkUserQuery');
const sendTokens = require('../utils/jwtSign');

const signIn = (req, res) => {
  const { email, password } = req.body;
  signInValidate(req.body).then(() => {
    checkUserQuery(email).then((result) => {
      if (result.rows[0]) {
        comparePasswords(password, result.rows[0].password).then((value) => {
          if (value) sendTokens(res, result.rows[0].email, '/home');
          else res.json({ message: 'wrong password' });
        }).catch((err) => res.json({ message: err }));
      } else res.json({ message: 'email does not existed' });
    }).catch((err) => res.json({ message: err }));
  }).catch((err) => {
    const errorList = [];
    err.details.forEach((error) => {
      errorList.push(error.message);
    });
    res.json({ message: errorList });
  });
};

module.exports = signIn;
