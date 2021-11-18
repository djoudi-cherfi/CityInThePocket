import { connect } from 'react-redux';

import { resetForm, formInputField } from 'src/lib/actions/formActions';

import { resetPasswordSent } from 'src/lib/actions/authActions';

// on importe le composant de présentation
import ResetPassword from 'src/components/Identity/ResetPassword';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  resetPassword: state.form.resetPassword,
  confirmResetPassword: state.form.confirmResetPassword,
  resetPasswordSentStatus: state.auth.resetPasswordSentStatus,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (modifier le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  handleResetForm: () => {
    // console.log(`value: ${value}, name: ${name}`);
    dispatch(resetForm());
  },

  changeInputField: (value, name) => {
    // console.log(`value: ${value}, name: ${name}`);
    const action = formInputField(value, name);
    dispatch(action);
  },

  handleResetPasswordSent: (id, slug) => {
    // console.log('submit du formulaires');
    const action = resetPasswordSent(id, slug);
    dispatch(action);
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
