require('dotenv').config();

module.exports = {
    logging: false,
    dialect: "mysql",
    host: process.env.HOST,
    define: {
        timestamps: false,
        underscored: true
    }
};