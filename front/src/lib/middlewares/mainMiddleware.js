import axios from 'axios';

import {
  // --------------- City
  CITIES_GET,
  citiesSave,
  CITY_NAME_GET,
  cityNameSave,
} from 'src/lib/actions/mainActions';

const authMiddleware = (store) => (next) => (action) => {
  // Gestion des requêtes vers l'api back avec axios
  // Dispatch des actions get et save, du status response et erreur

  switch (action.type) {
    case CITIES_GET: {
      axios.get(`${API_URL}/marketplace`)
        .then((response) => {
          // console.log('la réponse du serveur USER_IDENTITY_GET :', response);
          store.dispatch(citiesSave(response.data));
        })
        .catch((error) => {
          console.log("l'erreur du serveur :", error.response.data.error);
        });
      break;
    }

    case CITY_NAME_GET: {
      if (action.id) {
        axios.get(`${API_URL}/marketplace/${action.id}`)
          .then((response) => {
            // console.log('la réponse du serveur USER_IDENTITY_GET :', response);
            store.dispatch(cityNameSave(response.data));
          })
          .catch((error) => {
            console.log("l'erreur du serveur :", error.response.data.error);
          });
      }
      break;
    }

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};

export default authMiddleware;
