const Joi = require('joi');
const ValidationError = require('../classes/errors/ValidationError');

module.exports = (schema) => {
    return (req, res, next) => {
        let isNotValid;

        if (schema.body) {
          isNotValid = Joi.validate(req.body, schema.body).error;
        }
        
        if (schema.params) {
          isNotValid = Joi.validate(req.params, schema.params).error;
        }
    
        if (schema.query) {
          isNotValid = Joi.validate(req.query, schema.query).error;
        }
    
        if (isNotValid) {
          next(new ValidationError(isNotValid.message));
        }
      
        next();
    }
}