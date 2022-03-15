const jwt = require('jsonwebtoken');
require('env2')('.env');

const verifyToken = (req, res, next) => {
  if (req.cookies.token) {
    jwt.verify(req.cookies.token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) res.status(401).send('Unauthorized');
      else next();
    });
  } else res.status(401).send('Unauthorized');
};

module.exports = verifyToken;
