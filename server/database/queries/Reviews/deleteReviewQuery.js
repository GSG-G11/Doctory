const Pool = require('../../config/connection');

const deleteReviewQuery = (id) => {
    return Pool.query({
        text:'DELETE FROM reviews where id = $1',
        values: [id],
    });
};


module.exports = deleteReviewQuery