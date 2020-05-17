const favoriteModel = require('../models/favorites');

class FavoritesRepository {
    getFavorite(id) {
        return favoriteModel.findByPk(id);
    }

    getAllFavorites(userId) {
        return favoriteModel.findAll({ where: {userId: userId} });
    }

    addFavorite(favorite) {
        return favoriteModel.create(favorite);
    }

    deleteFavorite(id) {
        return favoriteModel.destroy({ where: { id: id } });
    }
}

module.exports = new FavoritesRepository();