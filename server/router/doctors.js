const router = require('express').Router();
const { allDoctors, doctorInfo, allReviews, addReview, doctorDetailsPage } = require('../controllers/index');
const { verifyToken } = require('../utils/index');

router.get('/', allDoctors);
router.get('/:id', doctorDetailsPage);
router.get('/:id/details', doctorInfo);
router.post('/:id/reviews', verifyToken, addReview);
router.get('/:id/reviews', allReviews);

module.exports = router;
