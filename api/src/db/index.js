const sequelize = require('./sequelize');
require('../models');
const userService = require('../services/users');
require('dotenv').config();

class DataBase {
    async connect() {
        await sequelize.sync();
        console.log('DATABASE [+]');

        let admin = await userService.getUserByEmail(process.env.ADMIN_LOGIN);

        if(!admin) {
            try {
                const adminValue = {
                    email: process.env.ADMIN_LOGIN,
                    password: process.env.ADMIN_PASSWORD,
                    firstName: process.env.ADMIN_FIRST_NAME,
                    lastName: process.env.ADMIN_LAST_NAME
                }

                const user = await userService.addUser(adminValue, process.env.ROLE_ADMIN);
            } catch (error) {
                console.log(error);
            }
        }
    }
}

module.exports = new DataBase();