const Sequelize = require('sequelize');
const sequelize = require('../db/sequelize');

const Roles = (module.exports = sequelize.define('role', {
    value: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
}));