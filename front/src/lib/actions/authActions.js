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
export const FORGOT_PASSWORD_SENT = 'FORGOT_PASSWORD_SENT';
export const FORGOT_PASSWORD_SENT_STATUS_RESET = 'FORGOT_PASSWORD_SENT_STATUS_RESET';
export const FORGOT_PASSWORD_SENT_STATUS = 'FORGOT_PASSWORD_SENT_STATUS';

// --------------- Reset password
// page /identity/reset-password/:id/:slug
export const RESET_PASSWORD_SENT = 'RESET_PASSWORD_SENT';
export const RESET_PASSWORD_SENT_STATUS_RESET = 'RESET_PASSWORD_SENT_STATUS_RESET';
export const RESET_PASSWORD_SENT_STATUS = 'RESET_PASSWORD_SENT_STATUS';

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
export const forgotPasswordSent = () => ({
  type: FORGOT_PASSWORD_SENT,
});

export const forgotPasswordSentStatusReset = () => ({
  type: FORGOT_PASSWORD_SENT_STATUS_RESET,
});

export const forgotPasswordSentStatus = () => ({
  type: FORGOT_PASSWORD_SENT_STATUS,
});

// --------------- Reset Password
// page /identity/reset-password/:id/:slug
export const resetPasswordSent = (id, slug) => ({
  type: RESET_PASSWORD_SENT,
  id,
  slug,
});

export const resetPasswordSentStatusReset = () => ({
  type: RESET_PASSWORD_SENT_STATUS_RESET,
});

export const resetPasswordSentStatus = () => ({
  type: RESET_PASSWORD_SENT_STATUS,
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
