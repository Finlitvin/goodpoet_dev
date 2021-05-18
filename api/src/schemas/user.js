const Joi = require('joi');

module.exports = {
    add: Joi.object().keys({
        email: Joi.string().required().email(),
        password: Joi.string().required(),
        firstName: Joi.string(),
        lastName: Joi.string(),
        bio: Joi.string()
    })
}