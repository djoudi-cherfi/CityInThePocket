import { connect } from 'react-redux';

import { productsByShopGet } from 'src/lib/actions/productActions';

import { shopIdUrlSave, shopGet } from 'src/lib/actions/shopActions';

// on importe le composant de présentation
import SellerProfil from 'src/components/pages/City/SellerProfil';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  cityName: state.main.cityName,
  shopIdUrl: state.shops.shopIdUrl,
  shopLoaded: state.shops.shopLoaded,
  shop: state.shops.shop,
  productsByShopLoaded: state.products.productsByShopLoaded,
  productsByShop: state.products.productsByShop,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (modifier le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  HandleShopIdUrl: (value) => {
    const action = shopIdUrlSave(value);
    dispatch(action);
  },

  loadShop: () => {
    dispatch(shopGet());
  },

  loadProductsByShop: () => {
    dispatch(productsByShopGet());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(SellerProfil);
