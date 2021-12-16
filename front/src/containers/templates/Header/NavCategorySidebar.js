import { connect } from 'react-redux';

import { toggleNavCategoryOpen, toggleNavCategoryOpenReset } from 'src/lib/actions/mainActions';
import { categoryNameIdUrlSave } from 'src/lib/actions/shopActions';

// on importe le composant de présentation
import NavCategorySidebar from 'src/components/templates/Header/NavCategorySidebar';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  cityName: state.main.cityName,
  toggleNavCategoryOpen: state.main.toggleNavCategoryOpen,
  categoryNames: state.shops.categoryNames,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (modifier le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  HandleToggleNavCategoryOpen: () => {
    dispatch(toggleNavCategoryOpen());
  },

  HandleToggleNavCategoryOpenReset: () => {
    dispatch(toggleNavCategoryOpenReset());
  },

  HandleCategoryId: (value) => {
    const action = categoryNameIdUrlSave(value);
    dispatch(action);
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(NavCategorySidebar);
