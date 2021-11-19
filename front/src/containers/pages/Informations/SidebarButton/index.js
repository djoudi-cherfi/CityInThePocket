import { connect } from 'react-redux';

import { toggleSidebarTgOpen } from 'src/lib/actions/mainActions';

// on importe le composant de présentation
import SidebarButton from 'src/components/pages/Informations/SidebarButton';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  toggleSidebarTgOpen: state.main.toggleSidebarTgOpen,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (modifier le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  handleToggleSidebarTgOpen: () => {
    dispatch(toggleSidebarTgOpen());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(SidebarButton);
