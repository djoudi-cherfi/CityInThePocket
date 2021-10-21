// == Import
import React from 'react';

// Prop type
import PropTypes from 'prop-types';

// == Composant
const TextError = (props) => (
  <div className="error">
    {props.children}
  </div>
);

TextError.propTypes = {
  children: PropTypes.string.isRequired,
};

export default TextError;
