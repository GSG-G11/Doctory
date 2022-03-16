const router = require('express').Router();
const { signup, login, signupPage, loginPage, getDecoded, logout } = require('../controllers/index');

router.get('/signup', signupPage);
router.get('/login', loginPage);
router.post('/signup', signup);
router.post('/login', login);
router.get('/logout' , logout)
router.get('/cookie' , getDecoded)

module.exports = router;
