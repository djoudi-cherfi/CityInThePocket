import {
  // --------------- Serveur
  SERVER_RESPONSE_STATUS_SAVE,
  SERVER_ERROR_STATUS_SAVE,
  SERVER_VALIDATION_INPUT,
} from 'src/lib/actions/servActions';

const initialState = {
  // --------------- Serveur
  serverResponseStatus: 0,
  serverErrorseStatus: 0,

  serverRegisterValidation: '',
  serverLoginValidation: '',
  serverForgotPasswordValidation: '',
  serverResetPasswordValidation: '',
};

function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    // --------------- Serveur
    case SERVER_RESPONSE_STATUS_SAVE:
      return {
        ...state,
        serverResponseStatus: action.serverResponseStatus,
      };

    case SERVER_ERROR_STATUS_SAVE:
      return {
        ...state,
        serverErrorseStatus: action.serverErrorseStatus,
      };

    case SERVER_VALIDATION_INPUT:
      return {
        ...state,
        serverValidation: action.serverValidation,
      };

    default:
      return state;
  }
}

export default authReducer;
