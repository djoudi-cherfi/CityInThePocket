import { connect } from 'react-redux';

// import {
//   forgotPasswordField,
//   forgotPasswordCreate,
//   forgotPasswordValidationInput,
// } from 'src/lib/actions/authActions';

// on importe le composant de présentation
import ForgotPassword from 'src/components/Identity/ForgotPassword';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  forgotPassword: state.auth.forgotPassword,
  forgotPasswordValidation: state.auth.forgotPasswordValidation,
  forgotPasswordSent: state.auth.forgotPasswordSent,

  serverForgotPasswordValidation: state.serv.serverForgotPasswordValidation,
  serverErrorseStatus: state.serv.serverErrorseStatus,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (modifier le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  // changeForgotPasswordField: (value, name) => {
  //   const action = forgotPasswordField(value, name);
  //   dispatch(action);
  // },

  // handleForgotPasswordCreate: () => {
  //   const action = forgotPasswordCreate();
  //   dispatch(action);
  // },

  // forgotPasswordErrorMessage: (value) => {
  //   const action = forgotPasswordValidationInput(value);
  //   dispatch(action);
  // },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
