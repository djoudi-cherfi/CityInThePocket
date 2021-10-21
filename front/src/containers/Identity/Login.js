import { connect } from 'react-redux';

import { userIdentityField, logIn, loginValidationInput } from 'src/lib/actions/authActions';

// on importe le composant de présentation
import Login from 'src/components/Identity/Login';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  cityName: state.main.cityName,
  email: state.auth.loginEmail,
  password: state.auth.loginPassword,
  rememberPassword: state.auth.rememberPassword,
  loginValidation: state.auth.loginValidation,
  logged: state.auth.logged,
  serverLoginValidation: state.serv.serverLoginValidation,
  serverErrorseStatus: state.serv.serverErrorseStatus,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (modifier le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  changeLoginField: (value, name) => {
    // console.log(`value: ${value}, name: ${name}`);
    const action = userIdentityField(value, name);
    dispatch(action);
  },

  handleLoginCreate: () => {
    // console.log('submit du formulaires');
    dispatch(logIn());
  },

  loginInputErrorMessage: (value) => {
    const action = loginValidationInput(value);
    dispatch(action);
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Login);
