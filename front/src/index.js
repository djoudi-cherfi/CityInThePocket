// == Import
import React from 'react';

import { render } from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import configureStore from 'src/lib/store';

// == Loader animation
import Loader from 'src/components/Loader/LoaderCircle';

// == Import
// Composants
import App from 'src/containers/App';

const { store, persistor } = configureStore();

// == Render
// Élément React racine (celui qui contient l'ensemble de l'app)
// => crée une structure d'objets imbriqués (DOM virtuel)
const rootReactElement = (
  <Provider store={store}>
    <Router>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <App />
      </PersistGate>
    </Router>
  </Provider>
);

// La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');

// Déclenchement du rendu de React (virtuel) => DOM (page web)
render(rootReactElement, target);

if (NODE_ENV === 'production') {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }
}
