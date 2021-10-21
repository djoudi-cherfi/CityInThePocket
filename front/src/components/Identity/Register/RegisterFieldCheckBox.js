import React from 'react';

import PropTypes from 'prop-types';

// == Composant
const RegisterCheckBox = ({
  type,
  name,
  value,
  manageChange,
}) => {
  const handleChange = (evt) => {
    manageChange(evt.target.checked, name);
  };

  return (
    <div className="registerfield-checkbox">
      <label htmlFor={name} className="registerfield-checkbox-label">
        <input
          className="registerfield-checkbox-input"
          defaultChecked={value}
          onChange={handleChange}
          type={type}
          name={name}
        />
        <span className="registerfield-checkbox-label-text">
          J'accepte les termes et conditions d'utilisation
          ainsi que la politique de confidentialité
        </span>
      </label>
    </div>
  );
};

RegisterCheckBox.propTypes = {
  /** type of the input */
  type: PropTypes.string,
  /** text used as name for the input (and also used as id, with a prefix) */
  name: PropTypes.string.isRequired,
  // value
  value: PropTypes.bool.isRequired,
  /** called when onChange event is received by the input, two parameters :
   * - new value
   * - name
   */
  manageChange: PropTypes.func.isRequired,
};

// Valeurs par défaut pour les props
RegisterCheckBox.defaultProps = {
  type: 'checkbox',
  // conditionsPrivacyPolicy: true,
};

// == Export
export default RegisterCheckBox;
