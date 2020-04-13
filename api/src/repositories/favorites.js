const favoriteModel = require('../models/favorites');

class FavoritesRepository {
    getAllFavorites() {
        return favoriteModel.findAll();
    }

    addFavorite(favorite) {
        return favoriteModel.create(favorite);
    }

    deleteFavorite(id) {
        return favoriteModel.destroy({ where: { id: id } });
    }
}

module.exports = new FavoritesRepository();