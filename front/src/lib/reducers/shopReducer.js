import {
  // --------------- Category
  CATEGORY_NAMES_SAVE,
  CATEGORY_NAME_ID_URL_SAVE,
  // --------------- Shop last
  SHOPS_LAST_ADD_SAVE,
  SHOPS_LAST_ADD_RESET,
  // --------------- Account shop user
  SHOP_USER_ID_SAVE,
  // --------------- Shops by category
  SHOPS_BY_CATEGORY_SAVE,
  // --------------- Shop by id
  SHOP_ID_URL_SAVE,
  SHOP_SAVE,
  // --------------- Account shop create
  ACCOUNT_CREATE_SHOP_FORM_FIELD,
} from 'src/lib/actions/shopActions';

const initialState = {
  // status serveur
  serverResponseStatus: 0,
  serverErrorseStatus: 0,

  // --------------- Category
  categoryNames: [],
  categoryNamesLoaded: false,
  categoryNameIdUrl: 1,

  // --------------- Shop last
  shopsLastAdd: [],
  shopsLastAddLoaded: false,

  // --------------- Shops by category
  shopsByCategory: [],
  shopsByCategoryLoaded: false,

  // --------------- Shops
  shopIdUrl: '',
  shop: {},
  shopLoaded: false,

  // --------------- Account shop user
  shopUserId: {},
  shopUserIdLoaded: false,

  // --------------- Account shop create
  companyName: '',
  siret: '',
  description: '',
  address: '',
  city: '',
  postalCode: '',
  phoneNumber: '',
  email: '',
  category_id: '',
  marketplace_id: '',
};

function shopReducer(state = initialState, action = {}) {
  switch (action.type) {
    // --------------- Category
    case CATEGORY_NAMES_SAVE:
      return {
        ...state,
        categoryNames: action.categoryNames,
        categoryNamesLoaded: true,
      };

    case CATEGORY_NAME_ID_URL_SAVE:
      return {
        ...state,
        categoryNameIdUrl: action.categoryNameIdUrl,
      };

    // --------------- Shop last
    case SHOPS_LAST_ADD_SAVE:
      return {
        ...state,
        shopsLastAdd: action.shopsLastAdd,
        shopsLastAddLoaded: true,
      };

    case SHOPS_LAST_ADD_RESET:
      return {
        ...state,
        shopsLastAdd: [],
        shopsLastAddLoaded: false,
      };

    // --------------- Shops by category
    case SHOPS_BY_CATEGORY_SAVE:
      return {
        ...state,
        shopsByCategory: action.shopsByCategory,
        shopsByCategoryLoaded: true,
      };

    // --------------- Shop
    case SHOP_ID_URL_SAVE:
      return {
        ...state,
        shopIdUrl: action.shopIdUrl,
      };

    case SHOP_SAVE:
      return {
        ...state,
        shop: action.shop,
        shopLoaded: true,
      };

    // --------------- Account shop user
    case SHOP_USER_ID_SAVE:
      return {
        ...state,
        shopUserId: action.shopUserId,
        shopUserIdLoaded: true,
      };

    // --------------- Account shop create
    case ACCOUNT_CREATE_SHOP_FORM_FIELD:
      return {
        ...state,
        [action.name]: action.newValue,
      };

    default:
      return state;
  }
}

export default shopReducer;
