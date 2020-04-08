const Sequelize = require('sequelize');
const sequelize = require('../db/sequelize');

const UsersRoles = (module.exports = sequelize.define('users_roles', {
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