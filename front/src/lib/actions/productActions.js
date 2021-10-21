// --------------------------------------- //
//   ACTION TYPES                          //
// --------------------------------------- //

// --------------- Serveur
export const SERVER_RESPONSE_STATUS_SAVE = 'SERVER_RESPONSE_STATUS_SAVE';
export const SERVER_ERROR_STATUS_SAVE = 'SERVER_ERROR_STATUS_SAVE';

// --------------- Product last
export const PRODUCT_LAST_ADD_GET = 'PRODUCT_LAST_ADD_GET';
export const PRODUCT_LAST_ADD_SAVE = 'PRODUCT_LAST_ADD_SAVE';

// --------------- Products by shop
// page /slug/sellerprofil/id
export const PRODUCTS_BY_SHOP_GET = 'PRODUCTS_BY_SHOP_GET';
export const PRODUCTS_BY_SHOP_SAVE = 'PRODUCTS_BY_SHOP_SAVE';

// --------------- Product
// page /slug/productdetail/id
export const PRODUCT_ID_URL_SAVE = 'PRODUCT_ID_URL_SAVE';
export const PRODUCT_GET = 'PRODUCT_GET';
export const PRODUCT_SAVE = 'PRODUCT_SAVE';

// --------------- Account shop product create
export const PRODUCT_ACCOUNT_FIELD = 'PRODUCT_ACCOUNT_FIELD';
export const PRODUCT_ACCOUNT_CREATE = 'PRODUCT_ACCOUNT_CREATE';

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

// --------------- Product last
// page /home
export const productgetlast = () => ({
  type: PRODUCT_LAST_ADD_GET,
});

export const productsavelast = (productsLastValue) => ({
  type: PRODUCT_LAST_ADD_SAVE,
  productsLastAdd: productsLastValue,
});

// --------------- Products by shop
// page /slug/sellerprofil/id
export const productsByShopGet = () => ({
  type: PRODUCTS_BY_SHOP_GET,
});

export const productsByShopSave = (productsByShop) => ({
  type: PRODUCTS_BY_SHOP_SAVE,
  productsByShop,
});

// --------------- Product
// page /slug/productdetail/id
export const productIdUrlSave = (productIdUrl) => ({
  type: PRODUCT_ID_URL_SAVE,
  productIdUrl,
});

export const productGet = () => ({
  type: PRODUCT_GET,
});

export const productSave = (product) => ({
  type: PRODUCT_SAVE,
  product,
});

// --------------- Account shop product create
// page /account
export const productAccountField = (newValue, name) => ({
  type: PRODUCT_ACCOUNT_FIELD,
  newValue: newValue,
  name: name,
});

export const productAccountCreate = () => ({
  type: PRODUCT_ACCOUNT_CREATE,
});
