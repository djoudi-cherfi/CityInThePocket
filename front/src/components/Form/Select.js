// == Import
import React from 'react';

// Prop type
import PropTypes from 'prop-types';

import { Field, ErrorMessage } from 'formik';

import TextError from 'src/components/Form/TextError';

// == Composant
const Select = ({
  label,
  name,
  submitName,
  values,
  formSelectOptionUpdate,
  formSelectOptionAdd,
}) => {
  const handleChange = (evt) => {
    const array = {
      id: evt.target.selectedOptions[0].id,
      value: evt.target.selectedOptions[0].value,
      selected: evt.target.selectedOptions[0].selected,
    };

    formSelectOptionUpdate(array, name);

    if (evt.target.selectedOptions[0].selected === true) {
      formSelectOptionAdd(array, submitName);
    }
  };

  const valueSelected = values.filter((option) => option.selected === true);

  return (
    <div className="form-control-select">
      <label htmlFor={name}>{label}</label>
      <Field
        as="select"
        id={name}
        name={name}
        onChange={handleChange}
        value={valueSelected[0].value}
      >
        {values.map((option) => (
          <option
            key={option.key}
            id={option.key}
            value={option.value}
          >
            {option.value}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  submitName: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired,
  formSelectOptionUpdate: PropTypes.func.isRequired,
  formSelectOptionAdd: PropTypes.func.isRequired,
};

export default Select;
