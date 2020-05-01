const userRepository = require('../repositories/users');
const ConflictError = require('../classes/errors/ConflictError');
const NotFoundError = require('../classes/errors/NotFoundError');
const roleService = require('./roles');
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

        const user = await userRepository.addUser(value);

        const role = await roleService.getRoleByValue(process.env.USER_AUTHOR);
        
        if(!role) {
            throw new NotFoundError(`Role ${role} not found`);
        }

        await user.addRole(role, {
            through: {userId: user.dataValues.id, roleId: role.id}
        });

        return user;
    }
}

module.exports = new UsersService();