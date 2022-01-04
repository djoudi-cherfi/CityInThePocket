import Marketplace from '../models/marketplace';

const marketplaceController = {

  getOneById: async (req, res, next) => {
    try {
      const marketId = req.params.id;

      const theMarket = await Marketplace.findOne(marketId);

      if (theMarket) {
        res.json(theMarket);
      }
      else {
        next();
      }
    }
    catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAll: async (req, res, next) => {
    try {
      const theMarkets = await Marketplace.findAll();

      if (theMarkets) {
        res.json(theMarkets);
      }
      else {
        next();
      }
    }
    catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  addOne: async (req, res) => {
    const marketplaceForm = req.body;

    if (!req.body.city
      || !req.body.slug
      || !req.body.postal_code
    ) {
      res.status(400).json({ error: 'Il manque une info' });
    }
    else {
      const newMarketplace = await new Marketplace(marketplaceForm);

      const marketplace = await newMarketplace.save();

      res.json(marketplace);
    }
  },

  deleteOneById: async (request, response, next) => {
    try {
      const { id } = request.params.id;

      const result = await Marketplace.findOne(id);

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

export default marketplaceController;
