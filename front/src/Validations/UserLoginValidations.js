import * as Yup from 'yup';

export const userLoginSchema = Yup.object().shape({
  password: Yup
    .string()
    .matches()
    .required('Veuillez entrer votre mot de passe'),
  email: Yup
    .string()
    .email()
    .matches()
    .required('Veuillez entrer votre email'),
});

export default userLoginSchema;
