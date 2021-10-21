import { connect } from 'react-redux';

import { toggleIdentityOpen } from 'src/lib/actions/mainActions';

// on importe le composant de présentation
import NavIdentityButton from 'src/components/Header/NavIdentityButton';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (modifier le state)
const mapDispatchToProps = (dispatch) => ({
  HandleToggleIdentityOpen: () => {
    dispatch(toggleIdentityOpen());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(NavIdentityButton);
