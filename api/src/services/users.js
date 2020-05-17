const userRepository = require('../repositories/users');
const ConflictError = require('../classes/errors/ConflictError');
const NotFoundError = require('../classes/errors/NotFoundError');
const roleService = require('./roles');
const profileRepository = require('../repositories/profiles');
const favoritesRepository = require('../repositories/favorites');
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

    async addUserRole(id, value) {
        const user = await this.getUser(id);

        if(!user) {
            throw new NotFoundError('User not found');
        }

        const role = await roleService.getRoleByValue(value);

        if(!role) {
            throw new NotFoundError(`Role ${role} not found`);
        }

        await user.addRole(role, {
            through: {userId: user.id, roleId: role.id}
        });
    }

    async addUser(value) {
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

        const role = await roleService.getRoleByValue(process.env.USER_AUTHOR);
        
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
        const favorite = {
            userId: userId,
            favoriteId: favoriteId.favoriteId
        };
        
        const fav = await favoritesRepository.addFavorite(favorite);

        return fav;
    }
}

module.exports = new UsersService();