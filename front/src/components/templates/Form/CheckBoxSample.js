// == Import
import React from 'react';

// Prop type
import PropTypes from 'prop-types';

import { Field, ErrorMessage } from 'formik';

import TextError from 'src/components/templates/Form/TextError';

// == Composant
const CheckBoxSample = ({
  type,
  label,
  name,
  value,
  formInputField,
}) => {
  const handleChange = (evt) => {
    formInputField(evt.target.checked, name);
  };

  return (
    <div className="form-control-checkbox">
      <Field
        id={name}
        type={type}
        name={name}
        onChange={handleChange}
        checked={value}
      />
      <label className="form-control-checkbox-labels" htmlFor={name}>{label}</label>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

CheckBoxSample.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  formInputField: PropTypes.func.isRequired,
};

export default CheckBoxSample;
