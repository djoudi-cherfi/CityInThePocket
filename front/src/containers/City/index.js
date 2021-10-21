import { connect } from 'react-redux';

import { categoryNamesGet } from 'src/lib/actions/shopActions';

// on importe le composant de présentation
import City from 'src/components/City';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  cityName: state.main.cityName,
  categoryNamesLoaded: state.shops.categoryNamesLoaded,
  logged: state.auth.logged,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (modifier le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  loadCategoriesNames: () => {
    dispatch(categoryNamesGet());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(City);
