const bcrypt = require('bcrypt');

module.exports = (value) => {
    return bcrypt.hashSync(value, bcrypt.genSaltSync(8));
}