import {
  // --------------- Category
  CATEGORY_NAMES_GET,
  categoryNamesSave,
  // --------------- Shop last
  SHOPS_LAST_ADD_GET,
  shopsLastAddSave,
  // --------------- Shops by category
  SHOPS_BY_CATEGORY_GET,
  shopsByCategorySave,
  // --------------- Shops by id
  SHOP_GET,
  shopSave,
} from 'src/lib/actions/shopActions';

import { axiosApi } from 'src/lib/axios/axiosConfig';

const shopMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);

  // On récupére le tiroir du state
  const { shops } = store.getState();
  const { main } = store.getState();

  const city = main.cityName.id;

  const instanceApi = axiosApi();

  switch (action.type) {
    // --------------- Category
    case CATEGORY_NAMES_GET: {
      instanceApi.get(`/marketplace/${city}/category`)
        .then((response) => {
          // console.log('la réponse du serveur suite SHOPS_LAST_ADD_GET :', response);
          store.dispatch(categoryNamesSave(response.data));
        })
        .catch((error) => {
          console.log('l\'erreur du serveur suite SHOPS_BY_CATEGORY_GET :', error.response.data.error);
        });
      break;
    }

    // --------------- Shop last
    case SHOPS_LAST_ADD_GET: {
      instanceApi.get(`/marketplace/${city}/shop/last`)
        .then((response) => {
          // console.log('response api for last shop', response);
          // console.log('la réponse du serveur suite SHOPS_LAST_ADD_GET :', response);
          store.dispatch(shopsLastAddSave(response.data));
        })
        .catch((error) => {
          console.log(error.response.data.error);
        });
      break;
    }

    // --------------- Shops by category
    case SHOPS_BY_CATEGORY_GET: {
      const id = shops.categoryNameIdUrl;

      instanceApi.get(`/marketplace/${city}/category/${id}/shops`)
        .then((response) => {
          // console.log('la réponse du serveur suite SHOPS_LAST_ADD_GET :', response);
          store.dispatch(shopsByCategorySave(response.data));
        })
        .catch((error) => {
          console.log('l\'erreur du serveur suite SHOPS_BY_CATEGORY_GET :', error.response.data.error);
        });
      break;
    }

    // --------------- Shops by id
    case SHOP_GET: {
      const id = shops.shopIdUrl;

      instanceApi.get(`/shop/${id}`)
        .then((response) => {
          // console.log('la réponse du serveur suite SHOPS_LAST_ADD_GET :', response);
          store.dispatch(shopSave(response.data));
        })
        .catch((error) => {
          console.log('l\'erreur du serveur suite SHOPS_BY_CATEGORY_GET :', error.response.data.error);
        });
      break;
    }

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};

export default shopMiddleware;
