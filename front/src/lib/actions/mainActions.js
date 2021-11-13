// --------------------------------------- //
//   ACTION TYPES                          //
// --------------------------------------- //

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
export const TOGGLE_SLIDE_PRODUCT_OPEN = 'TOGGLE_SLIDE_PRODUCT_OPEN';
export const TOGGLE_SLIDE_PRODUCT_CLOSED = 'TOGGLE_SLIDE_PRODUCT_CLOSED';

// --------------------------------------- //
//   ACTION CREATORS                       //
// --------------------------------------- //

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

export const toggleSlideProductOpen = (currentSlide) => ({
  type: TOGGLE_SLIDE_PRODUCT_OPEN,
  currentSlide,
});

export const toggleSlideProductClosed = () => ({
  type: TOGGLE_SLIDE_PRODUCT_CLOSED,
});
