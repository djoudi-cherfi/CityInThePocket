import { connect } from 'react-redux';

import { infosNameSave } from 'src/lib/actions/mainActions';

// on importe le composant de présentation
import Informations from 'src/components/Informations';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  termsAndConditionsData: state.main.termsAndConditionsData,
  legalNoticeData: state.main.legalNoticeData,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (modifier le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  handleInfosName: (value) => {
    const action = infosNameSave(value);
    dispatch(action);
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Informations);
