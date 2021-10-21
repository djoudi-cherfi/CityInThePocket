import React from 'react';

import PropTypes from 'prop-types';

// == Composant
const ForgotField = ({ value, type, name, placeholder, manageChange }) => {
  const handleChange = (evt) => {
    manageChange(evt.target.value, name);
  };
  return (
    <input
      className="forgotpassword-form-input"
      value={value}
      onChange={handleChange}
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
};

ForgotField.propTypes = {
  /** text used as value for the input */
  value: PropTypes.string,
  /** type of the input */
  type: PropTypes.string,
  /** text used as name for the input (and also used as id, with a prefix) */
  name: PropTypes.string.isRequired,
  /** text used as placeholder and label */
  placeholder: PropTypes.string.isRequired,
  /** called when onChange event is received by the input, two parameters :
   * - new value
   * - name
   */
  manageChange: PropTypes.func.isRequired,
};

// Valeurs par défaut pour les props
ForgotField.defaultProps = {
  value: '',
  type: 'text',
};

// == Export
export default ForgotField;
