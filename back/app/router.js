const { Router } = require('express');
const { auth } = require('./middlewares/authToken');

const apiRouter = Router();

const emailSchema = require('../schema/email');
const resetPasswordSchema = require('../schema/resetPassword');
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
apiRouter.get('/marketplaces', marketplaceController.getAll); // Retourne tous les marketplaces
apiRouter.get('/marketplace/:id/shops', marketplaceController.getAllShop); // Renvoi tous les shops d'un marketplace
// apiRouter.post('marketplace', auth, marketplaceController.addOne); // Créer ou modifie un marketplace
apiRouter.delete('/marketplace/:id', auth, marketplaceController.deleteOneById); // supprime un marketplace

// Route login
apiRouter.post('/login', userController.doLogin); // Authentification et création du accessToken et refreshToken
apiRouter.get('/logout', userController.logout);
apiRouter.get('/refreshToken', userController.refreshToken); // Re-génère le token à partir du refreshToken

// Route forgot, reset password,
apiRouter.post('/forget-password', userController.forgetPassword);
apiRouter.get('/reset-password/:id/:token', userController.checkForNewPassword);
apiRouter.post('/reset-password/:id/:token', validateBody(resetPasswordSchema), userController.newPassword);
apiRouter.get('/email-validation/:id/:token', userController.validateAccount);

// Route User
apiRouter.get('/user/:id', auth, userController.getOneById); // Renvoi un utilisateur par son id
apiRouter.get('/users', auth, userController.getAll); // Renvoi tout les users
apiRouter.post('/user/validemail', validateBody(emailSchema), userController.validEmail);
apiRouter.post('/user', validateBody(userSchema), userController.addOne); // Créer ou modifie un utilisateur
apiRouter.delete('/user/:id', auth, userController.deleteOneById); // Supprimer un utilisateur par son id

// Route Product
apiRouter.get('/marketplace/:marketplaceId/product/last', productController.getLastestProduct); // Renvoi le derier produit ajouter par son id
apiRouter.get('/product/:id', productController.getOneById); // Renvoi un produit par son id
apiRouter.post('/product', auth, validateBody(productSchema), productController.addOne); // Créer ou modifie un produit
apiRouter.delete('/product/:id', productController.deleteOneById); // Supprimer un produit par son id

// Route Shop
apiRouter.get('/marketplace/:marketplaceId/shop/last', shopController.getLastestShop); // Renvoi un produit par son id
apiRouter.get('/shop/:id', shopController.getOneById); // Renvoi un shop par son id
apiRouter.get('/shop/:id/products', shopController.getAllProduct); // Renvoi tout les produits d'un shop
apiRouter.post('/shop', auth, validateBody(shopSchema), shopController.addOne); // Créer ou modifie un shop
apiRouter.delete('/shop/:id', shopController.deleteOneById); // Supprimer un shop par son id
apiRouter.get('/shop/user/:id', auth, shopController.getOneByUser); // Renvoi un shop par son id utilisateur

// Route Category
apiRouter.get('/marketplace/:marketplaceId/category/:id', categoryController.getOneById);// Renvoi une categorie
apiRouter.get('/marketplace/:marketplaceId/category', categoryController.getAll);// Renvoi plusieurs categorie
apiRouter.get('/marketplace/:marketplaceId/category/:categoryId/shops', shopController.getShopFromCategory); // Renvoi les shops d'une categorie
apiRouter.delete('/category/:id', categoryController.deleteOneById); // Supprimer une categorie par son id

apiRouter.use((request, response) => {
  response.status(404).json({ error: 'Ressource non trouvée' });
});

module.exports = apiRouter;
