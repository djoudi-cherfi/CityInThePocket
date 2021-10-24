import {
  CITY_NAME,
  CITY_NAME_RESET,
  TOGGLE_NAVCATEGORIES_OPEN,
  TOGGLE_NAVCATEGORIES_OPEN_RESET,
  TOGGLE_IDENTITY_OPEN,
  TOGGLE_IDENTITY_OPEN_RESET,
  CURRENT_SLIDE_COUNT,
  TOGGLE_SLIDE_OPEN,
  HEADER_HEIGHT_SAVE,
  INFOS_DATA_SAVE,
  INFOS_REFS_SAVE,
  INFOS_NAME_SAVE,
  TOGGLE_SIDEBAR_TG_OPEN,
  FORM_INPUT_FIELD,
  FORM_SELECT_OPTION_UPDATE,
  FORM_SELECT_OPTION_ADD,
  FORM_RADIO_OPTION_UPDATE,
  FORM_RADIO_OPTION_ADD,
  FORM_CHECKBOX_MULTI_OPTION_UPDATE,
  FORM_CHECKBOX_MULTI_OPTION_ADD,
  FORM_CHECKBOX_MULTI_OPTION_REMOVE,
} from 'src/lib/actions/mainActions';

const initialState = {
  // ici le state initial
  // Form
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

  // Header
  headerHeight: 0,

  // Informations
  termsAndConditionsData: [],
  termsAndConditionsDataLoaded: false,
  legalNoticeData: [],
  legalNoticeDataLoaded: false,
  infosRefs: [],
  infosName: 'termsAndConditions',
  toggleSidebarTgOpen: false,

  // City name
  cityName: 'paris',

  // Cities
  cities: [
    {
      id: 1,
      name: 'Paris',
    },
    {
      id: 2,
      name: 'Lyon',
    },
  ],

  // futurcCities
  futurcCities: [
    {
      id: 1,
      name: 'Bordeaux',
    },
    {
      id: 2,
      name: 'Lille',
    },
    {
      id: 3,
      name: 'Marseille',
    },
    {
      id: 4,
      name: 'Montpellier',
    },
    {
      id: 5,
      name: 'Nice',
    },
  ],
  toggleNavCategoryOpen: false,
  toggleIdentityOpen: false,
  currentSlide: 0,
  toggleSlideOpen: false,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case HEADER_HEIGHT_SAVE:
      return {
        ...state,
        headerHeight: action.headerHeight,
      };

    // Informations
    case INFOS_DATA_SAVE:
      return {
        ...state,
        termsAndConditionsData: action.termsAndConditionsData,
        termsAndConditionsDataLoaded: true,
        legalNoticeData: action.legalNoticeData,
        legalNoticeDataLoaded: true,
      };

    case INFOS_REFS_SAVE:
      return {
        ...state,
        infosRefs: action.infosRefs,
      };

    case INFOS_NAME_SAVE:
      return {
        ...state,
        infosName: action.infosName,
      };

    case TOGGLE_SIDEBAR_TG_OPEN:
      return {
        ...state,
        // on inverse la valeur
        toggleSidebarTgOpen: !state.toggleSidebarTgOpen,
        toggleIdentityOpen: false,
        toggleNavCategoryOpen: false,
      };

    // City name
    case CITY_NAME:
      return {
        ...state,
        cityName: action.cityName,
      };

    case CITY_NAME_RESET:
      return {
        ...state,
        cityName: '',
      };

    case TOGGLE_NAVCATEGORIES_OPEN:
      return {
        ...state,
        // on inverse la valeur
        toggleNavCategoryOpen: !state.toggleNavCategoryOpen,
        toggleIdentityOpen: false,
        toggleSidebarTgOpen: false,
      };

    case TOGGLE_NAVCATEGORIES_OPEN_RESET:
      return {
        ...state,
        // on inverse la valeur
        toggleNavCategoryOpen: false,
      };

    case TOGGLE_IDENTITY_OPEN:
      return {
        ...state,
        // on inverse la valeur
        toggleIdentityOpen: !state.toggleIdentityOpen,
        toggleNavCategoryOpen: false,
        toggleSidebarTgOpen: false,
      };

    case TOGGLE_IDENTITY_OPEN_RESET:
      return {
        ...state,
        // on inverse la valeur
        toggleIdentityOpen: false,
      };

    case CURRENT_SLIDE_COUNT:
      return {
        ...state,
        currentSlide: action.currentSlide,
      };

    case TOGGLE_SLIDE_OPEN:
      return {
        ...state,
        toggleSlideOpen: !state.toggleSlideOpen,
        currentSlide: action.currentSlide,
      };

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

    default:
      return state;
  }
}

export default rootReducer;
