import { createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import { persistStore } from 'redux-persist';

// combineReducers
import rootReducer from 'src/lib/reducers';

// combine dev tools avec les middlewares
import mainMiddleware from 'src/lib/middlewares/mainMiddleware';
import authMiddleware from 'src/lib/middlewares/authMiddleware';
import productMiddleware from 'src/lib/middlewares/productMiddleware';
import shopMiddleware from 'src/lib/middlewares/shopMiddleware';
import axiosMiddleware from 'src/lib/middlewares/axiosMiddleware';

// on combine devTools avec les middlewares
const enhancers = composeWithDevTools(
  applyMiddleware(
    // les middlewares
    mainMiddleware,
    authMiddleware,
    productMiddleware,
    shopMiddleware,
    axiosMiddleware,
  ),
);

export default () => {
  const store = createStore(rootReducer, enhancers);

  const persistor = persistStore(store);

  return { store, persistor };
};
