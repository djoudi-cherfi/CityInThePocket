import { connect } from 'react-redux';

import { resetForm, formInputField } from 'src/lib/actions/formActions';

import { logIn } from 'src/lib/actions/authActions';

// on importe le composant de présentation
import Login from 'src/components/Identity/Login';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  cityName: state.main.cityName,
  logged: state.auth.logged,

  loginEmail: state.form.loginEmail,
  loginPassword: state.form.loginPassword,
  rememberPassword: state.form.rememberPassword,
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

  handleLoginCreate: () => {
    // console.log('submit du formulaires');
    dispatch(logIn());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Login);
