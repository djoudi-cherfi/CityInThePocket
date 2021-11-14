import React from 'react';

import PropTypes from 'prop-types';

// == Head html informations
import { Helmet } from 'react-helmet';

import { Formik, Form } from 'formik';

import { filterValidation } from 'src/Validations/validationSchema';

import FormControl from 'src/components/Form/FormControl';

import './forgotpassword.scss';

// == Composant
const ForgotPassword = ({
  // Form
  forgotPassword,

  // Send state
  changeInputField,

  // Send email
  handleForgotPasswordSent,

  // Reset state initialValues
  handleResetForm,

  // Status
  forgotPasswordSentStatus,
}) => {
  // The initial values validated by Yup
  const initialValues = {
    forgotPassword: forgotPassword,
  };

  const validationSchema = filterValidation(
    'forgotPassword',
  );

  // Send all values to...
  const handleSubmit = (_, { setSubmitting }) => {
    // make async call
    setSubmitting(true);
    handleForgotPasswordSent();
    handleResetForm();
    setSubmitting(false);
  };

  return (
    <div className="forgotpassword">
      <Helmet>
        <title>Forgot password</title>
        <meta name="description" content="Page forgot password" />
      </Helmet>
      {forgotPasswordSentStatus ? (
        <div className="forgotpassword-message">
          <h3 className="forgotpassword-message-title">Mot de passe oublié ?</h3>

          <span className="forgotpassword-message-subtitle">
            Réinitialisation du mot de passe
          </span>

          <p className="forgotpassword-message-paragraphe">
            Merci.
            <br />
            Un message vous a été envoyé.
            <br />
            <span>
              Veuillez contacter le service client si vous ne recevez pas d'e-mail de notre part.
            </span>
          </p>
        </div>
      ) : (
        <>
          <div className="forgotpassword-message">
            <h3 className="forgotpassword-message-title">Mot de passe oublié ?</h3>
            <p className="forgotpassword-message-paragraphe">
              Entrez l'adresse e-mail indiquée au moment de la création de votre compte.
              Vous recevrez un lien pour réinitialiser votre mot de passe.
            </p>
          </div>

          <div className="form">
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
                    name="forgotPassword"
                    placeholder="email@email.com"
                    value={initialValues.forgotPassword}
                    formInputField={changeInputField}
                  />

                  <button className="form-container-submit-btn" type="submit" disabled={!isValid || isSubmitting}>Submit</button>
                </Form>
              )}
            </Formik>
          </div>
        </>
      )}

    </div>
  );
};

ForgotPassword.propTypes = {
  // Form
  forgotPassword: PropTypes.string.isRequired,

  // Send state
  changeInputField: PropTypes.func.isRequired,

  // Create account
  handleForgotPasswordSent: PropTypes.func.isRequired,

  // Reset state initialValues
  handleResetForm: PropTypes.func.isRequired,

  // Status
  forgotPasswordSentStatus: PropTypes.bool.isRequired,
};

// == Export
export default ForgotPassword;
