import React from 'react';

import PropTypes from 'prop-types';

import { useParams } from 'react-router-dom';

// == Head html informations
import { Helmet } from 'react-helmet';

import { resetPasswordSchema } from 'src/Validations/ResetPasswordValidations';

// == Import
import ResetField from './ResetField';

import './resetpassword.scss';

// == Composant
const ResetPassword = ({
  handleResetPasswordParams,
  resetPassword,
  resetPasswordConfirm,
  changeResetPasswordField,
  handleResetPasswordCreate,
  resetPasswordErrorMessage,
  isValidResetPassword,
  resetPasswordValidation,
  resetPasswordValidationConfirmPassword,
  resetPasswordSent,
  serverResetPasswordValidation,
  serverErrorseStatus,
}) => {
  const { id, slug } = useParams();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleResetPasswordParams(id, slug);
    const formData = {
      password: evt.target[0].value,
      confirmPassword: evt.target[1].value,
    };

    // Si isValid est égale à true envoie du formulaire
    const isValid = resetPasswordSchema.isValidSync(formData);
    if (isValid === true) {
      handleResetPasswordCreate();
    }

    const inputPassword = resetPassword.length > 0;
    isValidResetPassword(inputPassword);

    // Fonction validate qui retourne les erreurs yup des input
    // avec abortEarly pour avoir toutes les erreurs dans un tableau inner
    resetPasswordSchema
      .validate(formData, { abortEarly: false })
      .then(() => {
        // Success
      })
      .catch((err) => {
        // console.log(err);
        // Récupère les erreurs yup des input (err.inner)
        resetPasswordErrorMessage(err.inner);
      });
  };

  return (
    <div className="resetpassword">
      <Helmet>
        <title>Reset password</title>
        <meta name="description" content="Page reset password" />
      </Helmet>
      {resetPasswordSent ? (
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

          <form autoComplete="off" className="resetpassword-form" onSubmit={handleSubmit}>
            {serverErrorseStatus === 400 && (
              <div className="resetpassword-form-alert">
                <span>{serverResetPasswordValidation}</span>
              </div>
            )}

            <div className="resetpassword-form-input-wrap">
              <span className="resetpassword-form-input-label">Mot de passe</span>
              <ResetField
                type="password"
                name="resetPassword"
                placeholder="M0nM0T2Pas5"
                manageChange={changeResetPasswordField}
                value={resetPassword}
              />
            </div>

            {resetPasswordValidation.map(
              (inner) => inner.value.length === 0
                && inner.type === 'required'
                && inner.path === 'password' && (
                  <span key={resetPassword} className="resetpassword-form-input-alert">
                    {inner.message}
                  </span>
                ),
            )}

            {resetPasswordValidation.map(
              (inner) => inner.value.length > 0
                && inner.type === 'matches'
                && inner.path === 'password' && (
                  <span key={resetPassword} className="resetpassword-form-input-alert">
                    {inner.message}
                  </span>
                ),
            )}

            <div className="resetpassword-form-input-wrap">
              <span className="resetpassword-form-input-label">Confirmer votre mot de passe</span>
              <ResetField
                type="password"
                name="resetPasswordConfirm"
                placeholder="M0nM0T2Pas5"
                manageChange={changeResetPasswordField}
                value={resetPasswordConfirm}
              />
            </div>

            {resetPasswordValidationConfirmPassword && (
              <span key={resetPasswordConfirm} className="resetpassword-form-alert">
                Veuillez confirmer votre mot de passe
              </span>
            )}

            {resetPasswordValidation.map(
              (inner) => inner.value.length > 0
                && inner.type === 'matches'
                && inner.path === 'confirmPassword'
                && (
                  <span key={resetPasswordConfirm} className="resetpassword-form-alert">
                    {inner.message}
                  </span>
                ),
            )}

            <button type="submit" className="resetpassword-form-submit">
              Soumettre
            </button>
          </form>
        </>
      )}
    </div>
  );
};

ResetPassword.propTypes = {
  handleResetPasswordParams: PropTypes.func.isRequired,
  // value for resetPassword
  resetPassword: PropTypes.string.isRequired,
  // value for resetPasswordConfirm
  resetPasswordConfirm: PropTypes.string.isRequired,
  /** called when onChange event is received by an input, two parameters :
   * - new value
   * - name
   */
  changeResetPasswordField: PropTypes.func.isRequired,
  // called when the form is submitted
  handleResetPasswordCreate: PropTypes.func.isRequired,

  // Fonction d'envoi de l'objet erreur des input de yup
  resetPasswordErrorMessage: PropTypes.func.isRequired,

  // Envoie si true si l'input password est renseigné
  isValidResetPassword: PropTypes.func.isRequired,

  // Récupérere la valeur true ou false de l'input password
  resetPasswordValidationConfirmPassword: PropTypes.bool.isRequired,

  resetPasswordValidation: PropTypes.arrayOf(
    PropTypes.shape({
      // Type d'erreur du shema yup
      type: PropTypes.string,
      // Valeur d'erreur du shema yup
      value: PropTypes.string,
      // Nom de l'input match avec yup
      path: PropTypes.string,
      // Message d'erreur de l'input avec yup
      message: PropTypes.string,
    }),
  ).isRequired,

  // resetPasswordSent redirection vers le compte utilisateur
  resetPasswordSent: PropTypes.bool.isRequired,

  // Réponse message d'erreur du serveur
  serverResetPasswordValidation: PropTypes.string.isRequired,

  // Réponse du submit status 400
  serverErrorseStatus: PropTypes.number.isRequired,
};

// == Export
export default ResetPassword;
