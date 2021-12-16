import { connect } from 'react-redux';

import { shopsLastAddReset } from 'src/lib/actions/shopActions';
import { productLastAddReset } from 'src/lib/actions/productActions';

// on importe le composant de présentation
import FindCity from 'src/components/pages/FindCity';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  citiesLoaded: state.main.citiesLoaded,
  cities: state.main.cities,
  futurcCities: state.main.futurcCities,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (modifier le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  resetShopsLastAdd: () => {
    dispatch(shopsLastAddReset());
  },
  resetproductsLastAdd: () => {
    dispatch(productLastAddReset());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(FindCity);
