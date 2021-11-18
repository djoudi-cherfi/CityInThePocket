const fetch = require('node-fetch');

const Shop = require('../models/shop');

const shopController = {

  getOneById: async (req, res, next) => {
    try {
      const shopId = req.params.id;

      const shop = await Shop.findOne(shopId);

      // Si le produit est trouvé on l'affiche
      if (shop) {
        res.json(shop);
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

  getOneByUser: async (req, res, next) => {
    try {
      const userId = req.params.id;

      const shop = await Shop.findOneByUser(userId);

      // Si le produit est trouvé on l'affiche
      if (shop) {
        res.json(shop);
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

  getAllProduct: async (req, res, next) => {
    try {
      const shopId = req.params.id;

      const products = await Shop.findAllProductFromOneShop(shopId);

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
    const shopForm = req.body;

    if (
      !req.body.company_name
      || !req.body.siret
      || !req.body.description
      || !req.body.phone_number
      || !req.body.email
      || !req.body.user_id
      || !req.body.marketplace_id
    ) {
      res.status(400).json({ error: 'Il manque une info' });
    }
    else {
      const checkSiretExist = await fetch(
        `https://api.insee.fr/entreprises/sirene/V3/siret/${req.body.siret}`,
        {
          method: 'GET',
          headers: {
            Authorization: process.env.INSEE_HEADER,
          },
        },
      );

      const dataSiret = await checkSiretExist.json();

      if (dataSiret.header.statut === 200) {
        const infoAddress = dataSiret.etablissement.adresseEtablissement;

        const addressTest = `${infoAddress.numeroVoieEtablissement}
          ${infoAddress.typeVoieEtablissement}
          ${infoAddress.libelleVoieEtablissement}
          ${infoAddress.codePostalEtablissement}
          ${infoAddress.libelleCommuneEtablissement}`;

        const coordinates = await fetch(
          `https://api-adresse.data.gouv.fr/search/?q=${addressTest}&limit=1`,
          {
            method: 'GET',
          },
        );

        const dataCoordinates = await coordinates.json();
        let result = shopForm;

        if (dataCoordinates.features.length !== 0) {
          const longitude = dataCoordinates.features[0].geometry.coordinates[1];
          const latitude = dataCoordinates.features[0].geometry.coordinates[0];
          const coordinatesFound = {
            coordinates: `[${longitude}, ${latitude}]`,
          };
          const postalCode = {
            postal_code: `${dataCoordinates.features[0].properties.postcode}`,
          };
          const streetName = {
            address: `${dataCoordinates.features[0].properties.name}`,
          };
          const cityName = {
            city: `${dataCoordinates.features[0].properties.city}`,
          };

          result = Object.assign(
            shopForm,
            postalCode,
            streetName,
            cityName,
            coordinatesFound,
          );

          const newShop = await new Shop(result);

          const shop = await newShop.save();

          res.json({
            shop_id: shop,
          });
        }
        else {
          res.status(400).json({ error: 'Adresse postale non trouvé' });
        }
      }
      else {
        res.status(dataSiret.header.statut).json(dataSiret.header.message);
      }
    }
  },

  deleteOneById: async (request, response, next) => {
    try {
      const { id } = request.params;

      const result = await Shop.findOne(id);
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
      response.status(500).json({
        error: error.message,
      });
    }
  },

  getLastestShop: async (req, res, next) => {
    const { marketplaceId } = req.params;

    try {
      const shops = await Shop.findLastest(marketplaceId);

      if (shops) {
        res.json(shops);
      }
      else {
        next();
      }
    }
    catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  },

  getShopFromCategory: async (req, res, next) => {
    try {
      const { categoryId, marketplaceId } = req.params;

      const shop = await Shop.findShopFromCategory(categoryId, marketplaceId);

      if (shop) {
        res.json(shop);
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

  updateOneById: async (req, res, next) => {
    try {
      const { categoryId } = req.params;

      const shop = await Shop.findShopFromCategory(categoryId);

      if (shop) {
        res.json(shop);
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
};

module.exports = shopController;
