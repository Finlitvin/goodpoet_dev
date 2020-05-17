const Joi = require('joi');

module.exports = {
    id: Joi.object().keys({
        id: Joi.number().min(1)
    })
}