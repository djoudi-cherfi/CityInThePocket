import {
  // --------------- Product last
  PRODUCT_LAST_ADD_GET,
  productLastAddSave,
  // --------------- Products by shop
  PRODUCTS_BY_SHOP_GET,
  productsByShopSave,
  // --------------- Product
  PRODUCT_GET,
  productSave,
} from 'src/lib/actions/productActions';

import { axiosApi } from 'src/lib/axios/axiosConfig';

const productsMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);

  // On récupére le tiroir du state
  const { products } = store.getState();
  const { shops } = store.getState();
  const { main } = store.getState();

  const city = main.cityName.id;

  const instanceApi = axiosApi();

  switch (action.type) {
    // --------------- Product last
    case PRODUCT_LAST_ADD_GET: {
      // console.log('authMiddleware va traiter une action Listproducts');
      instanceApi.get(`/marketplace/${city}/product/last`)
        .then((response) => {
          // console.log('response api for last product', response);
          // veut stocker response.data dans le state
          store.dispatch(productLastAddSave(response.data));
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
        instanceApi.get(`/shop/${id}/products`)
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
        instanceApi.get(`/product/${id}`)
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

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};

export default productsMiddleware;
