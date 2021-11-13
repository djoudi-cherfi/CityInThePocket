// --------------------------------------- //
//   ACTION TYPES                          //
// --------------------------------------- //
// Reset state initialValues
export const RESET_FORM = 'RESET_FORM';

// Input
export const FORM_INPUT_FIELD = 'FORM_INPUT_FIELD';

// Select
export const FORM_SELECT_OPTION_UPDATE = 'FORM_SELECT_OPTION_UPDATE';
export const FORM_SELECT_OPTION_ADD = 'FORM_SELECT_OPTION_ADD';

// Radio button
export const FORM_RADIO_OPTION_UPDATE = 'FORM_RADIO_OPTION_UPDATE';
export const FORM_RADIO_OPTION_ADD = 'FORM_RADIO_OPTION_ADD';

// Checkbox
export const FORM_CHECKBOX_MULTI_OPTION_UPDATE = 'FORM_CHECKBOX_MULTI_OPTION_UPDATE';
export const FORM_CHECKBOX_MULTI_OPTION_ADD = 'FORM_CHECKBOX_MULTI_OPTION_ADD';
export const FORM_CHECKBOX_MULTI_OPTION_REMOVE = 'FORM_CHECKBOX_MULTI_OPTION_REMOVE';

// --------------------------------------- //
//   ACTION CREATORS                       //
// --------------------------------------- //
// Input
export const resetForm = () => ({
  type: RESET_FORM,
});

export const formInputField = (value, name) => ({
  type: FORM_INPUT_FIELD,
  value,
  name,
});

// Select
export const formSelectOptionUpdate = (value, name) => ({
  type: FORM_SELECT_OPTION_UPDATE,
  value,
  name,
});

export const formSelectOptionAdd = (value, name) => ({
  type: FORM_SELECT_OPTION_ADD,
  value,
  name,
});

// Radio button
export const formRadioOptionUpdate = (value, name) => ({
  type: FORM_RADIO_OPTION_UPDATE,
  value,
  name,
});

export const formRadioOptionAdd = (value, name) => ({
  type: FORM_RADIO_OPTION_ADD,
  value,
  name,
});

// Checkbox
export const formCheckboxMultiOptionUpdate = (value, name) => ({
  type: FORM_CHECKBOX_MULTI_OPTION_UPDATE,
  value,
  name,
});

export const formCheckboxMultiOptionAdd = (value, name) => ({
  type: FORM_CHECKBOX_MULTI_OPTION_ADD,
  value,
  name,
});

export const formCheckboxMultiOptionRemove = (value, name) => ({
  type: FORM_CHECKBOX_MULTI_OPTION_REMOVE,
  value,
  name,
});
