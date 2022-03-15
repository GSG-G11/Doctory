const getReviewQuery = require('../../database/queries/Reviews/getReviewsQuery')

const viewAllReview = (req, res) => {
    getReviewQuery(req.params.id)
    .then((data) => res.status(200).json(data.rows))
    .catch((error) => res.status(500).json({ message: error }));
};

module.exports = viewAllReview;