// == Import
import React from 'react';

import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import classNames from 'classnames';

// Media query pour les composants react
import MediaQuery from 'react-responsive';

import { breakpoint } from 'src/utils/mediaQuery';

import './navidentitysidebar.scss';

// == Composant
const NavIdentitySidebar = ({
  cityName,
  headermarket,
  HandleToggleIdentityOpen,
  HandleToggleIdentityOpenReset,
  toggleIdentityOpen,
  logged,
  loggedMessage,
  handleLogout,
}) => {
  const identityOpen = classNames('navidentity-sidebar', {
    open: toggleIdentityOpen,
  });

  const handleMediaQueryChange = (event) => {
    if (event === false) {
      HandleToggleIdentityOpenReset();
    }
  };

  return (
    <>
      {!logged && (
        <div className={identityOpen}>
          <MediaQuery maxWidth={breakpoint.laptopMax} onChange={handleMediaQueryChange}>
            <ul className="navidentity-sidebar-list">
              {headermarket && (
                <li className="navidentity-sidebar-list-item">
                  <NavLink
                    to="/"
                    className="navidentity-sidebar-list-item-link"
                    onClick={() => {
                      HandleToggleIdentityOpen();
                    }}
                  >
                    Marketplaces
                  </NavLink>
                </li>
              )}
              <li className="navidentity-sidebar-list-item">
                <NavLink
                  to="/identity/login-register"
                  className="navidentity-sidebar-list-item-link"
                  activeClassName="current"
                  onClick={() => {
                    HandleToggleIdentityOpen();
                  }}
                >
                  Me connecter
                </NavLink>
              </li>
            </ul>
          </MediaQuery>

          <MediaQuery minWidth={breakpoint.laptopMin}>
            <ul className="navidentity-sidebar-list">
              {headermarket && (
                <li className="navidentity-sidebar-list-item">
                  <NavLink
                    to="/"
                    className="navidentity-sidebar-list-item-link"
                    onClick={() => {
                      HandleToggleIdentityOpen();
                    }}
                  >
                    Marketplaces
                  </NavLink>
                </li>
              )}
              <li className="navidentity-sidebar-list-item">
                <NavLink
                  to="/identity/login-register"
                  className="navidentity-sidebar-list-item-link"
                  activeClassName="current"
                  onClick={() => {
                    HandleToggleIdentityOpen();
                  }}
                >
                  Me connecter
                </NavLink>
              </li>
            </ul>
          </MediaQuery>
        </div>
      )}

      {logged && (
        <div className={identityOpen}>
          <MediaQuery maxWidth={breakpoint.laptopMax} onChange={handleMediaQueryChange}>
            <div className="navidentity-sidebar-message">
              <span>Vous êtes connecté en tant que :</span>
              <span className="navidentity-sidebar-message-link-name">
                <NavLink
                  to={`/${cityName}/sellerprofil`}
                  className="navidentity-sidebar-message-link"
                  onClick={() => {
                    HandleToggleIdentityOpen();
                  }}
                >
                  {loggedMessage}
                </NavLink>
              </span>
            </div>

            <ul className="navidentity-sidebar-list">
              <li className="navidentity-sidebar-list-item">
                <NavLink
                  to="/account/a-propos-de-vous"
                  className="navidentity-sidebar-list-item-link"
                  activeClassName="current"
                  onClick={() => {
                    HandleToggleIdentityOpen();
                  }}
                >
                  À propos de vous
                </NavLink>
              </li>
              <li className="navidentity-sidebar-list-item">
                <NavLink
                  to="/account/ma-boutique"
                  className="navidentity-sidebar-list-item-link"
                  activeClassName="current"
                  onClick={() => {
                    HandleToggleIdentityOpen();
                  }}
                >
                  Ma boutique
                </NavLink>
              </li>
              <li className="navidentity-sidebar-list-item">
                <NavLink
                  to="/account/mot-de-passe"
                  className="navidentity-sidebar-list-item-link"
                  activeClassName="current"
                  onClick={() => {
                    HandleToggleIdentityOpen();
                  }}
                >
                  Mot de passe
                </NavLink>
              </li>
              <li className="navidentity-sidebar-list-item">
                <NavLink
                  to="/account/email"
                  className="navidentity-sidebar-list-item-link"
                  activeClassName="current"
                  onClick={() => {
                    HandleToggleIdentityOpen();
                  }}
                >
                  E-mail
                </NavLink>
              </li>
              <li className="navidentity-sidebar-list-item">
                <NavLink
                  to="/account/fermer-le-compte"
                  className="navidentity-sidebar-list-item-link"
                  activeClassName="current"
                  onClick={() => {
                    HandleToggleIdentityOpen();
                  }}
                >
                  Fermer le compte
                </NavLink>
              </li>

              {headermarket && (
                <li className="navidentity-sidebar-list-item">
                  <NavLink
                    to="/"
                    className="navidentity-sidebar-list-item-link"
                    onClick={() => {
                      HandleToggleIdentityOpen();
                    }}
                  >
                    Marketplaces
                  </NavLink>
                </li>
              )}

              <li className="navidentity-sidebar-list-item">
                <NavLink
                  to="/"
                  className="navidentity-sidebar-list-item-link"
                  onClick={() => {
                    handleLogout();
                  }}
                >
                  Me déconnecter
                </NavLink>
              </li>
            </ul>
          </MediaQuery>

          <MediaQuery minWidth={breakpoint.laptopMin}>
            <div className="navidentity-sidebar-message">
              <span>Vous êtes connecté en tant que :</span>
              <span className="navidentity-sidebar-message-link-name">
                <NavLink
                  to={`/${cityName}/sellerprofil`}
                  className="navidentity-sidebar-message-link"
                >
                  {loggedMessage}
                </NavLink>
              </span>
            </div>

            <ul className="navidentity-sidebar-list">
              {headermarket && (
                <li className="navidentity-sidebar-list-item">
                  <NavLink
                    to="/"
                    className="navidentity-sidebar-list-item-link"
                  >
                    Marketplaces
                  </NavLink>
                </li>
              )}

              <li className="navidentity-sidebar-list-item">
                <NavLink
                  to="/account/dashboard"
                  className="navidentity-sidebar-list-item-link"
                  activeClassName="current"
                >
                  Mon compte
                </NavLink>
              </li>

              <li className="navidentity-sidebar-list-item">
                <NavLink
                  to="/"
                  className="navidentity-sidebar-list-item-link"
                  onClick={() => {
                    handleLogout();
                  }}
                >
                  Me déconnecter
                </NavLink>
              </li>
            </ul>
          </MediaQuery>
        </div>
      )}
    </>
  );
};

NavIdentitySidebar.propTypes = {
  cityName: PropTypes.string.isRequired,
  headermarket: PropTypes.bool.isRequired,
  HandleToggleIdentityOpen: PropTypes.func.isRequired,
  HandleToggleIdentityOpenReset: PropTypes.func.isRequired,
  toggleIdentityOpen: PropTypes.bool.isRequired,
  logged: PropTypes.bool.isRequired,
  /** message displayed when "connected" */
  loggedMessage: PropTypes.string,
  /** called when the "Déconnexion" button is clicked */
  handleLogout: PropTypes.func.isRequired,
};

NavIdentitySidebar.defaultProps = {
  loggedMessage: 'Connecté',
};

// == Export
export default NavIdentitySidebar;
