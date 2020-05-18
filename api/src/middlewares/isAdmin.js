require('dotenv').config();
const ForbiddenError = require('../classes/errors/ForbiddenError');

module.exports = async function(req, res, next) {
    const roles = await req.user.getRoles();

    for(const role of roles) {
        if(role.value === process.env.ADMIN){
            return  next();
        }
    }

    return next(new ForbiddenError('Not enough roots'));
}