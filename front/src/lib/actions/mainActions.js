// === action types
// Header
export const HEADER_HEIGHT_SAVE = 'HEADER_HEIGHT_SAVE';

// Informations
export const INFOS_DATA_SAVE = 'INFOS_DATA_SAVE';
export const INFOS_REFS_SAVE = 'INFOS_REFS_SAVE';
export const INFOS_NAME_SAVE = 'INFOS_NAME_SAVE';
export const TOGGLE_SIDEBAR_TG_OPEN = 'TOGGLE_SIDEBAR_TG_OPEN';

// City name
export const CITY_NAME = 'CITY_NAME';
export const CITY_NAME_RESET = 'CITY_NAME_RESET';

// Menu Category
export const TOGGLE_NAVCATEGORIES_OPEN = 'TOGGLE_NAVCATEGORIES_OPEN';
export const TOGGLE_NAVCATEGORIES_OPEN_RESET = 'TOGGLE_NAVCATEGORIES_OPEN_RESET';

// Button Identity
export const TOGGLE_IDENTITY_OPEN = 'TOGGLE_IDENTITY_OPEN';
export const TOGGLE_IDENTITY_OPEN_RESET = 'TOGGLE_IDENTITY_OPEN_RESET';

// Slider button
export const CURRENT_SLIDE_COUNT = 'CURRENT_SLIDE_COUNT';
export const TOGGLE_SLIDE_OPEN = 'TOGGLE_SLIDE_OPEN';

// Form
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

// === action creators
// Header
export const headerHeightSave = (headerHeight) => ({
  type: HEADER_HEIGHT_SAVE,
  headerHeight,
});

// Informations
export const infosDataSave = (termsAndConditionsData, legalNoticeData) => ({
  type: INFOS_DATA_SAVE,
  termsAndConditionsData,
  legalNoticeData,
});

export const infosRefsSave = (infosRefs) => ({
  type: INFOS_REFS_SAVE,
  infosRefs,
});

export const infosNameSave = (infosName) => ({
  type: INFOS_NAME_SAVE,
  infosName,
});

export const toggleSidebarTgOpen = () => ({
  type: TOGGLE_SIDEBAR_TG_OPEN,
});

// City name
export const cityNameSave = (cityName) => ({
  type: CITY_NAME,
  cityName,
});

export const cityNameReset = () => ({
  type: CITY_NAME_RESET,
});

// Menu nave category et identity
export const toggleNavCategoryOpen = () => ({
  type: TOGGLE_NAVCATEGORIES_OPEN,
});

export const toggleNavCategoryOpenReset = () => ({
  type: TOGGLE_NAVCATEGORIES_OPEN_RESET,
});

export const toggleIdentityOpen = () => ({
  type: TOGGLE_IDENTITY_OPEN,
});

export const toggleIdentityOpenReset = () => ({
  type: TOGGLE_IDENTITY_OPEN_RESET,
});

// Slider button
export const currentSlideCount = (currentSlide) => ({
  type: CURRENT_SLIDE_COUNT,
  currentSlide,
});

export const toggleSlideOpen = (currentSlide) => ({
  type: TOGGLE_SLIDE_OPEN,
  currentSlide,
});

// Form
// Input
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
