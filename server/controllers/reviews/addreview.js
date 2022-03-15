const { addReviewQuery } = require('../../database/queries/index');

const addReview = (req, res) => {
    const { content, patientId } = req.body;
    addReviewQuery(content, req.params.id, patientId)
    .then(() => res.json({ massage: 'review added' }))
    .catch((err) => res.status(500).json({ massage: err }));
};

module.exports = addReview;
