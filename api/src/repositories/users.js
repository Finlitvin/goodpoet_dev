const userModel = require('../models/users');

class UsersRepository {
    getUser(id) {
        return userModel.findByPk(id);
    }

    getUserByEmail(value) {
        return userModel.findOne({ where: { email: value } });
    }

    getAllUsers() {
        return userModel.findAll();
    }

    addUser(user) {
        return userModel.create(user);
    }
}

module.exports = new UsersRepository();