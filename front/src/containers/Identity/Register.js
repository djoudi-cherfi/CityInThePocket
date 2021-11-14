import { connect } from 'react-redux';

import { resetForm, formInputField } from 'src/lib/actions/formActions';

import { userIdentityCreat } from 'src/lib/actions/authActions';

// on importe le composant de présentation
import Register from 'src/components/Identity/Register';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  firstName: state.form.firstName,
  lastName: state.form.lastName,
  address: state.form.address,
  postalCode: state.form.postalCode,
  city: state.form.city,
  phoneNumber: state.form.phoneNumber,
  email: state.form.email,
  password: state.form.password,
  confirmPassword: state.form.confirmPassword,
  conditionsPrivacyPolicy: state.form.conditionsPrivacyPolicy,
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

  handleRegisterCreate: () => {
    // console.log('submit du formulaires');
    dispatch(userIdentityCreat());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Register);
