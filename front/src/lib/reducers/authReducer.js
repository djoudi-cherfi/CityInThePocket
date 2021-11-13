import {
  // --------------- Toggle login register
  TOGGLE_LOGIN,
  TOGGLE_REGISTER,
  // --------------- Register
  REGISTRED,
  // --------------- Login
  LOGIN_USER_SAVE,
  USER_IDENTITY_SAVE,
  // --------------- Forgot password
  FORGOT_PASSWORD_SENT,
  // --------------- Reset password
  RESET_PASSWORD_PARAMS,
  RESET_PASSWORD_SENT,
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
  verified: false,
  xsrfToken: null,
  accessTokenExpiresIn: null,
  refreshTokenExpiresIn: null,

  logged: false,

  userIdentity: {},
  userIdentityload: false,

  // --------------- Forgot password
  forgotPasswordSent: false,

  // --------------- Reset password
  resetPassworUserId: '',
  resetPassworToken: '',
  resetPasswordSent: false,

  // --------------- Logout
  respLogout: null,
};

function authReducer(state = initialState, action) {
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
        logged: action.logged,
        verified: action.verified,
        xsrfToken: action.xsrfToken,
        accessTokenExpiresIn: action.accessTokenExpiresIn,
        refreshTokenExpiresIn: action.refreshTokenExpiresIn,
      };

    case USER_IDENTITY_SAVE:
      return {
        ...state,
        userIdentity: action.userIdentity,
        userIdentityload: true,
      };

    // --------------- Forgot password
    case FORGOT_PASSWORD_SENT:
      return {
        ...state,
        forgotPasswordSent: true,
        forgotPassword: '',
        forgotPasswordValidation: [],
      };

    // --------------- Reset password
    case RESET_PASSWORD_PARAMS:
      return {
        ...state,
        resetPassworUserId: action.id,
        resetPassworToken: action.slug,
      };

    case RESET_PASSWORD_SENT:
      return {
        ...state,
        resetPasswordSent: true,
        resetPassworUserId: '',
        resetPassworToken: '',
        resetPassword: '',
        resetPasswordConfirm: '',
        resetPasswordValidation: [],
        resetPasswordValidationConfirmPassword: false,
      };

    // --------------- Logout
    case LOGOUT_USER_SAVE:
      return {
        ...state,
        respLogout: action.respLogout,
        // --------------- Login
        userId: null,
        logged: false,
        verified: false,
        xsrfToken: null,
        accessTokenExpiresIn: null,
        refreshTokenExpiresIn: null,
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
