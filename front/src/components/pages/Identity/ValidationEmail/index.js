import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

// == Head html informations
import { Helmet } from 'react-helmet';

import { useParams, useNavigate } from 'react-router-dom';

import './validationemail.scss';

// == Composant
const ValidationEmail = ({
  handleValidationEmailSent,
  validationEmailStatus,
  handleValidationEmailStatusReset,
}) => {
  const { id, slug } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (validationEmailStatus) {
      const timer = setTimeout(() => {
        handleValidationEmailStatusReset();
        navigate('/identity/login-register');
      }, 4000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [validationEmailStatus === true]);

  return (
    <div className="validationemail">
      <Helmet>
        <title>Email validation</title>
        <meta name="description" content="Page email validation" />
      </Helmet>
      {!validationEmailStatus ? (
        <div className="validationemail-message">
          <h2 className="validationemail-message-title">Valider votre compte</h2>
          <button
            type="button"
            className="validationemail-message-button"
            onClick={() => {
              handleValidationEmailSent(id, slug);
            }}
          >
            Validation
          </button>
        </div>
      ) : (
        <h2>Votre compte est validé</h2>
      )}
    </div>
  );
};

ValidationEmail.propTypes = {
  handleValidationEmailSent: PropTypes.func.isRequired,
  validationEmailStatus: PropTypes.bool.isRequired,
  handleValidationEmailStatusReset: PropTypes.func.isRequired,
};

// == Export
export default ValidationEmail;
