const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('env2')('.env');

const verifyToken = (req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) res.status(401).send('Unauthorized');
      else next();
    });
  } else res.status(401).send('Unauthorized');
};

module.exports = verifyToken;
