import axios from 'axios';

import {
  // --------------- Product last
  PRODUCT_LAST_ADD_GET,
  productsavelast,
  // --------------- Products by shop
  PRODUCTS_BY_SHOP_GET,
  productsByShopSave,
  // --------------- Product
  PRODUCT_GET,
  productSave,
  // --------------- Account shop product create
  PRODUCT_ACCOUNT_CREATE,
} from 'src/lib/actions/productActions';

const productsMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);

  // On récupére le tiroir du state
  const { products } = store.getState();
  const { shops } = store.getState();
  const { auth } = store.getState();

  const instance = axios.create({
    // Inclure des cookies et des en-têtes d'authentification
    withCredentials: true,

    // Variable d'environnement url serveur
    // eslint-disable-next-line no-undef
    baseURL: API_URL,

    headers: {
      'x-xsrf-token': `${auth.xsrfToken}`,
    },
  });

  switch (action.type) {
    // --------------- Product last
    case PRODUCT_LAST_ADD_GET: {
      // console.log('authMiddleware va traiter une action Listproducts');
      instance.get('/product/last')
        .then((response) => {
          // console.log('response api for last product', response);
          // veut stocker response.data dans le state
          store.dispatch(productsavelast(response.data));
        })
        .catch((error) => {
          console.log(error.response.data.error);
        });
      break;
    }

    // --------------- Products by shop
    case PRODUCTS_BY_SHOP_GET: {
      const id = shops.shopIdUrl;

      if (id) {
        instance.get(`/shop/${id}/products`)
          .then((response) => {
            // console.log('response api for shop PRODUCTS_BY_SHOP_GET', response);
            store.dispatch(productsByShopSave(response.data));
          })
          .catch((error) => {
            console.log(error.response.data.error);
          });
      }
      break;
    }

    // --------------- Product
    case PRODUCT_GET: {
      const id = products.productIdUrl;

      if (id) {
        instance.get(`/product/${id}`)
          .then((response) => {
            // console.log('response api for shop PRODUCTS_BY_SHOP_GET', response);
            store.dispatch(productSave(response.data));
          })
          .catch((error) => {
            console.log(error.response.data.error);
          });
      }
      break;
    }

    // --------------- Account shop product create
    case PRODUCT_ACCOUNT_CREATE: {
      instance.post('/product/', {
        name: products.name,
        description: products.description,
        price: products.price,
        shop_id: shops.shopUserId.id,
      })
        .then((response) => {
          console.log('la réponse du serveur suite au post CREATE_product :', response.data);
        })
        .catch((error) => {
          console.log('l\'erreur du serveur suite au post CREATE_product :', error.response.data.error);
        });
      break;
    }

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};

export default productsMiddleware;
