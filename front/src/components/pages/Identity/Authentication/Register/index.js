import React from 'react';

import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';

import { Formik, Form } from 'formik';

import { filterValidation } from 'src/Validations/validationSchema';

import FormControl from 'src/components/templates/Form/FormControl';

import './register.scss';

// == Composant
const Register = ({
  // Form
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

  // Send state
  changeInputField,

  // Create account
  handleRegisterCreate,

  // Reset state initialValues
  handleResetForm,
}) => {
  const navigate = useNavigate();

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
  );

  // Send all values to...
  const handleSubmit = (_, { setSubmitting }) => {
    // make async call
    setSubmitting(true);
    handleRegisterCreate();
    handleResetForm();
    setSubmitting(false);
    navigate(-1);
  };

  return (
    <div className="register">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ isSubmitting }) => (
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
              label="Ville"
              name="city"
              placeholder="Paris"
              value={initialValues.city}
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
            <button className="form-container-submit-btn" type="submit" disabled={isSubmitting}>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

Register.propTypes = {
  // Form
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

  // Send state
  changeInputField: PropTypes.func.isRequired,

  // Create account
  handleRegisterCreate: PropTypes.func.isRequired,

  // Reset state initialValues
  handleResetForm: PropTypes.func.isRequired,
};

// == Export
export default Register;
