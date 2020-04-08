const Sequelize = require('sequelize');
const config = require('../config/sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, config);

module.exports = sequelize;