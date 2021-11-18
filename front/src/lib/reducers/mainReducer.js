import {
  CITIES_SAVE,
  CITY_NAME_SAVE,
  CITY_NAME_RESET,
  TOGGLE_NAVCATEGORIES_OPEN,
  TOGGLE_NAVCATEGORIES_OPEN_RESET,
  TOGGLE_IDENTITY_OPEN,
  TOGGLE_IDENTITY_OPEN_RESET,
  CURRENT_SLIDE_COUNT,
  TOGGLE_SLIDE_PRODUCT_OPEN,
  TOGGLE_SLIDE_PRODUCT_CLOSED,
  HEADER_HEIGHT_SAVE,
  INFOS_DATA_SAVE,
  INFOS_REFS_SAVE,
  INFOS_NAME_SAVE,
  TOGGLE_SIDEBAR_TG_OPEN,
} from 'src/lib/actions/mainActions';

const initialState = {
  // ici le state initial
  // Header
  headerHeight: 0,

  // Informations
  termsAndConditionsData: [],
  termsAndConditionsDataLoaded: false,
  legalNoticeData: [],
  legalNoticeDataLoaded: false,
  infosRefs: [],
  infosName: '',
  infosNameLoaded: false,
  toggleSidebarTgOpen: false,

  // Cities
  cities: [],
  citiesLoaded: false,

  // City name
  cityName: {},
  cityNameLoaded: false,

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
  toggleSlideProductOpen: false,
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
        infosNameLoaded: true,
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
    case CITIES_SAVE:
      return {
        ...state,
        cities: action.cities,
        citiesLoaded: true,
      };

    case CITY_NAME_SAVE:
      return {
        ...state,
        cityName: action.cityName,
        cityNameLoaded: true,
      };

    case CITY_NAME_RESET:
      return {
        ...state,
        cityName: {},
        cityNameLoaded: false,
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

    // Slider button
    case CURRENT_SLIDE_COUNT:
      return {
        ...state,
        currentSlide: action.currentSlide,
      };

    case TOGGLE_SLIDE_PRODUCT_OPEN:
      return {
        ...state,
        toggleSlideProductOpen: true,
        currentSlide: action.currentSlide,
      };

    case TOGGLE_SLIDE_PRODUCT_CLOSED:
      return {
        ...state,
        toggleSlideProductOpen: false,
      };

    default:
      return state;
  }
}

export default rootReducer;
