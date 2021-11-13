import {
  RESET_FORM,
  FORM_INPUT_FIELD,
  FORM_SELECT_OPTION_UPDATE,
  FORM_SELECT_OPTION_ADD,
  FORM_RADIO_OPTION_UPDATE,
  FORM_RADIO_OPTION_ADD,
  FORM_CHECKBOX_MULTI_OPTION_UPDATE,
  FORM_CHECKBOX_MULTI_OPTION_ADD,
  FORM_CHECKBOX_MULTI_OPTION_REMOVE,
} from 'src/lib/actions/formActions';

const initialState = {
  // ici le state initial

  // --------------- Register
  firstName: '',
  lastName: '',
  address: '',
  postalCode: '',
  city: '',
  phoneNumber: '',
  email: '',
  password: '',
  confirmPassword: '',
  conditionsPrivacyPolicy: true,

  // --------------- Login
  loginEmail: '',
  loginPassword: '',

  // --------------- Update password
  updatePassword: '',
  confirmUpdatePassword: '',

  // --------------- Update email
  updateEmail: '',
  confirmUpdateEmail: '',

  // --------------- Forgot password
  forgotPassword: '',

  // --------------- Reset password
  resetPassword: '',
  confirmResetPassword: '',

  // --------------- Textarea
  description: '',

  // --------------- Selection
  selectOptions: [
    { key: 'select_Option_0', value: 'Options', selected: true },
    { key: 'select_Option_1', value: 'option 1', selected: false },
    { key: 'select_Option_2', value: 'option 2', selected: false },
    { key: 'select_Option_3', value: 'option 3', selected: false },
  ],
  selectOptionsSubmit: [],

  // --------------- Button radio
  radioOptions: [
    { key: 'radio_Option_1', value: 'Option 1', checked: false },
    { key: 'radio_Option_2', value: 'Option 2', checked: false },
    { key: 'radio_Option_3', value: 'Option 3', checked: false },
  ],
  radioOptionsSubmit: [],

  // --------------- Button checkbox
  checkboxMultiOptions: [
    { key: 'checkbox_Option_1', value: 'Option 1', checked: false },
    { key: 'checkbox_Option_2', value: 'Option 2', checked: false },
    { key: 'checkbox_Option_3', value: 'Option 3', checked: false },
  ],
  checkboxMultiOptionsSubmit: [],

  // --------------- Date picker
  date: null,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    // --------------- Form
    case FORM_INPUT_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };

    case FORM_SELECT_OPTION_UPDATE:
      return {
        ...state,
        [action.name]: state[action.name].map((option) => (
          action.value.id === option.key ? {
            ...option,
            selected: action.value.selected,
          } : {
            ...option,
            selected: false,
          }
        )),
      };

    case FORM_SELECT_OPTION_ADD:
      return {
        ...state,
        [action.name]: [action.value],
      };

    case FORM_RADIO_OPTION_UPDATE:
      return {
        ...state,
        [action.name]: state[action.name].map((option) => (
          action.value.id === option.key ? {
            ...option,
            checked: action.value.checked,
          } : {
            ...option,
            checked: false,
          }
        )),
      };

    case FORM_RADIO_OPTION_ADD:
      return {
        ...state,
        [action.name]: [action.value],
      };

    case FORM_CHECKBOX_MULTI_OPTION_UPDATE:
      return {
        ...state,
        [action.name]: state[action.name].map((option) => (
          action.value.id === option.key ? {
            ...option,
            checked: action.value.checked,
          } : option
        )),
      };

    case FORM_CHECKBOX_MULTI_OPTION_ADD:
      return {
        ...state,
        [action.name]: [...state[action.name], action.value],
      };

    case FORM_CHECKBOX_MULTI_OPTION_REMOVE:
      return {
        ...state,
        [action.name]: state[action.name].filter((option) => option.id !== action.value.id),
      };

    case RESET_FORM:
      return {
        ...state,
        firstName: '',
        lastName: '',
        address: '',
        postalCode: '',
        city: '',
        phoneNumber: '',
        email: '',
        password: '',
        confirmPassword: '',
        loginEmail: '',
        loginPassword: '',
        updatePassword: '',
        confirmUpdatePassword: '',
        updateEmail: '',
        confirmUpdateEmail: '',
        forgotPassword: '',
        resetPassword: '',
        confirmResetPassword: '',
        description: '',
        selectOptions: [
          { key: 'select_Option_0', value: 'Options', selected: true },
          { key: 'select_Option_1', value: 'option 1', selected: false },
          { key: 'select_Option_2', value: 'option 2', selected: false },
          { key: 'select_Option_3', value: 'option 3', selected: false },
        ],
        selectOptionsSubmit: [],
        radioOptions: [
          { key: 'radio_Option_1', value: 'Option 1', checked: false },
          { key: 'radio_Option_2', value: 'Option 2', checked: false },
          { key: 'radio_Option_3', value: 'Option 3', checked: false },
        ],
        radioOptionsSubmit: [],
        checkboxMultiOptions: [
          { key: 'checkbox_Option_1', value: 'Option 1', checked: false },
          { key: 'checkbox_Option_2', value: 'Option 2', checked: false },
          { key: 'checkbox_Option_3', value: 'Option 3', checked: false },
        ],
        checkboxMultiOptionsSubmit: [],
        date: null,
      };

    default:
      return state;
  }
}

export default rootReducer;
