import { connect } from 'react-redux';

import { toggleSidebarTgOpen } from 'src/lib/actions/mainActions';

// on importe le composant de présentation
import Sidebar from 'src/components/pages/Informations/Sidebar';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  headerHeight: state.main.headerHeight,
  infosRefs: state.main.infosRefs,
  infosName: state.main.infosName,
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
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
