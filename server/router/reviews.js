const router = require('express').Router();
const { allreviews,addReview } = require('../controllers/index');


router.post('/', addReview);
router.get('/:id', allreviews);

module.exports = router