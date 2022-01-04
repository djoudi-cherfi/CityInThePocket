import { Router } from 'express';

import authMW from './middlewares/authToken';

import emailSchema from '../schema/email';
import resetPasswordSchema from '../schema/resetPassword';
import userSchema from '../schema/user';
import shopSchema from '../schema/shop';
import productSchema from '../schema/product';
import validateBody from '../services/validator';

import userController from './controllers/userController';
import shopController from './controllers/shopController';
import productController from './controllers/productController';
import marketplaceController from './controllers/marketplaceController';
import categoryController from './controllers/categoryController';

// const { cache, flush } = require('../services/cache');

const { auth } = authMW;

const apiRouter = Router();

// Route MarketPlace
apiRouter.post('/marketplace', marketplaceController.addOne); // Créer ou modifie un marketplace
apiRouter.get('/marketplaces', marketplaceController.getAll); // Renvoi tous les marketplaces
apiRouter.get('/marketplace/:id', marketplaceController.getOneById); // Renvoi un marketplace par son id
apiRouter.delete('/marketplace/:id', auth, marketplaceController.deleteOneById); // Supprime un marketplace par son id

// Route login
apiRouter.post('/login', userController.doLogin); // Connexion, génération de l'access token et du refresh token
apiRouter.get('/logout', userController.logout); // Déconnexion, suppression du refreshToken
apiRouter.get('/refreshToken', userController.refreshToken); // Re-génération de l'access token à partir du refresh token

// Route forgot, reset password,
apiRouter.post('/forget-password', userController.forgetPassword); // Demande de réinitialisation du mot de passe
apiRouter.post('/reset-password/:id/:token', validateBody(resetPasswordSchema), userController.newPassword); // Réinitialisation du mot de passe
apiRouter.get('/reset-password/:id/:token', userController.checkForNewPassword);

// Route User
apiRouter.post('/user', validateBody(userSchema), userController.addOne); // Créer ou modifie un utilisateur
apiRouter.post('/user/email', validateBody(emailSchema), userController.validEmail); // Vérification si l'utilisateur existe en BDD
apiRouter.get('/user/validation/:id/:token', userController.validateAccount); // Validation du compte utilisateur
apiRouter.get('/users', auth, userController.getAll); // Renvoi tous les users
apiRouter.get('/user/:id', auth, userController.getOneById); // Renvoi un utilisateur par son id
apiRouter.delete('/user/:id', auth, userController.deleteOneById); // Supprime un utilisateur par son id

// Route Product
apiRouter.post('/product', auth, validateBody(productSchema), productController.addOne); // Créer ou modifie un produit
apiRouter.get('/products/last/:nbProduct/marketplace/:marketplaceId', productController.getLastProductsAddToMarketplace); // Renvoi les 5 derniers produits ajouter au marketplace
apiRouter.get('/products/shop/:id/', productController.getAllProductFromShop); // Renvoi tous les produits d'un shop
apiRouter.get('/product/:id', productController.getOneById); // Renvoi un produit par son id
apiRouter.delete('/product/:id', productController.deleteOneById); // Supprime un produit par son id

// Route Shop
apiRouter.post('/shop', auth, validateBody(shopSchema), shopController.addOne); // Créer ou modifie un shop
apiRouter.get('/shops/last/:nbShop/marketplace/:marketplaceId', shopController.getLastShopsAddToMarketplace); // Renvoi les 5 derniers shops ajouter au marketplace
apiRouter.get('/shops/marketplace/:id', shopController.getAllShopFromMarketPlace); // Renvoi tous les shops d'un marketplace
apiRouter.get('/shops/category/:categoryId/marketplace/:marketplaceId', shopController.getShopsOfCategoryOfMarketplace); // Renvoi tous les shops d'une categorie d'un marketplace
apiRouter.get('/shop/:id', shopController.getOneById); // Renvoi un shop par son id
apiRouter.get('/shop/user/:userId', auth, shopController.getOneByUser); // Renvoi un shop par son utilisateur id
apiRouter.delete('/shop/:id', shopController.deleteOneById); // Supprime un shop par son id

// Route Category
apiRouter.post('category', categoryController.addOne); // Créer ou modifie une categorie
apiRouter.get('/category', categoryController.getAll);// Renvoi toutes les categories
apiRouter.get('/category/:id', categoryController.getOneById);// Renvoi une categorie par son id
apiRouter.delete('/category/:id', categoryController.deleteOneById); // Supprime une categorie par son id

apiRouter.use((request, response) => {
  response.status(404).json({ error: 'Ressource non trouvée' });
});

export default apiRouter;
