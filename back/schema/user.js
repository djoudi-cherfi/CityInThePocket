const Joi = require('joi');

const schema = Joi.object({
  firstName: Joi.string().pattern(/^(?=.*[a-zA-Z])[a-zA-Z ']{1,}$/).required(),
  lastName: Joi.string().pattern(/^(?=.*[a-zA-Z])[a-zA-Z ']{1,}$/).required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,30}$/).required(),
  confirmPassword: Joi.string().required().valid(Joi.ref('password')),
  avatar: Joi.string(),
  phone_number: Joi.string().pattern(/^(0)[1-9]([0-9]){8}$/).length(10).required(),
  address: Joi.string().pattern(/^(?=.*[a-zA-Z])[a-zA-Z '0-9]{1,}$/).required(),
  city: Joi.string().required(),
  postal_code: Joi.string().pattern(/^\d{5}$/).length(5).required(),
  conditions_privacy_policy: Joi.boolean().valid(true).required(),
});

module.exports = schema;
