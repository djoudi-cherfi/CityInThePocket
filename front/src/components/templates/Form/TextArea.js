// == Import
import React from 'react';

// Prop type
import PropTypes from 'prop-types';

import { Field, ErrorMessage } from 'formik';

import TextError from 'src/components/templates/Form/TextError';

// == Composant
const TextArea = ({
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
    <div className="form-control-textarea">
      <label htmlFor={name}>{label}</label>
      <Field
        as="textarea"
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  formInputField: PropTypes.func.isRequired,
};

export default TextArea;
