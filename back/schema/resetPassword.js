const Joi = require('joi');

const schema = Joi.object({
  password: Joi.string().pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,30}$/).required(),
  confirmPassword: Joi.string().required().valid(Joi.ref('password')),
});

module.exports = schema;
