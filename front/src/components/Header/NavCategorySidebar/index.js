// == Import
import React from 'react';

import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import { slugifyName } from 'src/utils';

import classNames from 'classnames';

// Media query pour les composants react
import MediaQuery from 'react-responsive';

import { breakpoint } from 'src/utils/mediaQuery';

import './navcategorysidebar.scss';

// == Composant
const NavCategorySidebar = ({
  cityName,
  HandleToggleNavCategoryOpen,
  HandleToggleNavCategoryOpenReset,
  toggleNavCategoryOpen,
  categoryNames,
  HandleCategoryId,
}) => {
  const categoriesOpen = classNames('navcategory-sidebar', {
    open: toggleNavCategoryOpen,
  });

  const handleMediaQueryChange = (event) => {
    if (event === false) {
      HandleToggleNavCategoryOpenReset();
    }
  };

  return (
    <>
      <MediaQuery maxWidth={breakpoint.laptopMax} onChange={handleMediaQueryChange}>

        <div className={categoriesOpen}>
          <ul className="navcategory-sidebar-list">
            {categoryNames.map((categoryName) => (
              <li key={categoryName.id} className="navcategory-sidebar-list-item">
                <NavLink
                  key={categoryName.id}
                  to={`/${cityName.slug}/category/${slugifyName(categoryName.label)}`}
                  className="navcategory-sidebar-list-item-link"
                  onClick={() => {
                    HandleCategoryId(categoryName.id);
                    HandleToggleNavCategoryOpen();
                  }}
                >
                  {categoryName.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </MediaQuery>

      <MediaQuery minWidth={breakpoint.laptopMin}>
        <div className={categoriesOpen}>
          <ul className="navcategory-sidebar-list">
            {categoryNames.map((categoryName) => (
              <li key={categoryName.id} className="navcategory-sidebar-list-item">
                <NavLink
                  key={categoryName.id}
                  to={`/${cityName.slug}/category/${slugifyName(categoryName.label)}`}
                  className="navcategory-sidebar-list-item-link"
                  onClick={() => {
                    HandleCategoryId(categoryName.id);
                  }}
                >
                  {categoryName.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </MediaQuery>
    </>
  );
};

NavCategorySidebar.propTypes = {
  cityName: PropTypes.object.isRequired,
  HandleToggleNavCategoryOpen: PropTypes.func.isRequired,
  HandleToggleNavCategoryOpenReset: PropTypes.func.isRequired,
  toggleNavCategoryOpen: PropTypes.bool.isRequired,
  HandleCategoryId: PropTypes.func.isRequired,
  categoryNames: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default NavCategorySidebar;
