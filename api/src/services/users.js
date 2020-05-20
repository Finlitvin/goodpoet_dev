const userRepository = require('../repositories/users');
const ConflictError = require('../classes/errors/ConflictError');
const NotFoundError = require('../classes/errors/NotFoundError');
const roleService = require('./roles');
const profileRepository = require('../repositories/profiles');
const favoritesRepository = require('../repositories/favorites');
const poemRepository = require('../repositories/poems');
require('dotenv').config();

class UsersService {
    getUser(id) {
        return userRepository.getUser(id);
    }

    getUserByEmail(value) {
        return userRepository.getUserByEmail(value);
    }

    getAllUsers() {
        return userRepository.getAllUsers();
    }

    async addUser(value, valueRole) {
        const isUserExist = !!(await userRepository.getUserByEmail(value.email));

        if(isUserExist) {
            throw new ConflictError('Email already exist');
        }

        const userValue = {
            email: value.email,
            password: value.password
        };

        const user = await userRepository.addUser(userValue);
        
        const profile = {
            userId: user.id,
            firstName: value.firstName,
            lastName: value.lastName,
        };

        await profileRepository.addProfile(profile);

        const role = await roleService.getRoleByValue(valueRole);

        if(!role) {
            throw new NotFoundError(`Role ${role} not found`);
        }
        
        await user.addRole(role, {
            through: {userId: user.dataValues.id, roleId: role.id}
        });

        return user;
    }

    async getProfileByUserId(id){
        const user = await this.getUser(id);

        if(!user) {
            throw new NotFoundError(`User with ${id} not found`); 
        }

        const profiles = await profileRepository.getProfileByUserId(id);

        if(!profiles){
            throw new NotFoundError('Profile not found');
        }

        return profiles;
    }

    async getAllFavorites(userId) {
       const favorites = await favoritesRepository.getAllFavorites(userId);

       if(!favorites) {
            throw new NotFoundError('All Favorites err');
       }

       return favorites;

    }

    async addFavorites(userId, favoriteId) {
        if(userId == favoriteId.favoriteId) {
            throw new ConflictError('Some problem');
        }

        const favoriteObj = await favoritesRepository.getFavorite(userId, favoriteId.favoriteId);

        if(favoriteObj.length){
            throw new ConflictError('this favorite was added');
        }

        const favoriteValue = {
            userId: userId,
            favoriteId: favoriteId.favoriteId
        };

        const favorite = await favoritesRepository.addFavorite(favoriteValue);

        return favorite;
    }

    async deleteFavorite(favoriteId, userId) {
        const isFav = await favoritesRepository.getFavorite(userId, favoriteId);

        if(!isFav.length){
            throw new ConflictError('this favorite was deleted');
        }

        const favor = await favoritesRepository.deleteFavorite(favoriteId, userId);
        return favor;
    }

    async addPoem(poem) {
        const poems = await poemRepository.addPoem(poem);
        return poems;
    }

    getMyPoems(userId){
        return poemRepository.getPoemByUserId(userId);
    }

    async getMyPoemsById(userId, id){
        const poem = await poemRepository.getPoem(id);

        if(!poem){
            throw new NotFoundError('sorry');
        }

        if(poem.userId != userId){
            throw new NotFoundError('sorry');
        }

        return poem;
    }

    async deletePoem(poemId, userId){
        const poem = await poemRepository.getPoem(poemId);

        if(!poem) {
            throw new NotFoundError('sorry del');
        }

        if(userId != poem.userId){
            throw new NotFoundError('sorry');
        }

        return await poemRepository.deletePoem(poemId);
    }

    async updatePoem(poemId, newPoemData, userId){
        const poem = await poemRepository.getPoem(poemId);

        if(!poem) {
            throw new NotFoundError('sorry');
        }

        if(userId != poem.userId){
            throw new NotFoundError('sorry');
        }

        return await poemRepository.updatePoem(poemId, newPoemData);
    }
}

module.exports = new UsersService();