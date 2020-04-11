const Sequelize = require('sequelize');
const sequelize = require('../db/sequelize');

const UserRole = (module.exports = sequelize.define('users_role', {
    userId: {
        type: Sequelize.INTEGER,
        field: 'user_id',
        allowNull: false
    },
    roleId: {
        type: Sequelize.INTEGER,
        field: 'role_id',
        allowNull: false
    }
}));