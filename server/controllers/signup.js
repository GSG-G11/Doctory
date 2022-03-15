const signupValidate = require('../validation/signupValidate');
const hashPassword = require('../utils/hashPassword');
const addUserQuery = require('../database/queries/signupQuery');
const checkUserQuery = require('../database/queries/checkUserQuery');
const sendTokens = require('../utils/jwtSign');

const signup = (req, res) => {
  const { name, email, password } = req.body;
  signupValidate(req.body).then(() => {
    hashPassword(password).then((hashedPassword) => {
      checkUserQuery(email).then((result) => {
        if (!result.rows[0]) {
          addUserQuery(name, email, hashedPassword).then(() => {
            sendTokens(res, email, '/home');
          }).catch((err) => {
            res.json({ message: err });
          });
        } else res.json({ message: 'email is existed' });
      }).catch((err) => res.json({ message: err }));
    }).catch((err) => res.json({ message: err }));
  }).catch((err) => {
    const errorList = [];
    err.details.forEach((error) => {
      errorList.push(error.message);
    });
    res.json({ message: errorList });
  });
};

module.exports = signup;
