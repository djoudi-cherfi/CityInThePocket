import Product from '../models/product';

const productController = {

  getOneById: async (req, res, next) => {
    try {
      const productId = req.params.id;

      const product = await Product.findOne(productId);

      // Si le produit est trouvé on l'affiche
      if (product) {
        res.json(product);
      }
      else {
        // Sinon on passe a la page 404 car non trouvé

        next();
      }
    }
    catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  },

  getLastProductsAddToMarketplace: async (req, res, next) => {
    const { nbProduct, marketplaceId } = req.params;

    try {
      const products = await Product.findLastProductsAddToMarketplace(nbProduct, marketplaceId);

      if (products) {
        res.json(products);
      }
      else {
        next();
      }
    }
    catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAllProductFromShop: async (req, res, next) => {
    try {
      const shopId = req.params.id;

      const products = await Product.findAllProductFromShop(shopId);

      if (products) {
        res.json(products);
      }
      else {
        // Sinon on passe a la page 404 car non trouvé

        next();
      }
    }
    catch (error) {
      console.error(error);
      res.status(500).json({
        error: error.message,
      });
    }
  },

  addOne: async (req, res) => {
    const productForm = req.body;

    if (!req.body.name
      || !req.body.description
      || !req.body.price
      || !req.body.shop_id
    ) {
      res.status(400).json({ error: 'Il manque une info' });
    }
    else {
      const newProduct = await new Product(productForm);

      const product = await newProduct.save();

      res.json(product);
    }
  },

  deleteOneById: async (request, response, next) => {
    try {
      const { id } = request.params;

      const result = await Product.findOne(id);
      if (result) {
        result.delete(id);
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

export default productController;
