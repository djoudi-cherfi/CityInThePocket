import {
  // --------------- Toggle login register
  TOGGLE_LOGIN,
  TOGGLE_REGISTER,
  // --------------- Register
  REGISTRED,
  // --------------- Login
  LOGIN_USER_SAVE,
  USER_IDENTITY_SAVE,
  // --------------- Refresh token
  REFRESH_TOKEN_SAVE,
  // --------------- Email validation
  VALIDATION_EMAIL_STATUS,
  VALIDATION_EMAIL_STATUS_RESET,
  // --------------- Forgot password
  FORGOT_PASSWORD_SENT_STATUS,
  FORGOT_PASSWORD_SENT_STATUS_RESET,
  // --------------- Reset password
  RESET_PASSWORD_SENT_STATUS,
  RESET_PASSWORD_SENT_STATUS_RESET,
  // --------------- Logout
  LOGOUT_USER_SAVE,
} from 'src/lib/actions/authActions';

const initialState = {
  // --------------- Toggle login register
  toggleLoginRegister: false,

  // --------------- Register
  registred: false,

  // --------------- Login
  userId: null,
  firstname: '',
  verified: false,
  hasShop: false,
  accessToken: null,

  logged: false,

  userIdentity: {},
  userIdentityload: false,

  // --------------- Email validation
  validationEmailStatus: false,
  emailStatus: false,

  // --------------- Forgot password
  forgotPasswordSentStatus: false,

  // --------------- Reset password
  resetPasswordSentStatus: false,

  // --------------- Logout
  respLogout: null,
};

function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    // --------------- Toggle login register
    case TOGGLE_LOGIN:
      return {
        ...state,
        // on inverse la valeur
        toggleLoginRegister: false,
      };

    case TOGGLE_REGISTER:
      return {
        ...state,
        // on inverse la valeur
        toggleLoginRegister: true,
      };

    // --------------- Register
    case REGISTRED:
      return {
        ...state,
        registred: true,
      };

    // --------------- Login
    case LOGIN_USER_SAVE:
      return {
        ...state,
        userId: action.userId,
        firstname: action.firstname,
        logged: action.logged,
        verified: action.verified,
        hasShop: action.hasShop,
        accessToken: action.accessToken,
      };

    // --------------- Refresh token
    case REFRESH_TOKEN_SAVE:
      return {
        ...state,
        accessToken: action.accessToken,
      };

    case USER_IDENTITY_SAVE:
      return {
        ...state,
        userIdentity: action.userIdentity,
        userIdentityload: true,
      };

    // --------------- Email validation
    case VALIDATION_EMAIL_STATUS:
      return {
        ...state,
        validationEmailStatus: true,
      };

    case VALIDATION_EMAIL_STATUS_RESET:
      return {
        ...state,
        validationEmailStatus: false,
      };

    // --------------- Forgot password status
    case FORGOT_PASSWORD_SENT_STATUS:
      return {
        ...state,
        forgotPasswordSentStatus: true,
      };

    case FORGOT_PASSWORD_SENT_STATUS_RESET:
      return {
        ...state,
        forgotPasswordSentStatus: false,
      };

    // --------------- Reset password
    case RESET_PASSWORD_SENT_STATUS:
      return {
        ...state,
        resetPasswordSentStatus: true,
      };

    case RESET_PASSWORD_SENT_STATUS_RESET:
      return {
        ...state,
        resetPasswordSentStatus: false,
      };

    // --------------- Logout
    case LOGOUT_USER_SAVE:
      return {
        ...state,
        respLogout: action.respLogout,
        // --------------- Login
        userId: null,
        firstname: '',
        logged: false,
        verified: false,
        hasShop: false,
        accessToken: null,
        // rest des champs
        loginEmail: '',
        loginPassword: '',
        userIdentity: {},
        userIdentityload: false,
      };

    default:
      return state;
  }
}

export default authReducer;
