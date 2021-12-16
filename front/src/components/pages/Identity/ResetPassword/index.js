import React from 'react';

import PropTypes from 'prop-types';

// == Head html informations
import { Helmet } from 'react-helmet';

import { useParams } from 'react-router-dom';

import { Formik, Form } from 'formik';

import { filterValidation } from 'src/Validations/validationSchema';

import FormControl from 'src/components/templates/Form/FormControl';

import './resetpassword.scss';

// == Composant
const ResetPassword = ({
  // Form
  resetPassword,
  confirmResetPassword,

  // Send state
  changeInputField,

  // Send email
  handleResetPasswordSent,

  // Reset state initialValues
  handleResetForm,

  // Status
  resetPasswordSentStatus,
}) => {
  const { id, slug } = useParams();

  // The initial values validated by Yup
  const initialValues = {
    resetPassword: resetPassword,
    confirmResetPassword: confirmResetPassword,
  };

  const validationSchema = filterValidation(
    'resetPassword',
    'confirmResetPassword',
  );

  // Send all values to...
  const handleSubmit = (_, { setSubmitting }) => {
    // make async call
    setSubmitting(true);
    handleResetPasswordSent(id, slug);
    handleResetForm();
    setSubmitting(false);
  };

  return (
    <div className="resetpassword">
      <Helmet>
        <title>Reset password</title>
        <meta name="description" content="Page reset password" />
      </Helmet>
      {resetPasswordSentStatus ? (
        <div className="resetpassword-form-message">
          <h3 className="resetpassword-form-message-title">Réinitialisation du mot de passe</h3>
          <p className="resetpassword-message-paragraphe">
            Votre mot de passe a été modifier,
            <br />
            vous pouvez vous connecter
          </p>
        </div>
      ) : (
        <>
          <div className="resetpassword-form-message">
            <h3 className="resetpassword-form-message-title">Réinitialisation du mot de passe</h3>
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
                    type="password"
                    label="Mot de passe"
                    name="resetPassword"
                    placeholder="Min8@Max10"
                    value={initialValues.resetPassword}
                    formInputField={changeInputField}
                  />
                  <FormControl
                    control="input"
                    type="password"
                    label="Confirmer votre mot de passe"
                    name="confirmResetPassword"
                    placeholder="Min8@Max10"
                    value={initialValues.confirmResetPassword}
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

ResetPassword.propTypes = {
  // Form
  resetPassword: PropTypes.string.isRequired,
  confirmResetPassword: PropTypes.string.isRequired,

  // Send state
  changeInputField: PropTypes.func.isRequired,

  // Send password
  handleResetPasswordSent: PropTypes.func.isRequired,

  // Reset state initialValues
  handleResetForm: PropTypes.func.isRequired,

  // Status
  resetPasswordSentStatus: PropTypes.bool.isRequired,
};

// == Export
export default ResetPassword;
