import * as Yup from 'yup';

const passwordRegExp =
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,30}$/;

export const resetPasswordSchema = Yup.object().shape({
  confirmPassword: Yup.string()
    .required('Veuillez confirmer votre mot de passe')
    .oneOf([Yup.ref('password'), null], 'Les mots de passe ne correspondent pas'),
  password: Yup.string()
    .matches(
      passwordRegExp,
      'Le mot de passe doit contenir au moins 8 caractères et 10 caractères maximum, un nombre et une majuscule',
    )
    .required('Veuillez entrer votre mot de passe'),
});

export default resetPasswordSchema;
