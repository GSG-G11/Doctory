const addReviewQuery = require('../../database/queries/Reviews/AddReviewQuery');

const addReview = (req , res) => {
    const {content, doctorId, patientId} = req.body
    addReviewQuery(content, doctorId, patientId)
    .then(() => res.json({
        massage: 'review added'
    }))
    .catch((err) => res.status(500).json({ massage: err}))
}
module.exports = addReview