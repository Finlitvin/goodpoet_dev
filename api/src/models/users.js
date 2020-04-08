const Sequelize = require('sequelize');
const sequelize = require('../db/sequelize');

const Users = (module.exports = sequelize.define('user', {
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
}));