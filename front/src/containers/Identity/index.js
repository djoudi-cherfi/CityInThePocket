import { connect } from 'react-redux';

import {
  toggleLogin,
  toggleRegister,
} from 'src/lib/actions/authActions';

// on importe le composant de présentation
import Home from 'src/components/Identity';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  toggleLoginRegister: state.auth.toggleLoginRegister,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (modifier le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  handleToggleLogin: () => {
    dispatch(toggleLogin());
  },

  handleToggleRegister: () => {
    dispatch(toggleRegister());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Home);
