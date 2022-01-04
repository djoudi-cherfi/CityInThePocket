import Joi from 'joi';

const resetPasswordSchema = Joi.object({
  password: Joi.string().pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,30}$/).required(),
  confirmPassword: Joi.string().required().valid(Joi.ref('password')),
});

export default resetPasswordSchema;
