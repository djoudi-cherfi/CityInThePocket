// == Import
import React from 'react';

// Prop type
import PropTypes from 'prop-types';

import { Formik, Form } from 'formik';

import { validationSchema } from 'src/Validations/validationSchema';

import FormControl from 'src/components/Form/FormControl';

import './form.scss';

// == Composant
const FormContainer = ({
  firstName,
  lastName,
  address,
  postalCode,
  city,
  phoneNumber,
  email,
  password,
  confirmPassword,
  conditionsPrivacyPolicy,
  loginEmail,
  loginPassword,
  description,
  selectOptions,
  selectOptionsSubmit,
  radioOptions,
  radioOptionsSubmit,
  checkboxOptions,
  checkboxOptionsSubmit,
  date,
  changeField,
  changeRadioOptionUpdate,
  changeRadioOptionAdd,
  changeSelectOptionUpdate,
  changeSelectOptionAdd,
  changeCheckboxOptionUpdate,
  changeCheckboxOptionAdd,
  changeCheckboxOptionRemove,
}) => {
  const initialValues = {
    firstName: firstName,
    lastName: lastName,
    address: address,
    postalCode: postalCode,
    city: city,
    phoneNumber: phoneNumber,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
    conditionsPrivacyPolicy: conditionsPrivacyPolicy,
    loginEmail: loginEmail,
    loginPassword: loginPassword,
    description: description,
    selectOptions: selectOptionsSubmit,
    radioOptions: radioOptionsSubmit,
    checkboxOptions: checkboxOptionsSubmit,
    date: date,
  };

  const onSubmit = (values) => {
    console.log('Form data', values);
    // console.log('Saved data', JSON.parse(JSON.stringify(values)));
  };

  return (
    <div className="form-container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize
      >
        <Form>
          <FormControl
            control="input"
            type="text"
            label="Prénom"
            name="firstName"
            placeholder="Michel"
            value={initialValues.firstName}
            manageChange={changeField}
          />
          <FormControl
            control="input"
            type="text"
            label="Nom"
            name="lastName"
            placeholder="Dupont"
            value={initialValues.lastName}
            manageChange={changeField}
          />
          <FormControl
            control="input"
            type="text"
            label="Address"
            name="address"
            placeholder="5 rue de la boetie"
            value={initialValues.address}
            manageChange={changeField}
          />
          <FormControl
            control="input"
            type="text"
            label="Code postal"
            name="postalCode"
            placeholder="75008"
            value={initialValues.postalCode}
            manageChange={changeField}
          />
          <FormControl
            control="input"
            type="text"
            label="Ville"
            name="city"
            placeholder="Paris"
            value={initialValues.city}
            manageChange={changeField}
          />
          <FormControl
            control="input"
            type="text"
            label="Numéro de télephone"
            name="phoneNumber"
            placeholder="0123456789"
            value={initialValues.phoneNumber}
            manageChange={changeField}
          />
          <FormControl
            control="input"
            type="email"
            label="Email"
            name="email"
            placeholder="email@email.com"
            value={initialValues.email}
            manageChange={changeField}
          />
          <FormControl
            control="input"
            type="password"
            label="Mot de passe"
            name="password"
            placeholder="Min8@Max10"
            value={initialValues.password}
            manageChange={changeField}
          />
          <FormControl
            control="input"
            type="password"
            label="Confirmer votre mot de passe"
            name="confirmPassword"
            placeholder="Min8@Max10"
            value={initialValues.confirmPassword}
            manageChange={changeField}
          />
          <FormControl
            control="checkboxSample"
            type="checkbox"
            label="Politique de confidentialité et conditions d'utilisation"
            name="conditionsPrivacyPolicy"
            manageChange={changeField}
            value={initialValues.conditionsPrivacyPolicy}
          />
          <FormControl
            control="input"
            type="email"
            label="Email"
            name="loginEmail"
            placeholder="email@email.com"
            value={initialValues.loginEmail}
            manageChange={changeField}
          />
          <FormControl
            control="input"
            type="password"
            label="Mot de passe"
            name="loginPassword"
            placeholder="Min8@Max10"
            value={initialValues.loginPassword}
            manageChange={changeField}
          />
          <FormControl
            control="textarea"
            label="Description"
            name="description"
            placeholder="votre description"
            value={initialValues.description}
            manageChange={changeField}
          />
          <FormControl
            control="select"
            label="Sélectionnez une option"
            name="selectOptions"
            submitName="selectOptionsSubmit"
            formSelectOptionUpdate={changeSelectOptionUpdate}
            formSelectOptionAdd={changeSelectOptionAdd}
            values={selectOptions}
          />
          <FormControl
            control="radio"
            type="radio"
            label="Radio option"
            name="radioOptions"
            submitName="radioOptionsSubmit"
            formRadioOptionUpdate={changeRadioOptionUpdate}
            formRadioOptionAdd={changeRadioOptionAdd}
            values={radioOptions}
          />
          <FormControl
            control="checkbox"
            type="checkbox"
            label="Checkbox option"
            name="checkboxOptions"
            submitName="checkboxOptionsSubmit"
            formCheckboxOptionUpdate={changeCheckboxOptionUpdate}
            formCheckboxOptionAdd={changeCheckboxOptionAdd}
            formCheckboxOptionRemove={changeCheckboxOptionRemove}
            values={checkboxOptions}
          />
          <FormControl
            control="date"
            label="Date"
            name="date"
            placeholder="Sélectionnez votre date"
            value={initialValues.date}
            manageChange={changeField}
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

FormContainer.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  postalCode: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  conditionsPrivacyPolicy: PropTypes.bool.isRequired,
  loginEmail: PropTypes.string.isRequired,
  loginPassword: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  selectOptions: PropTypes.array.isRequired,
  selectOptionsSubmit: PropTypes.array.isRequired,
  radioOptions: PropTypes.array.isRequired,
  radioOptionsSubmit: PropTypes.array.isRequired,
  checkboxOptions: PropTypes.array.isRequired,
  checkboxOptionsSubmit: PropTypes.array.isRequired,
  date: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.string,
  ]),
  changeField: PropTypes.func.isRequired,
  changeSelectOptionUpdate: PropTypes.func.isRequired,
  changeSelectOptionAdd: PropTypes.func.isRequired,
  changeRadioOptionUpdate: PropTypes.func.isRequired,
  changeRadioOptionAdd: PropTypes.func.isRequired,
  changeCheckboxOptionUpdate: PropTypes.func.isRequired,
  changeCheckboxOptionAdd: PropTypes.func.isRequired,
  changeCheckboxOptionRemove: PropTypes.func.isRequired,
};

FormContainer.defaultProps = {
  date: null,
};

export default FormContainer;
