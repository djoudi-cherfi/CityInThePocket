import axios from 'axios';

import { refreshTokenSave, logOut } from 'src/lib/actions/authActions';

export const axiosApi = () => axios.create({
  // Inclure des cookies et des en-têtes d'authentification
  withCredentials: true,

  // Variable d'environnement url serveur
  // eslint-disable-next-line no-undef
  baseURL: API_URL,
});

export const axiosAuth = (accessToken) => axios.create({
  // Inclure des cookies et des en-têtes d'authentification
  withCredentials: true,

  // Variable d'environnement url serveur
  // eslint-disable-next-line no-undef
  baseURL: API_URL,

  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

export const interceptors = (store, instanceAxiosAuth, instanceAxiosApi) => {
  instanceAxiosAuth.interceptors.response.use((response) => response, (error) => {
    // console.log(error);
    if (error.response.data.message === 'Refresh token manquant dans le cookie') {
      store.dispatch(logOut());

      window.location.reload();
    }

    if (error.config.url !== '/refreshToken' && error.response.status === 401) {
      instanceAxiosApi.get('/refreshToken')
        .then((response) => {
          // console.log('la réponse du serveur REFRESH_TOKEN_GET :', response);

          error.config.headers.Authorization = `Bearer ${response.data.accessToken}`;

          instanceAxiosAuth.defaults.headers.common.Authorization = `Bearer ${response.data.accessToken}`;

          const newAccessTokenSave = refreshTokenSave(
            response.data.accessToken,
          );

          store.dispatch(newAccessTokenSave);

          window.location.reload();
        })
        .catch((error) => {
          console.log(error.response.data.error);
        });
      return Promise.reject(error);
    }

    return null;
  });
};
