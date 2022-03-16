const signupValidate = require('../../validation/signupValidate');
const { addUserQuery, checkUserQuery } = require('../../database/queries/index');
const { sendTokens, hashPassword } = require('../../utils/index');

const signup = (req, res) => {
  const { name, email, password } = req.body;
  signupValidate(req.body).then(() => {
    hashPassword(password).then((hashedPassword) => {
      checkUserQuery(email).then((result) => {
        if (!result.rows[0]) {
          addUserQuery(name, email, hashedPassword).then(() => {
            sendTokens(res, email, '/');
          }).catch((err) => {
            res.json({ message: err });
          });
        } else res.json({ email: 'This email has already registered' });
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
