import { connect } from 'react-redux';

import { toggleIdentityOpen, toggleIdentityOpenReset } from 'src/lib/actions/mainActions';
import { logOut } from 'src/lib/actions/authActions';

// on importe le composant de présentation
import NavIdentitySidebar from 'src/components/templates/Header/NavIdentitySidebar';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  cityName: state.main.cityName,
  toggleIdentityOpen: state.main.toggleIdentityOpen,
  logged: state.auth.logged,
  firstname: state.auth.firstname,
  hasShop: state.auth.hasShop,
  shopUserId: state.shops.shopUserId,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (modifier le state)
const mapDispatchToProps = (dispatch) => ({
  HandleToggleIdentityOpen: () => {
    dispatch(toggleIdentityOpen());
  },

  HandleToggleIdentityOpenReset: () => {
    dispatch(toggleIdentityOpenReset());
  },

  handleLogout: () => {
    dispatch(logOut());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(NavIdentitySidebar);
