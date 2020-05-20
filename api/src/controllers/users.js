const httpStatus = require('http-status-codes');
require('dotenv').config();

const resMessage = require('../helpers/resMessage');
const userService = require('../services/users');
const roleService = require('../services/roles');
const NotFoundError = require('../classes/errors/NotFoundError');


class UserController {
    async addUser(req, res, next) {
        const user = req.body;

        await userService.addUser(user, process.env.ROLE_AUTHOR);

        res
            .status(httpStatus.CREATED)
            .json(resMessage.OK(httpStatus.CREATED, 'User created'));
    }

    async getProfileByUserId(req, res, next) {
        const id = req.params.id;

        const profile = await userService.getProfileByUserId(id);

        res
            .status(httpStatus.OK)
            .json(resMessage.OK(httpStatus.OK, 'Get profile', profile));
            
    }

    async getMyProfile(req, res, next) {
        const id = req.user.id;

        const profile = await userService.getProfileByUserId(id);

        res
            .status(httpStatus.OK)
            .json(resMessage.OK(httpStatus.OK, 'Get profile', profile)); 
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

    async addPoem(req, res, next) {
        const poem = {
            userId: req.user.id,
            tittle: req.body.tittle,
            content: req.body.content,
            pubDate: req.body.pubDate
        };

        await userService.addPoem(poem);

        res
            .status(httpStatus.CREATED)
            .json(resMessage.OK(httpStatus.CREATED, 'Poem created')); 
    }

    async getMyPoems(req, res, next) {
        const userId = req.user.id;

        const poems = await userService.getMyPoems(userId);

        if(!poems || !poems.length) {
            next(new NotFoundError('Empty result body'));
            return;
        }

        res
            .status(httpStatus.OK)
            .json(resMessage.OK(httpStatus.OK, 'Get poems', poems));
    }

    async getMyPoemById(req, res, next) {
        const userId = req.user.id;

        const id = req.params.id;

        const poem = await userService.getMyPoemsById(userId, id)

        res
            .status(httpStatus.OK)
            .json(resMessage.OK(httpStatus.OK, 'Get poem', poem)); 
    }

    async getPoemByUserId(req, res, next) {
        const userId = req.params.id;

        const poems = await userService.getMyPoems(userId);

        if(!poems || !poems.length) {
            next(new NotFoundError('Empty result body'));
            return;
        }

        res
            .status(httpStatus.OK)
            .json(resMessage.OK(httpStatus.OK, 'Get poems', poems));        
    }

    async deletePoem(req, res, next) {
        const userId = req.user.id;

        const poemId = req.params.id;

        await userService.deletePoem(poemId, userId);

        res
            .status(httpStatus.OK)
            .json(resMessage.OK(httpStatus.OK, 'Poem delete'));  
    }

    async updatePoem(req, res, next){
        const userId = req.user.id;
        const poemId = req.params.id;
        const newPoemData = req.body;

        await userService.updatePoem(poemId, newPoemData, userId);

        res
            .status(httpStatus.OK)
            .json(resMessage.OK(httpStatus.OK, 'Poem update'));
    }

    async getRole(req, res, next) {
        const roles = await roleService.getAllRoles();

        res
            .status(httpStatus.OK)
            .json(resMessage.OK(httpStatus.OK, 'Get roles', roles));
    }

    async getRoleById(req, res, next) {
        const roleId = req.params.id;

        const role = await roleService.getRole(roleId);

        if(!role) {
            next(new NotFoundError('Empty result body'));
            return;
        }

        res
            .status(httpStatus.OK)
            .json(resMessage.OK(httpStatus.OK, 'Get role', role));
    }
}

module.exports = new UserController();