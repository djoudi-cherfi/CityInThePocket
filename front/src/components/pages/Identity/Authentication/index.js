// == Import
import React from 'react';

import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import { Helmet } from 'react-helmet';

import classNames from 'classnames';

import './authentication.scss';
// == Import
import Login from 'src/containers/pages/Identity/Authentication/Login';
import Register from 'src/containers/pages/Identity/Authentication/Register';

// == Composant
const Authentication = ({
  toggleLoginRegister,
  handleToggleLogin,
  handleToggleRegister,
}) => {
  const colorBtnLogin = classNames('authentication-container-button-login', {
    switch: toggleLoginRegister,
  });

  const colorBtnRegister = classNames('authentication-container-button-register', {
    switch: toggleLoginRegister,
  });

  return (
    <div className="authentication">
      <Helmet>
        <title>{toggleLoginRegister ? 'Register' : 'Login'}</title>
        <meta name="description" content={toggleLoginRegister ? 'login' : 'register'} />
      </Helmet>

      <div className="authentication-container">
        <div className="authentication-container-button">
          <NavLink
            to="/identity/login-register"
            className={colorBtnLogin}
            onClick={() => {
              handleToggleLogin();
            }}
          >
            Connexion
          </NavLink>

          <NavLink
            to="/identity/login-register"
            className={colorBtnRegister}
            onClick={() => {
              handleToggleRegister();
            }}
          >
            Inscription
          </NavLink>
        </div>

        {toggleLoginRegister && (
          <Register />
        )}
        {!toggleLoginRegister && (
          <Login />
        )}
      </div>
    </div>
  );
};

Authentication.propTypes = {
  toggleLoginRegister: PropTypes.bool.isRequired,
  handleToggleLogin: PropTypes.func.isRequired,
  handleToggleRegister: PropTypes.func.isRequired,
};

// == Export
export default Authentication;
