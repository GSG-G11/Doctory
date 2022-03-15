const router = require('express').Router();
const { signup, signin, allDoctors, doctorInfo } = require('../controllers/index');

router.post('/signup', signup);
router.post('/signin', signin);


module.exports = router;
