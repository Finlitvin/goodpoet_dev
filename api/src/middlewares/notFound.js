const NotFoundError = require('../classes/errors/NotFoundError');

module.exports = (req, res, next) => {
    next(new NotFoundError('page not found'));
}