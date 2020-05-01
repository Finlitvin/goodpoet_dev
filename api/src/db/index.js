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
                const user = await userService.addUser({
                    email: process.env.ADMIN_LOGIN,
                    password: process.env.ADMIN_PASSWORD
                });
            } catch (error) {
                console.log(error);
            }
            
            try {
                admin = await userService.getUserByEmail(process.env.ADMIN_LOGIN);
            } catch (error) {
                console.log(error);
            }

            try {
                await userService.addUserRole(admin.id, process.env.ADMIN);
            } catch (error) {
               console.log(error); 
            }
        }
    }
}

module.exports = new DataBase();