// --------------------------------------- //
//   ACTION TYPES                          //
// --------------------------------------- //

// --------------- Serveur
export const SERVER_RESPONSE_STATUS_SAVE = 'SERVER_RESPONSE_STATUS_SAVE';
export const SERVER_ERROR_STATUS_SAVE = 'SERVER_ERROR_STATUS_SAVE';
export const SERVER_VALIDATION_INPUT = 'SERVER_VALIDATION_INPUT';

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
