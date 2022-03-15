const router = require('express').Router();
const { allDoctors, doctorInfo, allReviews, addReview } = require('../controllers/index');
const { verifyToken } = require('../utils/index');

router.get('/', allDoctors);
router.get('/:id', doctorInfo);
router.post('/:id/reviews', verifyToken, addReview);
router.get('/:id/reviews', allReviews);

module.exports = router;
