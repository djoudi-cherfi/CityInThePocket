// == Import
import React, { useEffect, useRef } from 'react';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

// == Import
import NavCategoryButton from 'src/containers/templates/Header/NavCategoryButton';
import NavCategorySidebar from 'src/containers/templates/Header/NavCategorySidebar';

import NavIdentityButton from 'src/containers/templates/Header/NavIdentityButton';
import NavIdentitySidebar from 'src/containers/templates/Header/NavIdentitySidebar';

import logo from 'src/assets/images/logo/logo-city-in-the-pocket-color.svg';

import './header.scss';

// == Composant
const Header = ({
  cityName,
  headercategory,
  headermarket,
  headerlogo,
  handelHeaderHeight,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    handelHeaderHeight(ref.current.clientHeight);
  });

  return (
    <header ref={ref} className="header">
      {headercategory && (
        <div className="navcategory">
          <NavCategoryButton />
          <NavCategorySidebar />
        </div>
      )}

      {headerlogo && (
        cityName ? (
          <Link to={`/${cityName.slug}/home`} className="header-logo-cityinthepocket">
            <img
              src={logo}
              srcSet={`${logo} 177w`}
              sizes="(max-width: 273px) 177px,"
              alt="logo city in the pocket"
            />
          </Link>
        ) : (
          <div className="header-logo-cityinthepocket">
            <img
              src={logo}
              srcSet={`${logo} 177w`}
              sizes="(max-width: 273px) 177px,"
              alt="logo city in the pocket"
            />
          </div>
        )
      )}

      <div className="navidentity">
        <NavIdentityButton />
        <NavIdentitySidebar headermarket={headermarket} />
      </div>
    </header>
  );
};

Header.propTypes = {
  cityName: PropTypes.object.isRequired,
  headercategory: PropTypes.bool.isRequired,
  headermarket: PropTypes.bool.isRequired,
  headerlogo: PropTypes.bool.isRequired,
  handelHeaderHeight: PropTypes.func.isRequired,
};

// == Export
export default Header;