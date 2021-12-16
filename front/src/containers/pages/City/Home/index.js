import { connect } from 'react-redux';

// / import saveProduct
import { productLastAddGet } from 'src/lib/actions/productActions';
import { shopsLastAddGet } from 'src/lib/actions/shopActions';

// on importe le composant de présentation
import Home from 'src/components/pages/City/Home';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  cityName: state.main.cityName,
  productsLastAdd: state.products.productsLastAdd,
  productsLastAddLoaded: state.products.productsLastAddLoaded,
  shopsLastAdd: state.shops.shopsLastAdd,
  shopsLastAddLoaded: state.shops.shopsLastAddLoaded,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (modifier le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  loadproductsLastAdd: () => {
    dispatch(productLastAddGet());
  },

  loadShopsLastAdd: () => {
    dispatch(shopsLastAddGet());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Home);
