const router = require('express').Router();
const { allDoctors, doctorInfo } = require('../controllers/index');


router.get('/', allDoctors);
router.get('/:id', doctorInfo);

module.exports = router