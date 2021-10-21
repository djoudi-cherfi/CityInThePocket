// == Import
import React from 'react';

import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import { Helmet } from 'react-helmet';

import classNames from 'classnames';

import './identity.scss';
// == Import
import Login from 'src/containers/Identity/Login';
import Register from 'src/containers/Identity/Register';

// == Composant
const Identity = ({
  toggleLoginRegister,
  handleToggleLogin,
  handleToggleRegister,
}) => {
  const toggleBtn = classNames('identity-container-button-switch', {
    switch: toggleLoginRegister,
  });

  const colorBtnLogin = classNames('identity-container-button-login', {
    switch: toggleLoginRegister,
  });

  const colorBtnRegister = classNames('identity-container-button-register', {
    switch: toggleLoginRegister,
  });

  return (
    <div className="identity">
      <Helmet>
        <title>{toggleLoginRegister ? 'Register' : 'Login'}</title>
        <meta name="description" content={toggleLoginRegister ? 'login' : 'register'} />
      </Helmet>

      <div className="identity-container-button">
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
        {/* <div className={toggleBtn}> </div> */}
      </div>

      <div className="identity-container-form">
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

Identity.propTypes = {
  toggleLoginRegister: PropTypes.bool.isRequired,
  handleToggleLogin: PropTypes.func.isRequired,
  handleToggleRegister: PropTypes.func.isRequired,
};

// == Export
export default Identity;
