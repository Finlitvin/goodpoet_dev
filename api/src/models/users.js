const Sequelize = require('sequelize');
const sequelize = require('../db/sequelize');
const hash = require('../helpers/hash');
const bcrypt = require('bcrypt');

const User = (module.exports = sequelize.define('user', {
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
}));

User.beforeCreate((user, options) => {
    user.password = User.hashPassword(user.password);
});
  
User.hashPassword = (password) => {
    return hash(password);
};
  
User.prototype.validatePassword = function(password) {
    if (!password || !this.password) {
        return false;
    }
  
    return bcrypt.compareSync(password, this.password);
};