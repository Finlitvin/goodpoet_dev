const httpStatus = require('http-status-codes');
const resMessage = require('../helpers/resMessage');
const userService = require('../services/users');

class UserController {
    async addUser(req, res, next) {
        const user = req.body;

        await userService.addUser(user);

        res.status(httpStatus.CREATED).json(resMessage.OK(httpStatus.CREATED, 'User created'));
    }

    async getProfileByUserId(req, res, next) {
        const id = req.params.id;

        const profiles = await userService.getProfileByUserId(id);

        res
            .status(httpStatus.OK)
            .json(resMessage.OK(httpStatus.OK, 'Get profile', profiles));
            
    }

    async getMyProfile(req, res, next) {
        const id = req.user.id;

        const profiles = await userService.getProfileByUserId(id);

        res
            .status(httpStatus.OK)
            .json(resMessage.OK(httpStatus.OK, 'Get profile', profiles)); 
    }

    async getAllFavorites(req, res, next) {
        const id = req.user.id;

        const favorites = await userService.getAllFavorites(id);

        res
        .status(httpStatus.OK)
        .json(resMessage.OK(httpStatus.OK, 'Get all favorites', favorites));
    }

    async addFavorite(req, res, next) {
        const userId = req.user.id;
        const favoriteId = req.body;
        
        await userService.addFavorites(userId, favoriteId);

        res
            .status(httpStatus.CREATED)
            .json(resMessage.OK(httpStatus.CREATED, 'Favorite add'));
    }
}

module.exports = new UserController();