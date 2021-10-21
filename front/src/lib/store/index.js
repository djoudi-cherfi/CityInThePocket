import { createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import { persistStore } from 'redux-persist';

// combineReducers
import rootReducer from 'src/lib/reducers';

// combine dev tools avec les middlewares
import authMiddleware from 'src/lib/middlewares/authMiddleware';
import productMiddleware from 'src/lib/middlewares/productMiddleware';
import shopMiddleware from 'src/lib/middlewares/shopMiddleware';

// on combine devTools avec les middlewares
const enhancers = composeWithDevTools(
  applyMiddleware(
    // les middlewares
    authMiddleware,
    productMiddleware,
    shopMiddleware,
  ),
);

export default () => {
  const store = createStore(rootReducer, enhancers);

  const persistor = persistStore(store);

  return { store, persistor };
};
