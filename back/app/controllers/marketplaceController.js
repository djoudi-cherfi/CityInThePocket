"use strict";

const Marketplace = require("../models/marketplace");


const marketplaceController = {

    getOneById: async (req, res, next) => {

        try {

            const marketId = req.params.id;

            const theMarket = await Marketplace.findOne(marketId);

            if (theMarket) {

                res.json(theMarket);

            } else {

                next();

            }

        } catch (error) {

            res.status(500).json({error: error.message});

        }

    },

    getAll: async (req, res, next) => {

        try {

            const theMarkets = await Marketplace.findAll();

            if (theMarkets) {

                res.json(theMarkets);

            } else {

                next();

            }

        } catch (error) {

            res.status(500).json({error: error.message});

        }

    },

    getAllShop: async (req, res, next) => {

        try {

            const marketId = req.params.id;

            const shops = await Marketplace.findAllShopFromOneMarketPlace(marketId);

            if (shops) {

                res.json(shops);

            } else {

                // Sinon on passe a la page 404 car non trouvé

                next();

            }

        } catch (error) {

            console.error(error);
            res.status(500).json({error: error.message});

        }

    },

    deleteOneById: async (request, response, next) => {

        try {

            const {id} = request.params.id;

            const result = await Marketplace.findOne(id);

            if (result) {

                result.delete(id);
                response.json(result);

            } else {

                next();

            }

        } catch (error) {

            console.error(error);
            response.status(500).json({error: error.message});

        }

    }

};

module.exports = marketplaceController;
