import { connect } from 'react-redux';

import { infosDataSave } from 'src/lib/actions/mainActions';

// on importe le composant de présentation
import App from 'src/components/App';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (modifier le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  handleInfosData: (TermsAndConditionsData, LegalNoticeData) => {
    const action = infosDataSave(TermsAndConditionsData, LegalNoticeData);
    dispatch(action);
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(App);