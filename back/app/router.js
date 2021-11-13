"use strict";

const { Router } = require('express');
const { auth } = require('./middlewares/token');
const apiRouter = Router();

const emailSchema = require('../schema/email');
const userSchema = require('../schema/user');
const shopSchema = require('../schema/shop');
const productSchema = require('../schema/product');

const { validateBody } = require('../services/validator');

// const { cache, flush } = require('../services/cache');

const userController = require('./controllers/userController');
const shopController = require('./controllers/shopController');
const productController = require('./controllers/productController');
const marketplaceController = require('./controllers/marketplaceController');
const categoryController = require('./controllers/categoryController');

// Route MarketPlace
apiRouter.get('/marketplace/:id', marketplaceController.getOneById); // Renvoi un marketplace par son id
apiRouter.get('/marketplace', marketplaceController.getAll) // Retourne tous les marketplaces
apiRouter.get('/marketplace/:id/shops', marketplaceController.getAllShop); // Renvoi tous les shops d'un marketplace
// apiRouter.post('marketplace',  , marketplaceController.addOne) // Créer un marketplace
// apiRouter.patch('marketplace/:id', marketplaceController.editOne) // modifier un marketplace
apiRouter.delete('/marketplace/:id', marketplaceController.deleteOneById); // supprime un marketplace

// Route User
apiRouter.get('/user/logout', userController.logout);
apiRouter.get('/user/:id', userController.getOneById); // Renvoi un utilisateur par son id
apiRouter.get('/users', userController.getAll); // Renvoi tout les users
apiRouter.post('/user/login', userController.doLogin); //
apiRouter.get('/token', userController.refreshToken);

apiRouter.post('/user/validemail', validateBody(emailSchema), userController.validEmail); // Check si un utilisateur
apiRouter.post('/user', validateBody(userSchema), userController.addOne); // Créer un utilisateur
// apiRouter.patch('/user/:id', userController.updateOneById) // Modifier un utilisateur par son id 
apiRouter.delete('/user/:id', userController.deleteOneById); // Supprimer un utilisateur par son id 


// Route Product
apiRouter.get('/product/last', productController.getLastestProduct); // Renvoi un produit par son id
apiRouter.get('/product/:id', productController.getOneById) // Renvoi un produit par son id
apiRouter.post('/product', validateBody(productSchema), productController.addOne); // Créer un produit
// apiRouter.patch('/product/:id', productController.updateOneById) // Modifier un produit par son id
apiRouter.delete('/product/:id', productController.deleteOneById); // Supprimer un produit par son id


// Route Shop
apiRouter.get('/shop/last', shopController.getLastestShop); // Renvoi un produit par son id
apiRouter.get('/shop/:id', shopController.getOneById) // Renvoi un shop par son id
apiRouter.get('/shop/:id/products', shopController.getAllProduct); // Renvoi tout les produits d'un shop
apiRouter.post('/shop', validateBody(shopSchema), shopController.addOne); // Créer un shop
apiRouter.patch('/shop/:id', shopController.updateOneById); // Modifier un shop par son id
apiRouter.delete('/shop/:id', shopController.deleteOneById); // Supprimer un shop par son id 
apiRouter.get('/shop/user/:id', shopController.getOneByUser); // Renvoi un shop par son id

// Route Category
apiRouter.get('/category/:id', categoryController.getOneById);// Renvoi une categorie
apiRouter.get('/category', categoryController.getAll);// Renvoi plusieurs categorie
apiRouter.get('/category/:categoryId/shops', shopController.getShopFromCategory); // Renvoi les shops d'une categorie
apiRouter.delete('/category/:id', categoryController.deleteOneById); // Supprimer une categorie par son id

// Test forgot password
apiRouter.post('/forget-password', userController.forgetPassword);
apiRouter.get('/reset-password/:id/:token', userController.checkForNewPassword);
apiRouter.post('/reset-password/:id/:token', userController.newPassword);
apiRouter.get('/email-validation/:id/:token', userController.validateAccount);

apiRouter.use((request, response) => {

    response.status(404).json({ "error": "Ressource non trouvée" });

});

module.exports = apiRouter;
