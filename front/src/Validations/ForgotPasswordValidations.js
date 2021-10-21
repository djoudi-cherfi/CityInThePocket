import * as Yup from 'yup';

const emailRegExp = /^([A-Za-z0-9_\-.])+@([A-Za-z_\-.])+\.([A-Za-z]{2,3})$/;

export const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .matches(
      emailRegExp,
      'Ne sont autorisés que les lettres (de A à Z), les chiffres (de 0 à 9), les tirets (- et _) et les points (.)',
    )
    .required('Veuillez entrer votre email'),
});

export default forgotPasswordSchema;
