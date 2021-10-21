import { connect } from 'react-redux';

import { infosRefsSave } from 'src/lib/actions/mainActions';

// on importe le composant de présentation
import TermsAndConditions from 'src/components/Informations/TermsAndConditions';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  termsAndConditionsDataLoaded: state.main.termsAndConditionsDataLoaded,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (modifier le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  handleInfosRefs: (value) => {
    const action = infosRefsSave(value);
    dispatch(action);
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(TermsAndConditions);
