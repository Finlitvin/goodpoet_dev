const passport = require('passport');
const httpStatus = require('http-status-codes');
const resMessage = require('../helpers/resMessage');
const UnauthorizedError = require('../classes/errors/UnauthorizedError');

class LoginController {
    login(req, res, next) {
        passport.authenticate('local', (err, user, info) => {
            if (err) {
                return next(err);
            }

            if (!user) {
                return next(new UnauthorizedError(info.message));
            }

            req.logIn(user, err => {
                if (err) {
                    return next(err);
                }
                res.status(httpStatus.OK).json(resMessage.OK(httpStatus.OK, 'Success login'));
            });
        })(req, res, next);
    }

    logout(req, res, next) {
        req.logOut();

        res.status(httpStatus.OK).json(resMessage.OK(httpStatus.OK, 'Success logout'));
    }
};

module.exports = new LoginController();
