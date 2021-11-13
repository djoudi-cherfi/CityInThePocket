import { connect } from 'react-redux';

import {
  resetForm,
  formInputField,
  formSelectOptionUpdate,
  formSelectOptionAdd,
  formRadioOptionUpdate,
  formRadioOptionAdd,
  formCheckboxMultiOptionUpdate,
  formCheckboxMultiOptionAdd,
  formCheckboxMultiOptionRemove,
} from 'src/lib/actions/formActions';

// on importe le composant de présentation
import FormContainer from 'src/components/Form/FormContainer';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  // propsForm: state.main.propsForm,
  firstName: state.main.firstName,
  lastName: state.main.lastName,
  address: state.main.address,
  postalCode: state.main.postalCode,
  city: state.main.city,
  phoneNumber: state.main.phoneNumber,
  email: state.main.email,
  password: state.main.password,
  confirmPassword: state.main.confirmPassword,
  conditionsPrivacyPolicy: state.main.conditionsPrivacyPolicy,
  loginEmail: state.main.loginEmail,
  loginPassword: state.main.loginPassword,
  updatePassword: state.main.updatePassword,
  confirmUpdatePassword: state.main.confirmUpdatePassword,
  updateEmail: state.main.updateEmail,
  confirmUpdateEmail: state.main.confirmUpdateEmail,
  forgotPassword: state.main.forgotPassword,
  resetPassword: state.main.resetPassword,
  confirmResetPassword: state.main.confirmResetPassword,
  description: state.main.description,
  selectOptions: state.main.selectOptions,
  selectOptionsSubmit: state.main.selectOptionsSubmit,
  radioOptions: state.main.radioOptions,
  radioOptionsSubmit: state.main.radioOptionsSubmit,
  checkboxMultiOptions: state.main.checkboxMultiOptions,
  checkboxMultiOptionsSubmit: state.main.checkboxMultiOptionsSubmit,
  date: state.main.date,
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

  changeSelectOptionUpdate: (value, name) => {
    // console.log(`value: ${value}, name: ${name}`);
    const action = formSelectOptionUpdate(value, name);
    dispatch(action);
  },

  changeSelectOptionAdd: (value, name) => {
    // console.log(`value: ${value}, name: ${name}`);
    const action = formSelectOptionAdd(value, name);
    dispatch(action);
  },

  changeRadioOptionUpdate: (value, name) => {
    // console.log(`value: ${value}, name: ${name}`);
    const action = formRadioOptionUpdate(value, name);
    dispatch(action);
  },

  changeRadioOptionAdd: (value, name) => {
    // console.log(`value: ${value}, name: ${name}`);
    const action = formRadioOptionAdd(value, name);
    dispatch(action);
  },

  changeCheckboxOptionUpdate: (value, name) => {
    // console.log(`value: ${value}, name: ${name}`);
    const action = formCheckboxMultiOptionUpdate(value, name);
    dispatch(action);
  },

  changeCheckboxOptionAdd: (value, name) => {
    // console.log(`value: ${value}, name: ${name}`);
    const action = formCheckboxMultiOptionAdd(value, name);
    dispatch(action);
  },

  changeCheckboxOptionRemove: (value, name) => {
    // console.log(`value: ${value}, name: ${name}`);
    const action = formCheckboxMultiOptionRemove(value, name);
    dispatch(action);
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
