// == Import
import React from 'react';

// Prop type
import PropTypes from 'prop-types';

import { Field, ErrorMessage } from 'formik';

import TextError from 'src/components/Form/TextError';

// == Composant
const CheckBox = ({
  type,
  label,
  name,
  submitName,
  values,
  formCheckboxOptionUpdate,
  formCheckboxOptionAdd,
  formCheckboxOptionRemove,
}) => {
  const handleChange = (evt) => {
    const array = {
      id: evt.target.id,
      value: evt.target.value,
      checked: evt.target.checked,
    };

    formCheckboxOptionUpdate(array, name);

    if (evt.target.checked === true) {
      formCheckboxOptionAdd(array, submitName);
    }
    else {
      formCheckboxOptionRemove(array, submitName);
    }
  };

  return (
    <div className="form-control-checkbox">
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
          <label className="form-control-checkbox-labels" htmlFor={option.key}>{option.value}</label>
        </React.Fragment>
      ))}
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

CheckBox.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  submitName: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired,
  formCheckboxOptionUpdate: PropTypes.func.isRequired,
  formCheckboxOptionAdd: PropTypes.func.isRequired,
  formCheckboxOptionRemove: PropTypes.func.isRequired,
};

export default CheckBox;
