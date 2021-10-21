import {
  // --------------- Toggle login register
  TOGGLE_LOGIN,
  TOGGLE_REGISTER,
  // --------------- Register
  USER_IDENTITY_FIELD,
  REGISTRED,
  // --------------- Login
  LOGIN_USER_SAVE,
  USER_IDENTITY_SAVE,
  // --------------- Forgot password
  FORGOT_PASSWORD_EMAIL_INPUT_FIELD,
  FORGOT_PASSWORD_SENT,
  // --------------- Reset password
  RESET_PASSWORD_PARAMS,
  RESET_PASSWORD_INPUT_FIELD,
  RESET_PASSWORD_SENT,
  // --------------- Register validation
  REGISTER_VALIDATION_INPUT,
  REGISTER_VALIDATION_CONFIRM_PASSWORD_INPUT,
  // --------------- Login validation
  LOGIN_VALIDATION_INPUT,
  // --------------- Forgot password validation
  FORGOT_PASSWORD_VALIDATION_INPUT,
  // --------------- Reset password validation
  RESET_PASSWORD_VALIDATION_INPUT,
  RESET_PASSWORD_VALIDATION_CONFIRM_PASSWORD_INPUT,
  // --------------- Logout
  LOGOUT_USER_SAVE,
} from 'src/lib/actions/authActions';

const initialState = {
  // --------------- Toggle login register
  toggleLoginRegister: false,

  // --------------- Register
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  address: '',
  city: '',
  postalCode: '',
  phoneNumber: '',
  conditionsPrivacyPolicy: true,

  registerValidation: [],
  registerValidationConfirmPassword: false,
  registred: false,

  // --------------- Login
  loginEmail: '',
  loginPassword: '',
  userId: null,
  verified: false,
  xsrfToken: null,
  accessTokenExpiresIn: null,
  refreshTokenExpiresIn: null,

  loginValidation: [],
  logged: false,

  userIdentity: {},
  userIdentityload: false,

  // --------------- Forgot password
  forgotPassword: '',
  forgotPasswordValidation: [],
  forgotPasswordSent: false,

  // --------------- Reset password
  resetPassworUserId: '',
  resetPassworToken: '',
  resetPassword: '',
  resetPasswordConfirm: '',

  resetPasswordValidation: [],
  resetPasswordValidationConfirmPassword: false,
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
    case USER_IDENTITY_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };

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
    case FORGOT_PASSWORD_EMAIL_INPUT_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };

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

    case RESET_PASSWORD_INPUT_FIELD:
      return {
        ...state,
        [action.name]: action.value,
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

    // --------------- Validation register
    case REGISTER_VALIDATION_INPUT:
      return {
        ...state,
        registerValidation: action.registerValidation,
      };

    case REGISTER_VALIDATION_CONFIRM_PASSWORD_INPUT:
      return {
        ...state,
        registerValidationConfirmPassword: action.registerValidationConfirmPassword,
      };

    // --------------- Validation login
    case LOGIN_VALIDATION_INPUT:
      return {
        ...state,
        loginValidation: action.loginValidation,
      };

    // --------------- Forgot password validation
    case FORGOT_PASSWORD_VALIDATION_INPUT:
      return {
        ...state,
        forgotPasswordValidation: action.forgotPasswordValidation,
      };

    // --------------- Reset password validation
    case RESET_PASSWORD_VALIDATION_INPUT:
      return {
        ...state,
        resetPasswordValidation: action.resetPasswordValidation,
      };

    case RESET_PASSWORD_VALIDATION_CONFIRM_PASSWORD_INPUT:
      return {
        ...state,
        resetPasswordValidationConfirmPassword: action.resetPasswordValidationConfirmPassword,
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
