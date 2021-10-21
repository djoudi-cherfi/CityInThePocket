import { combineReducers } from 'redux';

import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import { encryptTransform } from 'redux-persist-transform-encrypt';

// on importe les reducers
import servReducer from 'src/lib/reducers/servReducer';
import mainReducer from 'src/lib/reducers/mainReducer';
import authReducer from 'src/lib/reducers/authReducer';
import shopReducer from 'src/lib/reducers/shopReducer';
import productReducer from 'src/lib/reducers/productReducer';

// le reducer principal, qui combine les autres
const rootReducer = combineReducers({
  // nom du tiroir: reducer qui gère cette partie du state
  serv: servReducer,
  main: mainReducer,
  auth: authReducer,
  shops: shopReducer,
  products: productReducer,
});

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['main', 'auth', 'shops', 'products'],
  transforms: [
    encryptTransform({
      secretKey: 'my-super-secret-key',
      onError: function (error) {
        // Handle the error.
        console.log('transforms error', error);
      },
    }),
  ],
};

export default persistReducer(rootPersistConfig, rootReducer);
