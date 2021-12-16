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
  // --------------- Email validation
  VALIDATION_EMAIL_SENT,
  validationEmailStatus,
  // --------------- Forgot password
  FORGOT_PASSWORD_SENT,
  forgotPasswordSentStatus,
  // --------------- Reset password
  RESET_PASSWORD_SENT,
  resetPasswordSentStatus,
  // --------------- Validation register
  serverValidationInput,
  // --------------- Logout
  LOGOUT,
  logoutUserSave,
} from 'src/lib/actions/authActions';

import {
  // --------------- Account shop user
  shopUserIdGet,
} from 'src/lib/actions/shopActions';

import { axiosApi } from 'src/lib/axios/axiosConfig';

const authMiddleware = (store) => (next) => (action) => {
  // Gestion des requêtes vers l'api back avec axios
  // Dispatch des actions get et save, du status response et erreur

  // On récupére le tiroir du state
  const { form } = store.getState();

  const instanceApi = axiosApi();

  switch (action.type) {
    // --------------- Register
    case USER_IDENTITY_CREATE: {
      instanceApi.post('/user/', {
        firstName: form.firstName,
        lastName: form.lastName,
        address: form.address,
        postal_code: form.postalCode,
        city: form.city,
        phone_number: form.phoneNumber,
        email: form.email,
        password: form.password,
        confirmPassword: form.confirmPassword,
        policy_agree: form.conditionsPrivacyPolicy,
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
      console.log(form.loginEmail, form.loginPassword);
      instanceApi
        .post('/login', {
          email: form.loginEmail,
          password: form.loginPassword,
        })
        .then((response) => {
          // console.log('la réponse du serveur LOGIN :', response);
          // store.dispatch(serverResponseStatusSave(response.status));

          const actionLoginUserSave = loginUserSave(
            response.data.userId,
            response.data.firstname,
            response.data.logged,
            response.data.verified,
            response.data.hasShop,
            response.data.accessToken,
          );
          store.dispatch(actionLoginUserSave);

          if (response.data.hasShop === true) {
            store.dispatch(shopUserIdGet());
          }
        })
        .catch((error) => {
          store.dispatch(serverValidationInput(error.response.data.error));
          store.dispatch(serverErrorseStatusSave(error.response.status));
        });
      break;
    }

    // --------------- Email validation
    case VALIDATION_EMAIL_SENT: {
      if (action.id && action.slug) {
        instanceApi.get(`/email-validation/${action.id}/${action.slug}`)
          .then((response) => {
            // console.log('la réponse du serveur VALIDATION_EMAIL_SENT :', response);
            if (response.status === 200) {
              store.dispatch(validationEmailStatus());
            }
          })
          .catch((error) => {
            store.dispatch(serverValidationInput(error.response.data.error));
            store.dispatch(serverErrorseStatusSave(error.response.status));
          });
      }
      break;
    }

    // --------------- Forgot password
    case FORGOT_PASSWORD_SENT: {
      instanceApi.post('/forget-password', {
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
    case RESET_PASSWORD_SENT: {
      if (action.id && action.slug) {
        instanceApi.post(`/reset-password/${action.id}/${action.slug}`, {
          password: form.resetPassword,
          confirmPassword: form.confirmResetPassword,
        })
          .then((response) => {
            // console.log('la réponse du serveur LOGIN :', response);
            store.dispatch(serverResponseStatusSave(response.status));
            store.dispatch(resetPasswordSentStatus());
          })
          .catch((error) => {
            store.dispatch(serverValidationInput(error.response.data.error));
            store.dispatch(serverErrorseStatusSave(error.response.status));
            console.log(error.response.data.error);
          });
      }
      break;
    }

    // --------------- Login
    case LOGOUT: {
      instanceApi.get('/logout')
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
