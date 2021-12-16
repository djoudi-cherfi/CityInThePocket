import * as Yup from 'yup';
import axios from 'axios';

const firstnameRegExp = /^(?=.*[a-zA-Z])[a-zA-Z ']{1,}$/;
const lastnameRegExp = /^(?=.*[a-zA-Z])[a-zA-Z ']{1,}$/;
const addressRegExp = /^(?=.*[a-zA-Z])[a-zA-Z '0-9]{1,}$/;
const postalcodeRegExp = /^\d{5}$/;
const phonenumberRegExp = /^(0)[1-9]([0-9]){8}$/;
const emailRegExp = /^([A-Za-z0-9_\-.])+@([A-Za-z_\-.])+\.([A-Za-z]{2,3})$/;
const passwordRegExp = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,30}$/;

// == properties for schema
const properties = {
  // Register
  firstName: Yup
    .string()
    .matches(firstnameRegExp,
      'Le prénom doit contenir des lettres.')
    .required('Veuillez renseigner votre prénom.'),

  lastName: Yup
    .string()
    .matches(lastnameRegExp,
      'Le nom doit contenir des lettres.')
    .required('Veuillez renseigner votre nom.'),

  address: Yup
    .string()
    .matches(addressRegExp,
      'addresse doit contenir au moins 1 chiffre')
    .required('Veuillez entrer votre adresse'),

  postalCode: Yup
    .string()
    .matches(postalcodeRegExp,
      'Le code postal doit contenir 5 chiffres')
    .length(5)
    .required('Veuillez entrer votre code postal'),

  city: Yup
    .string()
    .required('Veuillez renseigner votre ville'),

  phoneNumber: Yup
    .string()
    .matches(phonenumberRegExp,
      'Le numéro de téléphone doit contenir 10 chiffres')
    .length(10)
    .required('Veuillez renseigner votre numéro de téléphone'),

  email: Yup
    .string()
    .email()
    .test('checkSingleEmail', 'Cette email est déjà utilisé', async (email) => {
      let validEmail = true;
      try {
        if (!email) {
          return validEmail;
        }
        const { data: { isUnique } } = await axios.post(
          `${API_URL}/user/validemail`, { email: email },
        );
        validEmail = isUnique;
      }
      catch (error) {
        console.error(error);
      }
      return validEmail;
    })
    .matches(emailRegExp,
      'Ne sont autorisés que les lettres (de A à Z), les chiffres (de 0 à 9), les tirets (- et _) et les points (.)')
    .required('Veuillez entrer votre email'),

  password: Yup
    .string()
    .matches(passwordRegExp,
      'Le mot de passe doit contenir au moins 8 caractères et 10 caractères maximum, un nombre et une majuscule')
    .required('Veuillez entrer votre mot de passe'),

  confirmPassword: Yup
    .string()
    .required('Veuillez confirmer votre mot de passe')
    .oneOf([Yup
      .ref('password'), null], 'Les mots de passe ne correspondent pas')
    .required('Veuillez confirmer votre mot de passe'),

  conditionsPrivacyPolicy: Yup
    .boolean()
    .oneOf([true], "Vous devez accepter la politique de confidentialité et les conditions d'utilisation"),

  // Login
  loginEmail: Yup
    .string()
    .email()
    .matches(emailRegExp,
      'Ne sont autorisés que les lettres (de A à Z), les chiffres (de 0 à 9), les tirets (- et _) et les points (.)')
    .test('checkSingleEmail', 'Cette email n\'est pas utilisé', async (email) => {
      let validEmail = true;
      try {
        if (!email) {
          return validEmail;
        }
        const { data: { isUnique } } = await axios.post(
          `${API_URL}/user/validemail`, { email: email },
        );
        validEmail = !isUnique;
      }
      catch (error) {
        console.error(error);
      }
      return validEmail;
    })
    .required('Veuillez entrer votre email'),

  loginPassword: Yup
    .string()
    .matches(passwordRegExp,
      'Le mot de passe doit contenir au moins 8 caractères et 10 caractères maximum, un nombre et une majuscule')
    .required('Veuillez entrer votre mot de passe'),

  // Update password
  updatePassword: Yup
    .string()
    .matches(passwordRegExp,
      'Le mot de passe doit contenir au moins 8 caractères et 10 caractères maximum, un nombre et une majuscule')
    .required('Veuillez entrer votre mot de passe'),

  confirmUpdatePassword: Yup
    .string()
    .required('Veuillez confirmer votre mot de passe')
    .oneOf([Yup
      .ref('updatePassword'), null], 'Les mots de passe ne correspondent pas')
    .required('Veuillez confirmer votre mot de passe'),

  // Update email
  updateEmail: Yup
    .string()
    .email()
    .matches(emailRegExp,
      'Ne sont autorisés que les lettres (de A à Z), les chiffres (de 0 à 9), les tirets (- et _) et les points (.)')
    .required('Veuillez entrer votre email'),

  confirmUpdateEmail: Yup
    .string()
    .email()
    .matches(emailRegExp,
      'Ne sont autorisés que les lettres (de A à Z), les chiffres (de 0 à 9), les tirets (- et _) et les points (.)')
    .oneOf([Yup
      .ref('updateEmail'), null], "L'email ne correspondent pas")
    .required('Veuillez confirmer votre email'),

  // Forgot password
  forgotPassword: Yup
    .string()
    .email()
    .matches(emailRegExp,
      'Ne sont autorisés que les lettres (de A à Z), les chiffres (de 0 à 9), les tirets (- et _) et les points (.)')
    .required('Veuillez entrer votre email'),

  // Reset password
  resetPassword: Yup
    .string()
    .matches(passwordRegExp,
      'Le mot de passe doit contenir au moins 8 caractères et 10 caractères maximum, un nombre et une majuscule')
    .required('Veuillez entrer votre mot de passe'),

  confirmResetPassword: Yup
    .string()
    .required('Veuillez confirmer votre mot de passe')
    .oneOf([Yup
      .ref('resetPassword'), null], 'Les mots de passe ne correspondent pas')
    .required('Veuillez confirmer votre mot de passe'),

  // Template
  description: Yup
    .string()
    .required('Veuillez ajouter une description'),

  selectOptions: Yup
    .array()
    .min(1, 'Veuillez selectionner une option'),

  radioOptions: Yup
    .array()
    .min(1, 'Veuillez choisir une option'),

  checkboxMultiOptions: Yup
    .array()
    .min(1, 'Veuillez choisir au moins une option'),

  date: Yup
    .date()
    .required('Veuillez selectionner une date')
    .nullable(),
};

// Function filters properties and returns a custom schema
export const filterValidation = (...schemas) => {
  const foudProperties = schemas.reduce((result, key) => (
    { ...result, [key]: properties[key] }), {});

  // Return custom schema
  return Yup.object(foudProperties);
};

export default { filterValidation };
