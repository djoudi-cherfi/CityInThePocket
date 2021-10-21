import * as Yup from 'yup';

const passwordRegExp = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,30}$/;
const emailRegExp = /^([A-Za-z0-9_\-.])+@([A-Za-z_\-.])+\.([A-Za-z]{2,3})$/;
const phonenumberRegExp = /^(0)[1-9]([0-9]){8}$/;
const postalcodeRegExp = /^\d{5}$/;
const addressRegExp = /^(?=.*[a-zA-Z])[a-zA-Z '0-9]{1,}$/;
const lastnameRegExp = /^(?=.*[a-zA-Z])[a-zA-Z ']{1,}$/;
const firstnameRegExp = /^(?=.*[a-zA-Z])[a-zA-Z ']{1,}$/;

export const userRegisterSchema = Yup.object().shape({
  confirmPassword: Yup
    .string()
    .required('Veuillez confirmer votre mot de passe')
    .oneOf([Yup
      .ref('password'), null], 'Les mots de passe ne correspondent pas'),
  password: Yup
    .string()
    .matches(passwordRegExp,
      'Le mot de passe doit contenir au moins 8 caractères et 10 caractères maximum, un nombre et une majuscule')
    .required('Veuillez entrer votre mot de passe'),
  email: Yup
    .string()
    .email()
    .matches(emailRegExp,
      'Ne sont autorisés que les lettres (de A à Z), les chiffres (de 0 à 9), les tirets (- et _) et les points (.)')
    .required('Veuillez entrer votre email'),
  phoneNumber: Yup
    .string()
    .matches(phonenumberRegExp,
      'Le numéro de téléphone doit contenir 10 chiffres')
    .length(10)
    .required('Veuillez renseigner votre téléphone'),
  city: Yup
    .string()
    .required('Veuillez renseigner votre ville'),
  postalCode: Yup
    .string()
    .matches(postalcodeRegExp,
      'Le code postal doit contenir 5 chiffres')
    .length(5)
    .required('Veuillez entrer votre code postal'),
  address: Yup
    .string()
    .matches(addressRegExp,
      'addresse doit contenir au moins 1 chiffre')
    .required('Veuillez entrer votre adresse'),
  lastName: Yup
    .string()
    .matches(lastnameRegExp,
      'Le nom doit contenir des lettres')
    .required('Veuillez renseigner votre nom.'),
  firstName: Yup
    .string()
    .matches(firstnameRegExp,
      'Le prénom doit contenir des lettres.')
    .required('Veuillez renseigner votre prénom.'),
});

export default userRegisterSchema;
