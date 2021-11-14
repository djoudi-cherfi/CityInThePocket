import axios from 'axios';

import {
  // --------------- Serveur
  serverResponseStatusSave,
  serverErrorseStatusSave,
} from 'src/lib/actions/servActions';

import {
  // --------------- Register
  USER_IDENTITY_CREATE,
  registred,
  // --------------- Login
  LOGIN,
  loginUserSave,
  USER_IDENTITY_GET,
  userIdentityGet,
  userIdentitySave,
  // --------------- Forgot password
  FORGOT_PASSWORD_SENT,
  forgotPasswordSentStatus,
  // --------------- Reset password
  RESET_PASSWORD_INPUT_CREATE,
  resetPasswordSent,
  // --------------- Validation register
  serverValidationInput,
  // --------------- Logout
  LOGOUT,
  logoutUserSave,
} from 'src/lib/actions/authActions';

import {
  // --------------- Account shop user
  SHOP_USER_ID_GET,
  shopUserIdGet,
  shopUserIdSave,
} from 'src/lib/actions/shopActions';

const authMiddleware = (store) => (next) => (action) => {
  // Gestion des requêtes vers l'api back avec axios
  // Dispatch des actions get et save, du status response et erreur

  // On récupére le tiroir du state
  const { auth } = store.getState();
  const { form } = store.getState();

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
    // --------------- Register
    case USER_IDENTITY_CREATE: {
      axios.post(`${API_URL}/user/`, {
        firstName: form.firstName,
        lastName: form.lastName,
        address: form.address,
        postal_code: form.postalCode,
        city: form.city,
        phone_number: form.phoneNumber,
        email: form.email,
        password: form.password,
        confirmPassword: form.confirmPassword,
        conditions_privacy_policy: form.conditionsPrivacyPolicy,
      })
        .then((response) => {
          // console.log('la réponse du serveur USER_IDENTITY_CREATE :', response.status);
          if (response.status) {
            store.dispatch(registred());
          }
        })
        .catch((error) => {
          // console.log('l\'erreur du serveur USER_IDENTITY_CREATE :', error.response.data);
          // store.dispatch(serverValidationInput(error.response.data.message));
          store.dispatch(serverErrorseStatusSave(error.response.status));
        });
      break;
    }

    // --------------- Login
    case LOGIN: {
      instance
        .post('/user/login', {
          email: form.loginEmail,
          password: form.loginPassword,
        })
        .then((response) => {
          // console.log('la réponse du serveur LOGIN :', response);
          store.dispatch(serverResponseStatusSave(response.status));

          const actionLoginUserSave = loginUserSave(
            response.data.userId,
            response.data.logged,
            response.data.verified,
            response.data.xsrfToken,
            response.data.accessTokenExpiresIn,
            response.data.refreshTokenExpiresIn,
          );
          store.dispatch(actionLoginUserSave);
          store.dispatch(userIdentityGet());
        })
        .catch((error) => {
          store.dispatch(serverValidationInput(error.response.data.error));
          store.dispatch(serverErrorseStatusSave(error.response.status));
        });
      break;
    }

    // --------------- Forgot password
    case FORGOT_PASSWORD_SENT: {
      axios.post(`${API_URL}/forget-password`, {
        email: form.forgotPassword,
      })
        .then((response) => {
          // console.log('la réponse du serveur LOGIN :', response);
          if (response.status) {
            store.dispatch(serverResponseStatusSave(response.status));
            store.dispatch(forgotPasswordSentStatus());
          }
        })
        .catch((error) => {
          store.dispatch(serverValidationInput(error.response.data.error));
          store.dispatch(serverErrorseStatusSave(error.response.status));
        });
      break;
    }

    // --------------- Reset password
    case RESET_PASSWORD_INPUT_CREATE: {
      const { resetPassworUserId, resetPassworToken } = auth;

      if (resetPassworUserId && resetPassworToken) {
        axios.post(`${API_URL}/reset-password/${resetPassworUserId}/${resetPassworToken}`, {
          resetPassword: auth.resetPassword,
          resetPasswordConfirm: auth.resetPasswordConfirm,
        })
          .then((response) => {
            // console.log('la réponse du serveur LOGIN :', response);
            store.dispatch(serverResponseStatusSave(response.status));
            store.dispatch(resetPasswordSent());
          })
          .catch((error) => {
            store.dispatch(serverValidationInput(error.response.data.error));
            store.dispatch(serverErrorseStatusSave(error.response.status));
            console.log(error.response.data.error);
          });
      }
      break;
    }

    case USER_IDENTITY_GET: {
      const { userId } = auth;

      if (userId) {
        // const id = userId.toString();
        instance.get(`/user/${userId}`)
          .then((response) => {
            // console.log('la réponse du serveur USER_IDENTITY_GET :', response);

            const actionSaveUserId = userIdentitySave(response.data);
            store.dispatch(actionSaveUserId);
            store.dispatch(shopUserIdGet());
          })
          .catch((error) => {
            console.log("l'erreur du serveur :", error.response.data.error);
          });
      }
      break;
    }

    // --------------- Account shop user
    case SHOP_USER_ID_GET: {
      const userID = auth.userIdentity.id;

      if (userID) {
        const id = userID.toString(10);
        instance.get(`/shop/user/${id}`)
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

    // --------------- Login
    case LOGOUT: {
      axios.get(`${API_URL}/user/logout`)
        .then((response) => {
          // console.log('la réponse du serveur LOGIN :', response);
          store.dispatch(serverResponseStatusSave(response.status));

          const actionLogoutUserSave = logoutUserSave(response.data);
          store.dispatch(actionLogoutUserSave);
        })
        .catch((error) => {
          // console.log('erreur du serveur LOGIN :', error.response.data);
          store.dispatch(serverErrorseStatusSave(error.response.status));
        });
      break;
    }

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};

export default authMiddleware;
