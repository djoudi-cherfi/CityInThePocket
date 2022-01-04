import Joi from 'joi';

const productSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().min(20).max(200).required(),
  price: Joi.number().required(),
  shop_id: Joi.number().integer().required(),
});

export default productSchema;
