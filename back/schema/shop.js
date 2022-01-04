import Joi from 'joi';

const shopSchema = Joi.object({
  company_name: Joi.string().required(),
  siret: Joi.string().length(14).required(),
  description: Joi.string().min(30).max(666).required(),
  phone_number: Joi.string().pattern(/^(0)[1-9]([0-9]){8}$/).length(10).required(),
  // address: Joi.string().pattern(/^(?=.*[a-zA-Z])[a-zA-Z çéèâêîôûàùëïüÇÉÈÂÊÎÔÛÀÙËÏÜ '0-9]{1,}$/).required(),
  // city: Joi.string().required(),
  // postal_code: Joi.string().pattern(/^\d{5}$/).length(5).required(),
  email: Joi.string().email().required(),
  user_id: Joi.number().integer().required(),
  marketplace_id: Joi.number().integer().required(),
  category_id: Joi.number().integer().required(),

});

export default shopSchema;
