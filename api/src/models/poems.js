const Sequelize = require('sequelize');
const sequelize = require('../db/sequelize');

const Poem = (module.exports = sequelize.define('poem', {
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
        type: Sequelize.TEXT,
        allowNull: false
    },
    pubDate: {
        type: Sequelize.DATE,
        field: 'pub_date',
        allowNull: false
    }
}));