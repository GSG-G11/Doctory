const { deleteReviewQuery } = require('../../database/queries/index');

const deleteReview = (req, res) => {
    deleteReviewQuery(req.params.id)
    .then(() => res.json({ massage: 'review deleted' }))
    .catch((err) => res.status(500).json({ massage: err }));
};

module.exports = deleteReview;