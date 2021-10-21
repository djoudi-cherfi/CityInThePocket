// --------------------------------------- //
//   ACTION TYPES                          //
// --------------------------------------- //

// --------------- Serveur
export const SERVER_RESPONSE_STATUS_SAVE = 'SERVER_RESPONSE_STATUS_SAVE';
export const SERVER_ERROR_STATUS_SAVE = 'SERVER_ERROR_STATUS_SAVE';
export const SERVER_VALIDATION_INPUT = 'SERVER_VALIDATION_INPUT';

// --------------- Toggle login register
// page identity/login identity/register
export const TOGGLE_LOGIN = 'TOGGLE_LOGIN';
export const TOGGLE_REGISTER = 'TOGGLE_REGISTER';

// --------------- Register
// page /identity/register
export const USER_IDENTITY_FIELD = 'USER_IDENTITY_FIELD';
export const USER_IDENTITY_CREATE = 'USER_IDENTITY_CREATE';
export const REGISTRED = 'REGISTRED';

// --------------- Login
// page /identity/login
export const LOGIN = 'LOGIN';
export const LOGIN_USER_SAVE = 'LOGIN_USER_SAVE';
export const USER_IDENTITY_GET = 'USER_IDENTITY_GET';
export const USER_IDENTITY_SAVE = 'USER_IDENTITY_SAVE';

// --------------- Forgot password
// page /identity/forgot-password
export const FORGOT_PASSWORD_EMAIL_INPUT_FIELD = 'FORGOT_PASSWORD_EMAIL_INPUT_FIELD';
export const FORGOT_PASSWORD_EMAIL_INPUT_CREATE = 'FORGOT_PASSWORD_EMAIL_INPUT_CREATE';
export const FORGOT_PASSWORD_SENT = 'FORGOT_PASSWORD_SENT';

// --------------- Reset password
// page /identity/reset-password/:id/:slug
export const RESET_PASSWORD_PARAMS = 'RESET_PASSWORD_PARAMS';
export const RESET_PASSWORD_INPUT_FIELD = 'RESET_PASSWORD_INPUT_FIELD';
export const RESET_PASSWORD_INPUT_CREATE = 'RESET_PASSWORD_INPUT_CREATE';
export const RESET_PASSWORD_SENT = 'RESET_PASSWORD_SENT';

// --------------- Register validation
// page /identity/register
export const REGISTER_VALIDATION_INPUT = 'REGISTER_VALIDATION_INPUT';
// prettier-ignore
export const REGISTER_VALIDATION_CONFIRM_PASSWORD_INPUT = 'REGISTER_VALIDATION_CONFIRM_PASSWORD_INPUT';

// --------------- Login validation
// page /identity/login
export const LOGIN_VALIDATION_INPUT = 'LOGIN_VALIDATION_INPUT';

// --------------- Forgot password validation
// page /identity/forgot-password
export const FORGOT_PASSWORD_VALIDATION_INPUT = 'FORGOT_PASSWORD_VALIDATION_INPUT';

// --------------- Reset password validation
// page /identity/reset-password/:id/:slug
export const RESET_PASSWORD_VALIDATION_INPUT = 'RESET_PASSWORD_VALIDATION_INPUT';
// prettier-ignore
export const RESET_PASSWORD_VALIDATION_CONFIRM_PASSWORD_INPUT = 'RESET_PASSWORD_VALIDATION_CONFIRM_PASSWORD_INPUT';

// --------------- Logout
// page /identity/logout
export const LOGOUT = 'LOGOUT';
export const LOGOUT_USER_SAVE = 'LOGOUT_USER_SAVE';

// --------------------------------------- //
//   ACTION CREATORS                       //
// --------------------------------------- //

// --------------- Serveur
export const serverResponseStatusSave = (serverResponseStatus) => ({
  type: SERVER_RESPONSE_STATUS_SAVE,
  serverResponseStatus,
});

export const serverErrorseStatusSave = (serverErrorseStatus) => ({
  type: SERVER_ERROR_STATUS_SAVE,
  serverErrorseStatus,
});

export const serverValidationInput = (serverValidation) => ({
  type: SERVER_VALIDATION_INPUT,
  serverValidation,
});

// --------------- Toggle login register
// page identity/login identity/register
export const toggleLogin = () => ({
  type: TOGGLE_LOGIN,
});

export const toggleRegister = () => ({
  type: TOGGLE_REGISTER,
});

// --------------- Register
// page /identity/register
export const userIdentityField = (value, name) => ({
  type: USER_IDENTITY_FIELD,
  value,
  name,
});

export const userIdentityCreat = () => ({
  type: USER_IDENTITY_CREATE,
});

export const registred = () => ({
  type: REGISTRED,
});

// --------------- Login
// page /identity/login
export const logIn = () => ({
  type: LOGIN,
});

export const loginUserSave = (
  userId,
  logged,
  verified,
  xsrfToken,
  accessTokenExpiresIn,
  refreshTokenExpiresIn,
) => ({
  type: LOGIN_USER_SAVE,
  userId,
  logged,
  verified,
  xsrfToken,
  accessTokenExpiresIn,
  refreshTokenExpiresIn,
});

export const userIdentityGet = () => ({
  type: USER_IDENTITY_GET,
});

export const userIdentitySave = (userIdentity) => ({
  type: USER_IDENTITY_SAVE,
  userIdentity: userIdentity,
});

// --------------- Forgot Password
// page /identity/forgot-password
export const forgotPasswordField = (value, name) => ({
  type: FORGOT_PASSWORD_EMAIL_INPUT_FIELD,
  value,
  name,
});

export const forgotPasswordCreate = () => ({
  type: FORGOT_PASSWORD_EMAIL_INPUT_CREATE,
});

export const forgotPasswordSent = () => ({
  type: FORGOT_PASSWORD_SENT,
});

// --------------- Reset Password
// page /identity/reset-password/:id/:slug
export const resetPasswordParams = (id, slug) => ({
  type: RESET_PASSWORD_PARAMS,
  id,
  slug,
});

export const resetPasswordInputField = (value, name) => ({
  type: RESET_PASSWORD_INPUT_FIELD,
  value,
  name,
});

export const resetPasswordInputCreate = () => ({
  type: RESET_PASSWORD_INPUT_CREATE,
});

export const resetPasswordSent = () => ({
  type: RESET_PASSWORD_SENT,
});

// --------------- Register validation
// page /identity/login
export const registerValidationInput = (registerValidation) => ({
  type: REGISTER_VALIDATION_INPUT,
  registerValidation,
});

export const registerValidationConfirmPasswordInput = (registerValidationConfirmPassword) => ({
  type: REGISTER_VALIDATION_CONFIRM_PASSWORD_INPUT,
  registerValidationConfirmPassword,
});

// --------------- Login validation
// page /identity/login
export const loginValidationInput = (loginValidation) => ({
  type: LOGIN_VALIDATION_INPUT,
  loginValidation,
});

// --------------- Forgot password validation
// page /identity/login
export const forgotPasswordValidationInput = (forgotPasswordValidation) => ({
  type: FORGOT_PASSWORD_VALIDATION_INPUT,
  forgotPasswordValidation,
});

// --------------- Reset password validation
// page /identity/reset-password/:id/:slug
export const resetPasswordValidationInput = (resetPasswordValidation) => ({
  type: RESET_PASSWORD_VALIDATION_INPUT,
  resetPasswordValidation,
});

export const resetPasswordValidationConfirmPasswordInput = (
  resetPasswordValidationConfirmPassword,
) => ({
  type: RESET_PASSWORD_VALIDATION_CONFIRM_PASSWORD_INPUT,
  resetPasswordValidationConfirmPassword,
});

// --------------- Logout
// page /identity/logout
export const logOut = () => ({
  type: LOGOUT,
});

export const logoutUserSave = (respLogout) => ({
  type: LOGOUT_USER_SAVE,
  respLogout,
});
