// == Import
import React from 'react';

// Prop type
import PropTypes from 'prop-types';

import { Field, ErrorMessage } from 'formik';

import TextError from 'src/components/templates/Form/TextError';

// == Composant
const RadioButton = ({
  type,
  label,
  name,
  submitName,
  values,
  formRadioOptionUpdate,
  formRadioOptionAdd,
}) => {
  const handleChange = (evt) => {
    const array = {
      id: evt.target.id,
      value: evt.target.value,
      checked: evt.target.checked,
    };

    formRadioOptionUpdate(array, name);

    if (evt.target.checked === true) {
      formRadioOptionAdd(array, submitName);
    }
  };

  return (
    <div className="form-control-radiobutton">
      <label htmlFor={name}>{label}</label>
      {values.map((option) => (
        <React.Fragment key={option.key}>
          <Field
            key={option.key}
            id={option.key}
            type={type}
            name={name}
            value={option.value}
            onChange={handleChange}
            checked={option.checked}
          />
          <label className="form-control-radiobutton-labels" htmlFor={option.key}>{option.value}</label>
        </React.Fragment>
      ))}
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

RadioButton.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  submitName: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired,
  formRadioOptionUpdate: PropTypes.func.isRequired,
  formRadioOptionAdd: PropTypes.func.isRequired,
};

export default RadioButton;
