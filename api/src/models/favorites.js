const Sequelize = require('sequelize');
const sequelize = require('../db/sequelize');

const Favorite = (module.exports = sequelize.define('favorite', {
    userId: {
        type: Sequelize.INTEGER,
        field: 'user_id',
        allowNull: false
    },
    favoriteId: {
        type: Sequelize.STRING,
        field: 'favorite_id',
        allowNull: false
    }
}));