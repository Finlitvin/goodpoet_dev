const reviewModel = require('../models/reviews');

class ReviewsRepository {
    getReview(id) {
        return reviewModel.findOne({ where: { id: id } });
    }

    getAllReviews(poemId) {
        return reviewModel.findAll({ where: { poemId: poemId } });
    }

    addReview(review) {
        return reviewModel.create(review);
    }

    deleteReview(id) {
        return reviewModel.destroy({ where: { id: id } });
    }
}

module.exports = new ReviewsRepository();