import { connect } from 'react-redux';

import { userIdentityGet } from 'src/lib/actions/authActions';

// on importe le composant de présentation
import Account from 'src/components/pages/Account';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  userId: state.auth.userId,
  userIdentityload: state.auth.userIdentityload,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (modifier le state)
const mapDispatchToProps = (dispatch) => ({
  handleUserIdentityGet: () => {
    dispatch(userIdentityGet());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Account);
