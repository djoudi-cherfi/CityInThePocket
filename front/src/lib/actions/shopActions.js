// --------------------------------------- //
//   ACTION TYPES                          //
// --------------------------------------- //

// --------------- Serveur
export const SERVER_RESPONSE_STATUS_SAVE = 'SERVER_RESPONSE_STATUS_SAVE';
export const SERVER_ERROR_STATUS_SAVE = 'SERVER_ERROR_STATUS_SAVE';

// --------------- Category
// page /home
export const CATEGORY_NAME_ID_URL_SAVE = 'CATEGORY_NAME_ID_URL_SAVE';
export const CATEGORY_NAMES_GET = 'CATEGORY_NAMES_GET';
export const CATEGORY_NAMES_SAVE = 'CATEGORY_NAMES_SAVE';

// --------------- Shop last
// page => /home
export const SHOPS_LAST_ADD_GET = 'SHOPS_LAST_ADD_GET';
export const SHOPS_LAST_ADD_SAVE = 'SHOPS_LAST_ADD_SAVE';
export const SHOPS_LAST_ADD_RESET = 'SHOPS_LAST_ADD_RESET';

// --------------- Shops by category
// page /category/musique, ameublement, fait-main, pret-a-porter
export const SHOPS_BY_CATEGORY_GET = 'SHOPS_BY_CATEGORY_GET';
export const SHOPS_BY_CATEGORY_SAVE = 'SHOPS_BY_CATEGORY_SAVE';

// --------------- Shop
// page /slug/sellerprofil/id
export const SHOP_ID_URL_SAVE = 'SHOP_ID_URL_SAVE';
export const SHOP_GET = 'SHOP_GET';
export const SHOP_SAVE = 'SHOP_SAVE';

// --------------- Account shop user
// page /account
export const SHOP_USER_ID_GET = 'SHOP_USER_ID_GET';
export const SHOP_USER_ID_SAVE = 'SHOP_USER_ID_SAVE';

// --------------- Account shop create
// page /account
export const ACCOUNT_CREATE_SHOP_FORM_FIELD = 'ACCOUNT_CREATE_SHOP_FORM_FIELD';
export const ACCOUNT_CREATE_SHOP_POST = 'ACCOUNT_CREATE_SHOP_POST';

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

// --------------- Category
// page /home
export const categoryNameIdUrlSave = (categoryNameIdUrl) => ({
  type: CATEGORY_NAME_ID_URL_SAVE,
  categoryNameIdUrl,
});

export const categoryNamesGet = () => ({
  type: CATEGORY_NAMES_GET,
});

export const categoryNamesSave = (categoryNames) => ({
  type: CATEGORY_NAMES_SAVE,
  categoryNames,
});

// --------------- Shop last
// page /home
export const shopsLastAddGet = () => ({
  type: SHOPS_LAST_ADD_GET,
});

export const shopsLastAddSave = (shopsLastAdd) => ({
  type: SHOPS_LAST_ADD_SAVE,
  shopsLastAdd,
});

export const shopsLastAddReset = () => ({
  type: SHOPS_LAST_ADD_RESET,
});

// --------------- Shops by category
// page /category/musique, ameublement, fait-main, pret-a-porter
export const shopsByCategoryGet = () => ({
  type: SHOPS_BY_CATEGORY_GET,
});

export const shopsByCategorySave = (shopsByCategory) => ({
  type: SHOPS_BY_CATEGORY_SAVE,
  shopsByCategory,
});

// --------------- Shop
// page /slug/sellerprofil/id
export const shopIdUrlSave = (shopIdUrl) => ({
  type: SHOP_ID_URL_SAVE,
  shopIdUrl,
});

export const shopGet = () => ({
  type: SHOP_GET,
});

export const shopSave = (shop) => ({
  type: SHOP_SAVE,
  shop,
});

// --------------- Account shop user
// page /account
export const shopUserIdGet = () => ({
  type: SHOP_USER_ID_GET,
});

export const shopUserIdSave = (shopUserId) => ({
  type: SHOP_USER_ID_SAVE,
  shopUserId,
});

// --------------- Account shop create
// page /account
export const accountCreateShopFormField = (newValue, name) => ({
  type: ACCOUNT_CREATE_SHOP_FORM_FIELD,
  newValue,
  name,
});

export const accountCreateShopPost = () => ({
  type: ACCOUNT_CREATE_SHOP_POST,
});
