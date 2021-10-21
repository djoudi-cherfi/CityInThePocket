import { connect } from 'react-redux';

import {
  resetPasswordParams,
  resetPasswordInputField,
  resetPasswordInputCreate,
  resetPasswordValidationInput,
  resetPasswordValidationConfirmPasswordInput,
} from 'src/lib/actions/authActions';

// on importe le composant de présentation
import ResetPassword from 'src/components/Identity/ResetPassword';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  resetPassword: state.auth.resetPassword,
  resetPasswordConfirm: state.auth.resetPasswordConfirm,

  resetPasswordValidation: state.auth.resetPasswordValidation,
  resetPasswordValidationConfirmPassword: state.auth.resetPasswordValidationConfirmPassword,
  resetPasswordSent: state.auth.resetPasswordSent,

  serverResetPasswordValidation: state.serv.serverResetPasswordValidation,
  serverErrorseStatus: state.serv.serverErrorseStatus,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (modifier le state)
const mapDispatchToProps = (dispatch) => ({
  handleResetPasswordParams: (id, slug) => {
    const action = resetPasswordParams(id, slug);
    dispatch(action);
  },

  changeResetPasswordField: (value, name) => {
    // console.log(`value: ${value}, name: ${name}`);
    const action = resetPasswordInputField(value, name);
    dispatch(action);
  },

  handleResetPasswordCreate: () => {
    dispatch(resetPasswordInputCreate());
  },

  resetPasswordErrorMessage: (value) => {
    const action = resetPasswordValidationInput(value);
    dispatch(action);
  },

  isValidResetPassword: (value) => {
    const action = resetPasswordValidationConfirmPasswordInput(value);
    dispatch(action);
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
