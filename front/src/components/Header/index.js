// == Import
import React, { useEffect, useRef } from 'react';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

// == Import
import NavCategoryButton from 'src/containers/Header/NavCategoryButton';
import NavCategorySidebar from 'src/containers/Header/NavCategorySidebar';

import NavIdentityButton from 'src/containers/Header/NavIdentityButton';
import NavIdentitySidebar from 'src/containers/Header/NavIdentitySidebar';

import logo from 'src/assets/images/logo/logo-city-in-the-pocket-color.svg';

import './header.scss';

// == Composant
const Header = ({ cityName, handelHeaderHeight }) => {
  const ref = useRef(null);

  useEffect(() => {
    handelHeaderHeight(ref.current.clientHeight);
  });

  return (
    <header ref={ref} className="header">
      <div className="navcategory">
        <NavCategoryButton />
        <NavCategorySidebar />
      </div>

      <Link to={`/${cityName}/home`} className="header-logo-cityinthepocket">
        <img
          src={logo}
          srcSet={`${logo} 177w`}
          sizes="(max-width: 273px) 177px,"
          alt="logo city in the pocket"
        />
      </Link>

      <div className="navidentity">
        <NavIdentityButton />
        <NavIdentitySidebar />
      </div>
    </header>
  );
};

Header.propTypes = {
  cityName: PropTypes.string.isRequired,
  handelHeaderHeight: PropTypes.func.isRequired,
};

// == Export
export default Header;
