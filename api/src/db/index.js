const sequelize = require('./sequelize');
require('../models');

class DataBase {
    async connect() {
        await sequelize.sync();
        console.log('DATABASE [+]')
    }
}

module.exports = new DataBase();