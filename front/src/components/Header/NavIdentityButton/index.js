// == Import
import React from 'react';

import PropTypes from 'prop-types';

// Media query pour les composants react
import MediaQuery from 'react-responsive';

import { breakpoint } from 'src/utils/mediaQuery';

import './navidentitybutton.scss';

// == Composant
const NavIdentityButton = ({ HandleToggleIdentityOpen }) => (
  <div
    className="navidentity-button"
    onClick={() => {
      HandleToggleIdentityOpen();
    }}
  >
    <MediaQuery maxWidth={breakpoint.laptopMax}>

      <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="40px"
        height="40px"
        fill="current"
        viewBox="0 0 266.3 350"
      >

        <g fill="#FFFFFF" className="navidentity-button-icon">
          <path
            className="navidentity-button-icon-head"
            d="M133.2,171.2c38.9,0,70.5-38.3,70.5-85.6S193.3,0,133.2,0S62.7,38.3,62.7,85.6S94.3,171.2,133.2,171.2z"
          />

          <path
            className="navidentity-button-icon-body"
            d="M266.1,298.4c-1.3-82.3-12.1-105.8-94.4-120.7c0,0-11.6,14.8-38.6,14.8s-38.6-14.8-38.6-14.8
            c-81.4,14.7-92.8,37.8-94.3,118c-0.1,6.5-0.2,6.9-0.2,6.1v8.7c0,0,19.6,39.5,133.1,39.5s133.1-39.5,133.1-39.5v-6.4
            C266.3,304.6,266.2,303.7,266.1,298.4z"
          />
        </g>
      </svg>
    </MediaQuery>
  </div>
);

NavIdentityButton.propTypes = {
  HandleToggleIdentityOpen: PropTypes.func.isRequired,
};

// == Export
export default NavIdentityButton;
