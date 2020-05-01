const httpStatus = require('http-status-codes');
const resMessage = require('../helpers/resMessage');

module.exports = (error, req, res, next) => {
    error.status = error.status || httpStatus.INTERNAL_SERVER_ERROR;

    res.status(error.status).json(resMessage.ERROR(error));

    return;
}