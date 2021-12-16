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
  firstname,
  hasShop,
  shopUserId,
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
                  to="/identity/login-register/login"
                  className="navidentity-sidebar-list-item-link"
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
                  to="/identity/login-register/login"
                  className="navidentity-sidebar-list-item-link"
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
              <span className="navidentity-sidebar-message-name">
                {hasShop ? (
                  <NavLink
                    to={`/${cityName.slug}/sellerprofil/${shopUserId.id}`}
                    className="navidentity-sidebar-message-name-link"
                    onClick={() => {
                      HandleToggleIdentityOpen();
                    }}
                  >
                    {firstname}
                  </NavLink>
                ) : (
                  firstname
                )}
              </span>
            </div>

            <ul className="navidentity-sidebar-list">
              <li className="navidentity-sidebar-list-item">
                <NavLink
                  to="/account/a-propos-de-vous"
                  className="navidentity-sidebar-list-item-link"
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
              <span className="navidentity-sidebar-message-name">
                {hasShop ? (
                  <NavLink
                    to={`/${cityName.slug}/sellerprofil/${shopUserId.id}`}
                    className="navidentity-sidebar-message-name-link"
                  >
                    {firstname}
                  </NavLink>
                ) : (
                  firstname
                )}
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
  cityName: PropTypes.object.isRequired,
  headermarket: PropTypes.bool.isRequired,
  HandleToggleIdentityOpen: PropTypes.func.isRequired,
  HandleToggleIdentityOpenReset: PropTypes.func.isRequired,
  toggleIdentityOpen: PropTypes.bool.isRequired,
  logged: PropTypes.bool.isRequired,
  firstname: PropTypes.string.isRequired,
  hasShop: PropTypes.bool.isRequired,
  shopUserId: PropTypes.shape({
    id: PropTypes.number,
  }),
  /** called when the "Déconnexion" button is clicked */
  handleLogout: PropTypes.func.isRequired,
};

NavIdentitySidebar.defaultProps = {
  shopUserId: {},
};

// == Export
export default NavIdentitySidebar;
