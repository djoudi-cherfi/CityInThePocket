import React from 'react';

import PropTypes from 'prop-types';

import { userLoginSchema } from 'src/Validations/UserLoginValidations';

import { NavLink, Redirect } from 'react-router-dom';

// == Import
import LoginField from './LoginField';

import './login.scss';

// == Composant
const Login = ({
  cityName,
  email,
  password,
  changeLoginField,
  handleLoginCreate,
  loginInputErrorMessage,
  loginValidation,
  serverLoginValidation,
  logged,
  serverErrorseStatus,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();

    const formData = {
      email: evt.target[0].value,
      password: evt.target[1].value,
    };

    // Si isValid est égale à true envoie du formulaire
    const isValid = userLoginSchema.isValidSync(formData);
    if (isValid === true) {
      handleLoginCreate();
    }

    // Fonction validate qui retourne les erreurs yup des input
    // avec abortEarly pour avoir toutes les erreurs dans un tableau inner
    userLoginSchema
      .validate(formData, { abortEarly: false })
      .then(() => {
        // Success
      })
      .catch((err) => {
        // Récupère les erreurs yup des input (err.inner)
        loginInputErrorMessage(err.inner);
      });
  };

  return (
    <div className="login">
      <form autoComplete="off" className="login-form" onSubmit={handleSubmit}>
        {serverErrorseStatus === 400 && (
          <div className="login-form-input-alert">
            <span>{serverLoginValidation}</span>
          </div>
        )}
        <LoginField
          type="email"
          name="loginEmail"
          placeholder="Adresse Email"
          manageChange={changeLoginField}
          value={email}
        />
        {loginValidation.map(
          (inner) => inner.value.length === 0
            && inner.type === 'required'
            && inner.path === 'email'
              && (
                <span key={email} className="login-form-input-validation">
                  {inner.message}
                </span>
              ),
        )}
        {loginValidation.map(
          (inner) => inner.value.length > 0
          && inner.type === 'matches'
          && inner.path === 'email'
            && (
              <span key={email} className="login-form-input-validation">
                {inner.message}
              </span>
            ),
        )}
        <LoginField
          type="password"
          name="loginPassword"
          placeholder="Mot de passe"
          manageChange={changeLoginField}
          value={password}
        />
        {loginValidation.map(
          (inner) => inner.value.length === 0
          && inner.type === 'required'
          && inner.path === 'password'
            && (
              <span key={password} className="login-form-input-validation">
                {inner.message}
              </span>
            ),
        )}

        <button type="submit" className="login-form-submit">
          Connexion
        </button>
      </form>

      <NavLink
        to="/identity/forgot-password"
        className="login-forgot-password"
      >
        Mot passe oublié ?
      </NavLink>

      {logged && <Redirect to={`/${cityName}/home`} />}
    </div>
  );
};

Login.propTypes = {
  cityName: PropTypes.string.isRequired,
  /** value for mail */
  email: PropTypes.string.isRequired,
  /** value for password */
  password: PropTypes.string.isRequired,
  /** called when onChange event is received by an input, two parameters :
   * - new value
   * - name
   */
  changeLoginField: PropTypes.func.isRequired,
  /** called when the form is submitted */
  handleLoginCreate: PropTypes.func.isRequired,

  // Fonction d'envoi de l'objet erreur des input de yup
  loginInputErrorMessage: PropTypes.func.isRequired,

  loginValidation: PropTypes.arrayOf(
    PropTypes.shape({
      // Type d'erreur du shema yup
      type: PropTypes.string,
      // Type d'erreur du shema yup
      value: PropTypes.string,
      // Nom de l'input match avec yup
      path: PropTypes.string,
      // Message d'erreur de l'input avec yup
      message: PropTypes.string,
    }),
  ).isRequired,

  // Si logged redirection vers la home page
  logged: PropTypes.bool.isRequired,

  // Réponse message d'erreur du serveur
  serverLoginValidation: PropTypes.string.isRequired,

  // Réponse du submit status 400
  serverErrorseStatus: PropTypes.number.isRequired,
};

// == Export
export default Login;
