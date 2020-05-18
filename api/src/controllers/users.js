const httpStatus = require('http-status-codes');
const resMessage = require('../helpers/resMessage');
const userService = require('../services/users');
const NotFoundError = require('../classes/errors/NotFoundError');

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

    async deleteFavorite(req, res, next) {
        const favoriteId = req.params.id;
        const userId = req.user.id;

        await userService.deleteFavorite(favoriteId, userId);

        res
            .status(httpStatus.OK)
            .json(resMessage.OK(httpStatus.OK, 'Favorite delete'));
    }

    async getUserById(req, res, next) {
        const id = req.params.id;

        const user = await userService.getUser(id);

        if(!user) {
            next(new NotFoundError(`User with id ${id} not found`));
            return;
        }

        res
            .status(httpStatus.OK)
            .json(resMessage.OK(httpStatus.OK, 'Get user', user));
    }

    async getAllUsers(req, res, next) {
        const users = await userService.getAllUsers();

        if(!users || !users.length) {
            next(new NotFoundError('Empty result body'));
            return;
        }

        res
            .status(httpStatus.OK)
            .json(resMessage.OK(httpStatus.OK, 'Get users', users));
    }
}

module.exports = new UserController();