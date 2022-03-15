const router = require('express').Router();
const { signup, signin, AllDoctors, DoctorInfo } = require('../controllers/index');

router.post('/signup', signup);
router.post('/signin', signin);

router.get('/home/doctors', AllDoctors);
router.get('/home/doctors/:id', DoctorInfo);

module.exports = router;
