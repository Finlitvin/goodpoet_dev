const Sequelize = require('sequelize');
const sequelize = require('../db/sequelize');

const Profile = (module.exports = sequelize.define('profile', {
    userId: {
        type: Sequelize.INTEGER,
        field: 'user_id',
        allowNull: false
    },
    firstName: {
        type: Sequelize.STRING,
        field: 'first_name',
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        field: 'last_name',
        allowNull: false
    },
    bio: {
        type: Sequelize.STRING
    }
}));