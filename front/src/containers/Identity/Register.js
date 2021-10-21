import { connect } from 'react-redux';

import {
  userIdentityField,
  userIdentityCreat,
  registerValidationInput,
  registerValidationConfirmPasswordInput,
} from 'src/lib/actions/authActions';

// on importe le composant de présentation
import Register from 'src/components/Identity/Register';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  cityName: state.main.cityName,
  lastName: state.auth.lastName,
  firstName: state.auth.firstName,
  address: state.auth.address,
  city: state.auth.city,
  postalCode: state.auth.postalCode,
  phoneNumber: state.auth.phoneNumber,
  email: state.auth.email,
  password: state.auth.password,
  confirmPassword: state.auth.confirmPassword,
  conditionsPrivacyPolicy: state.auth.conditionsPrivacyPolicy,

  registerValidation: state.auth.registerValidation,
  registerValidationConfirmPassword: state.auth.registerValidationConfirmPassword,
  registred: state.auth.registred,

  serverRegisterValidation: state.serv.serverRegisterValidation,
  serverErrorseStatus: state.serv.serverErrorseStatus,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (modifier le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  changeRegisterField: (value, name) => {
    // console.log(`value: ${value}, name: ${name}`);
    const action = userIdentityField(value, name);
    dispatch(action);
  },

  handleRegisterCreate: () => {
    // console.log('submit du formulaires');
    dispatch(userIdentityCreat());
  },

  registerInputErrorMessage: (value) => {
    const action = registerValidationInput(value);
    dispatch(action);
  },

  isValidConfirmPassword: (value) => {
    const action = registerValidationConfirmPasswordInput(value);
    dispatch(action);
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Register);
