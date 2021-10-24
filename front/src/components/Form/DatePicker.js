// == Import
import React from 'react';

// Prop type
import PropTypes from 'prop-types';

import DatePicker from 'react-datepicker';

import fr from 'date-fns/locale/fr';

import 'react-datepicker/dist/react-datepicker.css';

import { ErrorMessage } from 'formik';

import TextError from 'src/components/Form/TextError';

// == Composant
const DataPicker = ({
  label,
  name,
  formInputField,
  value,
}) => {
  const handleChange = (dateValue) => {
    formInputField(dateValue, name);
  };

  const handleSelected = () => {
    if (value === null) {
      return value;
    }
    return new Date(value);
  };

  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  return (
    <div className="form-control-datepicker">
      <label htmlFor={name}>{label}</label>
      <DatePicker
        id={name}
        name={name}
        selected={handleSelected()}
        onChange={handleChange}
        dateFormat="dd/MM/yyyy"
        locale={fr}
        minDate={new Date()}
        maxDate={new Date('2050-12-29T23:00:00.000Z')}
        filterDate={isWeekday}
        isClearable
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

DataPicker.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  formInputField: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.string,
  ]),
};

DataPicker.defaultProps = {
  value: null,
};

export default DataPicker;
