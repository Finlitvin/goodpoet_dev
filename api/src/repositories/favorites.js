const favoriteModel = require('../models/favorites');

class FavoritesRepository {
    getFavorite(userId, favoriteId) {
        return favoriteModel.findAll({
            where: {
                userId: userId,
                favoriteId: favoriteId
            }
        });
    }

    getAllFavorites(userId) {
        return favoriteModel.findAll({ where: {userId: userId} });
    }

    addFavorite(favorite) {
        return favoriteModel.create(favorite);
    }

    deleteFavorite(favoriteId, userId) {
        return favoriteModel.destroy({ 
            where: { 
                userId: userId,
                favoriteId: favoriteId 
            } 
        });
    }
}

module.exports = new FavoritesRepository();