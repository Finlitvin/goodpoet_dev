const Sequelize = require('sequelize');
const sequelize = require('../db/sequelize');

const Poems = (module.exports = sequelize.define('poem', {
    userId: {
        type: Sequelize.INTEGER,
        field: 'user_id',
        allowNull: false
    },
    tittle: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.STRING,
        allowNull: false
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false
    }
}));