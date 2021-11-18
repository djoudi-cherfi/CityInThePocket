import React from 'react';

import PropTypes from 'prop-types';

import { NavLink, Redirect } from 'react-router-dom';

import { Formik, Form } from 'formik';

import { filterValidation } from 'src/Validations/validationSchema';

import FormControl from 'src/components/Form/FormControl';

import './login.scss';

// == Composant
const Login = ({
  // Form
  loginEmail,
  loginPassword,

  // Send state
  changeInputField,

  // Create account
  handleLoginCreate,

  // Reset state initialValues
  handleResetForm,

  // is logged
  logged,

  // Reset status forgotPasswordSentStatus
  handleForgotPasswordSentStatusReset,

  // Reset status resetPasswordSentStatus
  handleResetPasswordSentStatusReset,
}) => {
  // The initial values validated by Yup
  const initialValues = {
    loginEmail: loginEmail,
    loginPassword: loginPassword,
  };

  const validationSchema = filterValidation(
    'loginEmail',
    'loginPassword',
  );

  // Send all values to...
  const handleSubmit = (_, { setSubmitting }) => {
    // make async call
    setSubmitting(true);
    handleLoginCreate();
    handleResetForm();
    setSubmitting(false);
  };

  return (
    <div className="login">
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
              type="email"
              label="Email"
              name="loginEmail"
              placeholder="email@email.com"
              value={initialValues.loginEmail}
              formInputField={changeInputField}
            />
            <FormControl
              control="input"
              type="password"
              label="Mot de passe"
              name="loginPassword"
              placeholder="Min8@Max10"
              value={initialValues.loginPassword}
              formInputField={changeInputField}
            />

            <button className="form-container-submit-btn" type="submit" disabled={!isValid || isSubmitting}>Submit</button>
          </Form>
        )}
      </Formik>

      <NavLink
        to="/identity/forgot-password"
        className="login-forgot-password"
        onClick={handleForgotPasswordSentStatusReset, handleResetPasswordSentStatusReset}
      >
        Mot passe oublié ?
      </NavLink>
      {logged && <Redirect to="/account/dashboard" />}
    </div>
  );
};

Login.propTypes = {
  // Form
  loginEmail: PropTypes.string.isRequired,
  loginPassword: PropTypes.string.isRequired,

  // Send state
  changeInputField: PropTypes.func.isRequired,

  // Create account
  handleLoginCreate: PropTypes.func.isRequired,

  // Reset state initialValues
  handleResetForm: PropTypes.func.isRequired,

  // is logged
  logged: PropTypes.bool.isRequired,

  // Reset status forgotPasswordSentStatus
  handleForgotPasswordSentStatusReset: PropTypes.func.isRequired,

  // Reset status resetPasswordSentStatus
  handleResetPasswordSentStatusReset: PropTypes.func.isRequired,
};

// == Export
export default Login;
