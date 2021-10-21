import {
  // --------------- Product last
  PRODUCT_LAST_ADD_SAVE,
  // --------------- Products by shop
  PRODUCTS_BY_SHOP_SAVE,
  // --------------- Product
  PRODUCT_ID_URL_SAVE,
  PRODUCT_SAVE,
  // --------------- Account shop product create
  PRODUCT_ACCOUNT_FIELD,
} from 'src/lib/actions/productActions';

const initialState = {
  // --------------- Serveur
  serverResponseStatus: 0,

  // --------------- Product last
  productsLastAdd: [],
  productsLastAddLoaded: false,

  // --------------- Products by shop
  productsByShop: [],
  productsByShopLoaded: false,

  // --------------- Product
  productIdUrl: '1',
  product: {},
  productLoaded: false,
  // TODO:! Temporaire
  slidesData: [
    {
      id: 1,
      image: '/photo-1611373771444-f2f256643feb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2854&q=80',
    },
    {
      id: 2,
      image: '/photo-1474633677830-f3973595d573?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80',
    },
    {
      id: 3,
      image: '/photo-1591021282297-38ef871e9a8e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2080&q=80',
    },
    {
      id: 4,
      image: '/photo-1436397543931-01c4a5162bdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1919&q=80',
    },
    {
      id: 5,
      image: '/photo-1585159989035-4d3b4b4a4b64?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2080&q=80',
    },
  ],

  // --------------- Account shop product create
  name: '',
  price: '',
  description: '',
};

function productReducer(state = initialState, action) {
  switch (action.type) {
    // --------------- Product last
    case PRODUCT_LAST_ADD_SAVE:
      return {
        ...state,
        productsLastAdd: action.productsLastAdd,
        productsLastAddLoaded: true,
      };

    // --------------- Products by shop
    case PRODUCTS_BY_SHOP_SAVE:
      return {
        ...state,
        productsByShop: action.productsByShop,
        productsByShopLoaded: true,
      };

    // --------------- Product
    case PRODUCT_ID_URL_SAVE:
      return {
        ...state,
        productIdUrl: action.productIdUrl,
      };

    case PRODUCT_SAVE:
      return {
        ...state,
        product: action.product,
        productLoaded: true,
      };

    // --------------- Account shop product create
    case PRODUCT_ACCOUNT_FIELD:
      return {
        ...state,
        [action.name]: action.newValue,
      };

    default:
      return state;
  }
}

export default productReducer;
