// == Import
import React from 'react';

// Prop type
import PropTypes from 'prop-types';

import { Field, ErrorMessage } from 'formik';

import TextError from 'src/components/templates/Form/TextError';

// == Composant
const Input = ({
  type,
  label,
  name,
  placeholder,
  value,
  formInputField,
}) => {
  const handleChange = (evt) => {
    formInputField(evt.target.value, name);
  };

  return (
    <div className="form-control-input">
      <label htmlFor={name}>{label}</label>
      <Field
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  formInputField: PropTypes.func.isRequired,
};

export default Input;
