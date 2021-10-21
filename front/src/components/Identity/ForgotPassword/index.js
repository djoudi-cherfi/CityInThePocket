import React from 'react';

import PropTypes from 'prop-types';

// == Head html informations
import { Helmet } from 'react-helmet';

import { forgotPasswordSchema } from 'src/Validations/ForgotPasswordValidations';

// == Import
import ForgotField from './ForgotField';

import './forgotpassword.scss';

// == Composant
const ForgotPassword = ({
  forgotPassword,
  changeForgotPasswordField,
  handleForgotPasswordCreate,
  forgotPasswordErrorMessage,
  forgotPasswordValidation,
  forgotPasswordSent,
  serverForgotPasswordValidation,
  serverErrorseStatus,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();

    const formData = {
      email: evt.target[0].value,
    };

    // Si isValid est égale à true envoie du formulaire
    const isValid = forgotPasswordSchema.isValidSync(formData);
    if (isValid === true) {
      handleForgotPasswordCreate();
    }

    // Fonction validate qui retourne les erreurs yup des input
    // avec abortEarly pour avoir toutes les erreurs dans un tableau inner
    forgotPasswordSchema
      .validate(formData, { abortEarly: false })
      .then(() => {
        // Success
      })
      .catch((err) => {
        // console.log(err);
        // Récupère les erreurs yup des input (err.inner)
        forgotPasswordErrorMessage(err.inner);
      });
  };

  return (
    <div className="forgotpassword">
      <Helmet>
        <title>Forgot password</title>
        <meta name="description" content="Page forgot password" />
      </Helmet>
      {forgotPasswordSent ? (
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

          <form autoComplete="off" className="forgotpassword-form" onSubmit={handleSubmit}>
            {serverErrorseStatus === 400 && (
              <div className="forgotpassword-form-alert">
                <span>{serverForgotPasswordValidation}</span>
              </div>
            )}

            <div className="forgotpassword-form-input-wrap">
              <span className="forgotpassword-form-input-label">Mot de passe</span>
              <ForgotField
                type="email"
                name="forgotPassword"
                placeholder="nom@mail.com"
                manageChange={changeForgotPasswordField}
                value={forgotPassword}
              />
            </div>

            {forgotPasswordValidation.map(
              (inner) => inner.value.length === 0
                && inner.type === 'required'
                && inner.path === 'email' && (
                  <span key={forgotPassword} className="forgotpassword-form-input-alert">
                    {inner.message}
                  </span>
              ),
            )}

            {forgotPasswordValidation.map(
              (inner) => inner.value.length > 0
                && inner.type === 'matches'
                && inner.path === 'email' && (
                  <span key={forgotPassword} className="forgotpassword-form-input-alert">
                    {inner.message}
                  </span>
              ),
            )}

            <button type="submit" className="forgotpassword-form-submit">
              Soumettre
            </button>
          </form>
        </>
      )}

    </div>
  );
};

ForgotPassword.propTypes = {
  // value for resetPassword
  forgotPassword: PropTypes.string.isRequired,
  /** called when onChange event is received by an input, two parameters :
   * - new value
   * - name
   */
  changeForgotPasswordField: PropTypes.func.isRequired,
  // called when the form is submitted
  handleForgotPasswordCreate: PropTypes.func.isRequired,

  // Fonction d'envoi de l'objet erreur des input de yup
  forgotPasswordErrorMessage: PropTypes.func.isRequired,

  forgotPasswordValidation: PropTypes.arrayOf(
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

  // forgotPasswordSent redirection vers le compte utilisateur
  forgotPasswordSent: PropTypes.bool.isRequired,

  // Réponse message d'erreur du serveur
  serverForgotPasswordValidation: PropTypes.string.isRequired,

  // Réponse du submit status 400
  serverErrorseStatus: PropTypes.number.isRequired,
};

// == Export
export default ForgotPassword;
