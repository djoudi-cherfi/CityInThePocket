import axios from 'axios';

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
  // --------------- Account shop create
  ACCOUNT_CREATE_SHOP_POST,
} from 'src/lib/actions/shopActions';

const shopMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);

  // On récupére le tiroir du state
  const { shops } = store.getState();
  const { auth } = store.getState();
  const { main } = store.getState();

  const city = main.cityName.id;

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
    // --------------- Category
    case CATEGORY_NAMES_GET: {
      axios.get(`${API_URL}/marketplace/${city}/category`)
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
      axios.get(`${API_URL}/marketplace/${city}/shop/last`)
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

      axios.get(`${API_URL}/marketplace/${city}/category/${id}/shops`)
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

      axios.get(`${API_URL}/shop/${id}`)
        .then((response) => {
          // console.log('la réponse du serveur suite SHOPS_LAST_ADD_GET :', response);
          store.dispatch(shopSave(response.data));
        })
        .catch((error) => {
          console.log('l\'erreur du serveur suite SHOPS_BY_CATEGORY_GET :', error.response.data.error);
        });
      break;
    }

    // --------------- Account shop create
    case ACCOUNT_CREATE_SHOP_POST: {
      instance.post('/shop/', {
        company_name: shops.companyName,
        siret: shops.siret,
        description: shops.description,
        address: shops.address,
        city: shops.city,
        postal_code: shops.postalCode,
        phone_number: shops.phoneNumber,
        email: shops.email,
        userId: auth.userId,
        category_id: shops.category_id,
        marketplace_id: shops.marketplace_id,
      })
        .then((response) => {
          console.log('la réponse du serveur suite ACCOUNT_CREATE_SHOP_POST :', response);
          // store.dispatch(serverResponseStatusSave(response.status));
        })
        .catch((error) => {
          console.log('l\'erreur du serveur suite ACCOUNT_CREATE_SHOP_POST :', error.response.data.error);
        });
      break;
    }

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};

export default shopMiddleware;
