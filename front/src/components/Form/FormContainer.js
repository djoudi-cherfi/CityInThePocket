// == Import
import React from 'react';

// Prop type
import PropTypes from 'prop-types';

import { Formik, Form } from 'formik';

import { filterValidation } from 'src/Validations/validationSchema';

import FormControl from 'src/components/Form/FormControl';

import './form.scss';

// == Composant
const FormContainer = ({
  // Get state
  firstName,
  lastName,
  address,
  postalCode,
  city,
  phoneNumber,
  email,
  password,
  confirmPassword,
  conditionsPrivacyPolicy,
  loginEmail,
  loginPassword,
  updatePassword,
  confirmUpdatePassword,
  updateEmail,
  confirmUpdateEmail,
  forgotPassword,
  resetPassword,
  confirmResetPassword,
  description,
  selectOptions,
  selectOptionsSubmit,
  radioOptions,
  radioOptionsSubmit,
  checkboxMultiOptions,
  checkboxMultiOptionsSubmit,
  date,
  // Send state
  changeInputField,
  changeRadioOptionUpdate,
  changeRadioOptionAdd,
  changeSelectOptionUpdate,
  changeSelectOptionAdd,
  changeCheckboxOptionUpdate,
  changeCheckboxOptionAdd,
  changeCheckboxOptionRemove,
  // Reset state initialValues
  handleResetForm,
}) => {
  // The initial values validated by Yup
  const initialValues = {
    firstName: firstName,
    lastName: lastName,
    address: address,
    postalCode: postalCode,
    city: city,
    phoneNumber: phoneNumber,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
    conditionsPrivacyPolicy: conditionsPrivacyPolicy,
    loginEmail: loginEmail,
    loginPassword: loginPassword,
    updatePassword: updatePassword,
    confirmUpdatePassword: confirmUpdatePassword,
    updateEmail: updateEmail,
    confirmUpdateEmail: confirmUpdateEmail,
    description: description,
    forgotPassword: forgotPassword,
    resetPassword: resetPassword,
    confirmResetPassword: confirmResetPassword,
    selectOptions: selectOptionsSubmit,
    radioOptions: radioOptionsSubmit,
    checkboxMultiOptions: checkboxMultiOptionsSubmit,
    date: date,
  };

  const validationSchema = filterValidation(
    'firstName',
    'lastName',
    'address',
    'postalCode',
    'city',
    'phoneNumber',
    'email',
    'password',
    'confirmPassword',
    'conditionsPrivacyPolicy',
    'loginEmail',
    'loginPassword',
    'updatePassword',
    'confirmUpdatePassword',
    'updateEmail',
    'confirmUpdateEmail',
    'forgotPassword',
    'resetPassword',
    'confirmResetPassword',
    'description',
    'selectOptions',
    'radioOptions',
    'checkboxMultiOptions',
    'date',
  );

  // Send all values to...
  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Form values', values);
    setSubmitting(false);
    handleResetForm();
  };

  return (
    <div className="form-container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ isSubmitting, isValid }) => (
          <Form>
            <FormControl
              control="input"
              type="text"
              label="Prénom"
              name="firstName"
              placeholder="Michel"
              value={initialValues.firstName}
              formInputField={changeInputField}
            />
            <FormControl
              control="input"
              type="text"
              label="Nom"
              name="lastName"
              placeholder="Dupont"
              value={initialValues.lastName}
              formInputField={changeInputField}
            />
            <FormControl
              control="input"
              type="text"
              label="Address"
              name="address"
              placeholder="5 rue de la boetie"
              value={initialValues.address}
              formInputField={changeInputField}
            />
            <FormControl
              control="input"
              type="text"
              label="Code postal"
              name="postalCode"
              placeholder="75008"
              value={initialValues.postalCode}
              formInputField={changeInputField}
            />
            <FormControl
              control="input"
              type="text"
              label="Ville"
              name="city"
              placeholder="Paris"
              value={initialValues.city}
              formInputField={changeInputField}
            />
            <FormControl
              control="input"
              type="text"
              label="Numéro de télephone"
              name="phoneNumber"
              placeholder="0123456789"
              value={initialValues.phoneNumber}
              formInputField={changeInputField}
            />
            <FormControl
              control="input"
              type="email"
              label="Email"
              name="email"
              placeholder="email@email.com"
              value={initialValues.email}
              formInputField={changeInputField}
            />
            <FormControl
              control="input"
              type="password"
              label="Mot de passe"
              name="password"
              placeholder="Min8@Max10"
              value={initialValues.password}
              formInputField={changeInputField}
            />
            <FormControl
              control="input"
              type="password"
              label="Confirmer votre mot de passe"
              name="confirmPassword"
              placeholder="Min8@Max10"
              value={initialValues.confirmPassword}
              formInputField={changeInputField}
            />
            <FormControl
              control="checkboxSample"
              type="checkbox"
              label="Politique de confidentialité et conditions d'utilisation"
              name="conditionsPrivacyPolicy"
              formInputField={changeInputField}
              value={initialValues.conditionsPrivacyPolicy}
            />
            <FormControl
              control="input"
              type="email"
              label="Email (connexion)"
              name="loginEmail"
              placeholder="email@email.com"
              value={initialValues.loginEmail}
              formInputField={changeInputField}
            />
            <FormControl
              control="input"
              type="password"
              label="Mot de passe (connexion)"
              name="loginPassword"
              placeholder="Min8@Max10"
              value={initialValues.loginPassword}
              formInputField={changeInputField}
            />

            <FormControl
              control="input"
              type="password"
              label="Mot de passe (à modifier)"
              name="updatePassword"
              placeholder="Min8@Max10"
              value={initialValues.updatePassword}
              formInputField={changeInputField}
            />
            <FormControl
              control="input"
              type="password"
              label="Confirmer votre mot de passe"
              name="confirmUpdatePassword"
              placeholder="Min8@Max10"
              value={initialValues.confirmUpdatePassword}
              formInputField={changeInputField}
            />

            <FormControl
              control="input"
              type="email"
              label="Email (à modifier)"
              name="updateEmail"
              placeholder="email@email.com"
              value={initialValues.updateEmail}
              formInputField={changeInputField}
            />
            <FormControl
              control="input"
              type="email"
              label="Confirmer votre email (à modifier)"
              name="confirmUpdateEmail"
              placeholder="email@email.com"
              value={initialValues.confirmUpdateEmail}
              formInputField={changeInputField}
            />
            <FormControl
              control="input"
              type="email"
              label="Email (forgotPassword)"
              name="forgotPassword"
              placeholder="email@email.com"
              value={initialValues.forgotPassword}
              formInputField={changeInputField}
            />
            <FormControl
              control="input"
              type="password"
              label="Mot de passe (resetPassword)"
              name="resetPassword"
              placeholder="Min8@Max10"
              value={initialValues.resetPassword}
              formInputField={changeInputField}
            />
            <FormControl
              control="input"
              type="password"
              label="Confirmer votre mot de passe (resetPassword)"
              name="confirmResetPassword"
              placeholder="Min8@Max10"
              value={initialValues.confirmResetPassword}
              formInputField={changeInputField}
            />
            <FormControl
              control="textarea"
              label="Description"
              name="description"
              placeholder="votre description"
              value={initialValues.description}
              formInputField={changeInputField}
            />
            <FormControl
              control="select"
              label="Sélectionnez une option"
              name="selectOptions"
              submitName="selectOptionsSubmit"
              formSelectOptionUpdate={changeSelectOptionUpdate}
              formSelectOptionAdd={changeSelectOptionAdd}
              values={selectOptions}
            />
            <FormControl
              control="radio"
              type="radio"
              label="Radio option"
              name="radioOptions"
              submitName="radioOptionsSubmit"
              formRadioOptionUpdate={changeRadioOptionUpdate}
              formRadioOptionAdd={changeRadioOptionAdd}
              values={radioOptions}
            />
            <FormControl
              control="checkboxMulti"
              type="checkbox"
              label="checkboxMulti option"
              name="checkboxMultiOptions"
              submitName="checkboxMultiOptionsSubmit"
              formCheckboxMultiOptionUpdate={changeCheckboxOptionUpdate}
              formCheckboxMultiOptionAdd={changeCheckboxOptionAdd}
              formCheckboxMultiOptionRemove={changeCheckboxOptionRemove}
              values={checkboxMultiOptions}
            />
            <FormControl
              control="date"
              label="Date"
              name="date"
              placeholder="Sélectionnez votre date"
              value={initialValues.date}
              formInputField={changeInputField}
            />
            <button className="form-container-submit-btn" type="submit" disabled={!isValid || isSubmitting}>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

FormContainer.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  postalCode: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  conditionsPrivacyPolicy: PropTypes.bool.isRequired,
  loginEmail: PropTypes.string.isRequired,
  loginPassword: PropTypes.string.isRequired,
  updatePassword: PropTypes.string.isRequired,
  confirmUpdatePassword: PropTypes.string.isRequired,
  updateEmail: PropTypes.string.isRequired,
  confirmUpdateEmail: PropTypes.string.isRequired,
  forgotPassword: PropTypes.string.isRequired,
  resetPassword: PropTypes.string.isRequired,
  confirmResetPassword: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  selectOptions: PropTypes.array.isRequired,
  selectOptionsSubmit: PropTypes.array.isRequired,
  radioOptions: PropTypes.array.isRequired,
  radioOptionsSubmit: PropTypes.array.isRequired,
  checkboxMultiOptions: PropTypes.array.isRequired,
  checkboxMultiOptionsSubmit: PropTypes.array.isRequired,
  date: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.string,
  ]),
  changeInputField: PropTypes.func.isRequired,
  changeSelectOptionUpdate: PropTypes.func.isRequired,
  changeSelectOptionAdd: PropTypes.func.isRequired,
  changeRadioOptionUpdate: PropTypes.func.isRequired,
  changeRadioOptionAdd: PropTypes.func.isRequired,
  changeCheckboxOptionUpdate: PropTypes.func.isRequired,
  changeCheckboxOptionAdd: PropTypes.func.isRequired,
  changeCheckboxOptionRemove: PropTypes.func.isRequired,
  handleResetForm: PropTypes.func.isRequired,
};

FormContainer.defaultProps = {
  date: null,
};

export default FormContainer;
