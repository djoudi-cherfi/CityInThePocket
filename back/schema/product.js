const Joi = require('joi');

const schema_product = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().min(20).max(200).required(),
  price: Joi.number().required(),
  shop_id: Joi.number().integer().required(),
});

module.exports = schema_product;
