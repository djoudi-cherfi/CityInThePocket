import { connect } from 'react-redux';

import { productIdUrlSave, productGet } from 'src/lib/actions/productActions';

import { currentSlideCount, toggleSlideProductOpen } from 'src/lib/actions/mainActions';

// on importe le composant de présentation
import Product from 'src/components/pages/City/Product';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  cityName: state.main.cityName,
  productIdUrl: state.products.productIdUrl,
  productLoaded: state.products.productLoaded,
  product: state.products.product,
  slidesData: state.products.slidesData,
  currentSlide: state.main.currentSlide,
  srcSlide: state.main.srcSlide,
  toggleSlideProductOpen: state.main.toggleSlideProductOpen,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (modifier le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  HandleProductIdUrl: (value) => {
    const action = productIdUrlSave(value);
    dispatch(action);
  },

  loadProduct: () => {
    dispatch(productGet());
  },

  handleSlide: (value) => {
    const action = currentSlideCount(value);
    dispatch(action);
  },

  openSlide: (value) => {
    const action = toggleSlideProductOpen(value);
    dispatch(action);
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Product);
