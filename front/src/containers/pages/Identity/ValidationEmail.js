import { connect } from 'react-redux';

import { validationEmailSent, validationEmailStatusReset } from 'src/lib/actions/authActions';

// on importe le composant de présentation
import ValidationEmail from 'src/components/pages/Identity/ValidationEmail';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  validationEmailStatus: state.auth.validationEmailStatus,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (modifier le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  handleValidationEmailSent: (id, slug) => {
    const action = validationEmailSent(id, slug);
    dispatch(action);
  },

  handleValidationEmailStatusReset: () => {
    dispatch(validationEmailStatusReset());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(ValidationEmail);
