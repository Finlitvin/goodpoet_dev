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
}

module.exports = new UserController();