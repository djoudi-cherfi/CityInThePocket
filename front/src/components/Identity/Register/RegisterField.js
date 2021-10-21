import React from 'react';

import PropTypes from 'prop-types';

// == Composant
const RegisterField = ({ value, type, name, placeholder, manageChange }) => {
  const handleChange = (evt) => {
    manageChange(evt.target.value, name);
  };
  return (
    <label htmlFor={name} className="registerfield-input-label">
      <input
        className="registerfield-input"
        value={value}
        onChange={handleChange}
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </label>
  );
};

RegisterField.propTypes = {
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
RegisterField.defaultProps = {
  value: '',
  type: 'text',
};

// == Export
export default RegisterField;
