const Category = require('../models/category');

const categoryController = {

  getAll: async (req, res, next) => {
    try {
      const theCategorys = await Category.findAll();
      if (theCategorys) {
        res.json(theCategorys);
      }
      else {
        next();
      }
    }
    catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getOneById: async (req, res, next) => {
    try {
      const categoryId = req.params.id;

      const theCategory = await Category.findOne(categoryId);

      if (theCategory) {
        res.json(theCategory);
      }
      else {
        next();
      }
    }
    catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteOneById: async (request, response, next) => {
    try {
      const { id } = request.params.id;

      const result = await Category.findOne(id);
      result.delete(id);
      if (result) {
        response.json(result);
      }
      else {
        next();
      }
    }
    catch (error) {
      console.error(error);
      response.status(500).json({ error: error.message });
    }
  },
};

module.exports = categoryController;
