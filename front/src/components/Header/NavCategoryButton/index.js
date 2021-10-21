// == Import
import React from 'react';

import PropTypes from 'prop-types';

import classNames from 'classnames';

// Media query pour les composants react
import MediaQuery from 'react-responsive';

import { breakpoint } from 'src/utils/mediaQuery';

import './navcategorybutton.scss';

// == Composant
const NavCategoryButton = ({ HandleToggleNavCategoryOpen, toggleNavCategoryOpen }) => {
  const burgerClosed = classNames('navcategory-button', {
    rotate: toggleNavCategoryOpen,
  });

  const burgerBarClosed = classNames('navcategory-button-bar', {
    closed: toggleNavCategoryOpen,
  });

  return (
    <MediaQuery maxWidth={breakpoint.laptopMax}>
      <button
        className={burgerClosed}
        type="button"
        onClick={() => {
          HandleToggleNavCategoryOpen();
        }}
      >
        <span className={burgerBarClosed}> </span>
        <span className={burgerBarClosed}> </span>
        <span className={burgerBarClosed}> </span>
      </button>
    </MediaQuery>
  );
};

NavCategoryButton.propTypes = {
  HandleToggleNavCategoryOpen: PropTypes.func.isRequired,
  toggleNavCategoryOpen: PropTypes.bool.isRequired,
};

// == Export
export default NavCategoryButton;
