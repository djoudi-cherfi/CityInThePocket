import { connect } from 'react-redux';

import { toggleNavCategoryOpen } from 'src/lib/actions/mainActions';

// on importe le composant de présentation
import NavCategoryButton from 'src/components/templates/Header/NavCategoryButton';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  toggleNavCategoryOpen: state.main.toggleNavCategoryOpen,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (modifier le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  HandleToggleNavCategoryOpen: () => {
    dispatch(toggleNavCategoryOpen());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(NavCategoryButton);