import { connect } from 'react-redux';

import { headerHeightSave } from 'src/lib/actions/mainActions';

// on importe le composant de présentation
import Header from 'src/components/templates/Header';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  cityName: state.main.cityName,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (modifier le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  handelHeaderHeight: (value) => {
    const action = headerHeightSave(value);
    dispatch(action);
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Header);
