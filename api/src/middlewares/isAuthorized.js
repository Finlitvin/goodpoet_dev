const UnauthorizedError = require('../classes/errors/UnauthorizedError');

module.exports = function isAuthorized(req, res, next) {
    if(req.user){
        return next();
    }

    return next(new UnauthorizedError('sorry'));
}