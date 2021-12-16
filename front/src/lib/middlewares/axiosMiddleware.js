import {
  // --------------- Serveur
  serverResponseStatusSave,
  serverErrorseStatusSave,
} from 'src/lib/actions/servActions';

import {
  // --------------- Login
  USER_IDENTITY_GET,
  userIdentitySave,
} from 'src/lib/actions/authActions';

import {
  // --------------- Account shop user
  SHOP_USER_ID_GET,
  shopUserIdSave,
  // --------------- Account shop create
  ACCOUNT_CREATE_SHOP_POST,
} from 'src/lib/actions/shopActions';

import {
  // --------------- Account shop product create
  PRODUCT_ACCOUNT_CREATE,
} from 'src/lib/actions/productActions';

import { axiosApi, axiosAuth, interceptors } from 'src/lib/axios/axiosConfig';

const axiosMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);

  // On récupére le tiroir du state
  const { products } = store.getState();
  const { shops } = store.getState();
  const { auth } = store.getState();

  const instanceAuth = axiosAuth(auth.accessToken);

  const instanceApi = axiosApi();

  interceptors(store, instanceAuth, instanceApi);

  switch (action.type) {
    case USER_IDENTITY_GET: {
      const { userId } = auth;

      if (userId) {
        instanceAuth.get(`/user/${userId}`)
          .then((response) => {
            // console.log('la réponse du serveur USER_IDENTITY_GET :', response);

            store.dispatch(userIdentitySave(response.data));
            // store.dispatch(shopUserIdGet());
          })
          .catch((error) => {
            console.log('axios USER_IDENTITY_GET :', error.response.data);
          });
      }
      break;
    }

    // --------------- Account shop create
    case ACCOUNT_CREATE_SHOP_POST: {
      instanceAuth.post('/shop/', {
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
          // console.log('la réponse du serveur suite ACCOUNT_CREATE_SHOP_POST :', response);
          store.dispatch(serverResponseStatusSave(response.status));
        })
        .catch((error) => {
          console.log('l\'erreur du serveur suite ACCOUNT_CREATE_SHOP_POST :', error.response.data.error);
        });
      break;
    }

    // --------------- Account shop user
    case SHOP_USER_ID_GET: {
      const { userId } = auth;

      if (userId) {
        const id = userId.toString(10);

        instanceAuth.get(`/shop/user/${id}`)
          // console.log('la réponse du serveur SHOP_USER_ID_GET :', response);
          .then((response) => {
            // console.log('response api for shop userID', response);
            store.dispatch(shopUserIdSave(response.data));
          })
          .catch((error) => {
            console.log(error.response.data.error);
          });
      }
      break;
    }

    // --------------- Account shop product create
    case PRODUCT_ACCOUNT_CREATE: {
      instanceAuth.post('/product/', {
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

export default axiosMiddleware;
