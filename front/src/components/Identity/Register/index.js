import React from 'react';

import PropTypes from 'prop-types';

import { userRegisterSchema } from 'src/Validations/UserRegisterValidations';

import { Redirect } from 'react-router-dom';

// == Import
import RegisterField from './RegisterField';
import RegisterFieldCheckBox from './RegisterFieldCheckBox';

import './register.scss';

// == Composant
const Register = ({
  cityName,
  firstName,
  lastName,
  city,
  postalCode,
  phoneNumber,
  address,
  email,
  password,
  confirmPassword,
  conditionsPrivacyPolicy,
  changeRegisterField,
  handleRegisterCreate,
  registerInputErrorMessage,
  isValidConfirmPassword,
  registerValidationConfirmPassword,
  registerValidation,
  serverRegisterValidation,
  registred,
  serverErrorseStatus,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();

    const formData = {
      firstName: evt.target[0].value,
      lastName: evt.target[1].value,
      address: evt.target[2].value,
      postalCode: evt.target[3].value,
      city: evt.target[4].value,
      phoneNumber: evt.target[5].value,
      email: evt.target[6].value,
      password: evt.target[7].value,
      confirmPassword: evt.target[8].value,
    };

    // Si isValid est égale à true envoie du formulaire
    const isValid = userRegisterSchema.isValidSync(formData);
    if (isValid === true) {
      handleRegisterCreate();
    }
    // console.log(isValid);

    const inputPassword = password.length > 0;
    isValidConfirmPassword(inputPassword);

    // Fonction validate qui retourne les erreurs yup des input
    // avec abortEarly pour avoir toutes les erreurs dans un tableau inner
    userRegisterSchema
      .validate(formData, { abortEarly: false })
      .then(() => {
        // Success
      })
      .catch((err) => {
        // console.log(err);
        // Récupère les erreurs yup des input (err.inner)
        registerInputErrorMessage(err.inner);
      });
  };

  return (
    <div className="register">
      <form autoComplete="off" className="register-form" onSubmit={handleSubmit}>
        {serverErrorseStatus === 400 && (
          <div className="register-form-input-alert">
            <span>{serverRegisterValidation}</span>
          </div>
        )}
        <RegisterField
          type="text"
          name="firstName"
          placeholder="Prénom"
          manageChange={changeRegisterField}
          value={firstName}
        />
        {registerValidation.map(
          (inner) => inner.value.length === 0
            && inner.type === 'required'
            && inner.path === 'firstName'
            && (
              <span key={firstName} className="register-form-input-validation">
                {inner.message}
              </span>
            ),
        )}
        {registerValidation.map(
          (inner) => inner.value.length > 0
            && inner.type === 'matches'
            && inner.path === 'firstName'
            && (
              <span key={firstName} className="register-form-input-validation">
                {inner.message}
              </span>
            ),
        )}
        <RegisterField
          type="text"
          name="lastName"
          placeholder="Nom"
          manageChange={changeRegisterField}
          value={lastName}
        />
        {registerValidation.map(
          (inner) => inner.value.length === 0
            && inner.type === 'required'
            && inner.path === 'lastName'
            && (
              <span key={lastName} className="register-form-input-validation">
                {inner.message}
              </span>
            ),
        )}
        {registerValidation.map(
          (inner) => inner.value.length > 0
            && inner.type === 'matches'
            && inner.path === 'lastName'
            && (
              <span key={lastName} className="register-form-input-validation">
                {inner.message}
              </span>
            ),
        )}
        <RegisterField
          type="text"
          name="address"
          placeholder="Adresse"
          manageChange={changeRegisterField}
          value={address}
        />
        {registerValidation.map(
          (inner) => inner.value.length === 0
            && inner.type === 'required'
            && inner.path === 'address'
            && (
              <span key={address} className="register-form-input-validation">
                {inner.message}
              </span>
            ),
        )}
        {registerValidation.map(
          (inner) => inner.value.length > 0
            && inner.type === 'matches'
            && inner.path === 'address'
            && (
              <span key={address} className="register-form-input-validation">
                {inner.message}
              </span>
            ),
        )}
        <RegisterField
          name="postalCode"
          placeholder="Code postal"
          manageChange={changeRegisterField}
          value={postalCode}
        />
        {registerValidation.map(
          (inner) => inner.value.length === 0
            && inner.type === 'required'
            && inner.path === 'postalCode'
            && (
              <span key={postalCode} className="register-form-input-validation">
                {inner.message}
              </span>
            ),
        )}
        {registerValidation.map(
          (inner) => inner.value.length > 0
            && inner.type === 'matches'
            && inner.path === 'postalCode'
            && (
              <span key={postalCode} className="register-form-input-validation">
                {inner.message}
              </span>
            ),
        )}
        <RegisterField
          type="text"
          name="city"
          placeholder="Ville"
          manageChange={changeRegisterField}
          value={city}
        />
        {registerValidation.map(
          (inner) => inner.value.length === 0
            && inner.type === 'required'
            && inner.path === 'city'
            && (
              <span key={city} className="register-form-input-validation">
                {inner.message}
              </span>
            ),
        )}
        {registerValidation.map(
          (inner) => inner.value.length > 0
            && inner.type === 'matches'
            && inner.path === 'city'
            && (
              <span key={city} className="register-form-input-validation">
                {inner.message}
              </span>
            ),
        )}
        <RegisterField
          type="tel"
          name="phoneNumber"
          placeholder="Numéro de téléphone"
          manageChange={changeRegisterField}
          value={phoneNumber}
        />
        {registerValidation.map(
          (inner) => inner.value.length === 0
            && inner.type === 'required'
            && inner.path === 'phoneNumber'
            && (
              <span key={phoneNumber} className="register-form-input-validation">
                {inner.message}
              </span>
            ),
        )}
        {registerValidation.map(
          (inner) => inner.value.length > 0
            && inner.type === 'matches'
            && inner.path === 'phoneNumber'
            && (
              <span key={phoneNumber} className="register-form-input-validation">
                {inner.message}
              </span>
            ),
        )}
        <RegisterField
          type="email"
          name="email"
          placeholder="Adresse Email"
          manageChange={changeRegisterField}
          value={email}
        />
        {registerValidation.map(
          (inner) => inner.value.length === 0
            && inner.type === 'required'
            && inner.path === 'email'
            && (
              <span key={email} className="register-form-input-validation">
                {inner.message}
              </span>
            ),
        )}
        {registerValidation.map(
          (inner) => inner.value.length > 0
            && inner.type === 'matches'
            && inner.path === 'email'
            && (
              <span key={email} className="register-form-input-validation">
                {inner.message}
              </span>
            ),
        )}
        <RegisterField
          type="password"
          name="password"
          placeholder="Mot de passe"
          manageChange={changeRegisterField}
          value={password}
        />
        {registerValidation.map(
          (inner) => inner.value.length === 0
            && inner.type === 'required'
            && inner.path === 'password'
            && (
              <span key={password} className="register-form-input-validation">
                {inner.message}
              </span>
            ),
        )}
        {registerValidation.map(
          (inner) => inner.value.length > 0
            && inner.type === 'matches'
            && inner.path === 'password'
            && (
              <span key={password} className="register-form-input-validation">
                {inner.message}
              </span>
            ),
        )}
        <RegisterField
          type="password"
          name="confirmPassword"
          placeholder="Confirmer mot de passe"
          manageChange={changeRegisterField}
          value={confirmPassword}
        />
        {registerValidationConfirmPassword === true && (
          <span key={confirmPassword} className="register-form-input-validation">
            Veuillez confirmer votre mot de passe
          </span>
        )}
        {registerValidation.map(
          (inner) => inner.value.length > 0
            && inner.type === 'matches'
            && inner.path === 'confirmPassword'
            && (
              <span key={confirmPassword} className="register-form-input-validation">
                {inner.message}
              </span>
            ),
        )}

        <RegisterFieldCheckBox
          type="checkbox"
          name="conditionsPrivacyPolicy"
          manageChange={changeRegisterField}
          value={conditionsPrivacyPolicy}
        />

        <button type="submit" className="register-form-submit">
          S'inscire
        </button>
      </form>

      {registred && <Redirect to={`/${cityName}/home`} />}
    </div>
  );
};

Register.propTypes = {
  cityName: PropTypes.string.isRequired,
  // value for firstName
  firstName: PropTypes.string.isRequired,
  // value for lasname
  lastName: PropTypes.string.isRequired,
  // value for phoneNumber
  phoneNumber: PropTypes.string.isRequired,
  // value for city
  city: PropTypes.string.isRequired,
  // value for city
  address: PropTypes.string.isRequired,
  // value for city
  postalCode: PropTypes.string.isRequired,
  // value for mail
  email: PropTypes.string.isRequired,
  // value for password
  password: PropTypes.string.isRequired,
  // value for confirmPassword
  confirmPassword: PropTypes.string.isRequired,
  // conditionsPrivacyPolicy
  conditionsPrivacyPolicy: PropTypes.bool.isRequired,
  /** called when onChange event is received by an input, two parameters :
   * - new value
   * - name
   */
  changeRegisterField: PropTypes.func.isRequired,
  // called when the form is submitted
  handleRegisterCreate: PropTypes.func.isRequired,

  // Fonction d'envoi de l'objet erreur des input de yup
  registerInputErrorMessage: PropTypes.func.isRequired,

  // Envoie true si l'input password est renseigné
  isValidConfirmPassword: PropTypes.func.isRequired,

  // Récupérere la valeur true ou false de l'input password
  registerValidationConfirmPassword: PropTypes.bool.isRequired,

  registerValidation: PropTypes.arrayOf(
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

  // Registred redirection vers le compte utilisateur
  registred: PropTypes.bool.isRequired,

  // Réponse message d'erreur du serveur
  serverRegisterValidation: PropTypes.string.isRequired,

  // Réponse du submit status 400
  serverErrorseStatus: PropTypes.number.isRequired,
};

// == Export
export default Register;
