const ForbiddenError = require('../classes/errors/ForbiddenError');
require('dotenv').config();

module.exports = async function(req, res, next) {
    const roles = await req.user.getRoles();
    
    for(const role of roles) {

        if(role.value === 'admin'){
            return next();
        }
    }

    return next(new ForbiddenError('Not enough roots'));
}