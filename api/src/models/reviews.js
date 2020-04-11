const Sequelize = require('sequelize');
const sequelize = require('../db/sequelize');

const Review = (module.exports = sequelize.define('review', {
    userId: {
        type: Sequelize.INTEGER,
        field: 'user_id',
        allowNull: false
    },
    poemId: {
        type: Sequelize.INTEGER,
        field: 'poem_id',
        allowNull: false
    },
    review: {
        type: Sequelize.STRING,
        allowNull: false
    }
}));