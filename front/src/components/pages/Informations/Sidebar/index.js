// Import
import React from 'react';

import PropTypes from 'prop-types';

import { useLocation } from 'react-router-dom';

import { HashLink } from 'react-router-hash-link';

import classNames from 'classnames';

import slugify from 'slugify';

import MediaQuery from 'react-responsive';

import { breakpoint } from 'src/utils/mediaQuery';

import './sidebar.scss';

// == Composant
const Sidebar = ({
  headerHeight,
  infosRefs,
  handleToggleSidebarTgOpen,
  toggleSidebarTgOpen,
}) => {
  const { pathname } = useLocation();

  const scrollWithOffset = (tag) => {
    const mobile = -105;
    const desktop = -180;
    const yCoordinate = tag.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = headerHeight === 150 ? desktop : mobile;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  const sidebarOpen = classNames('sidebar-wrap', {
    open: toggleSidebarTgOpen,
  });

  return (
    <div className={sidebarOpen}>
      <ul className="sidebar">
        {infosRefs.map((refs, index) => (
          <li key={refs} className="sidebar-item">
            <HashLink
              key={refs}
              to={`${pathname}#${index + 1}`}
              className="sidebar-item-link"
              scroll={(tag) => scrollWithOffset(tag)}
              onClick={() => {
                handleToggleSidebarTgOpen();
              }}
            >
              {pathname === '/informations/conditions-generales' && (
                <>
                  <MediaQuery maxWidth={breakpoint.laptopMax}>
                    {refs.match(/^[a-zA-Z].+:/g) && (
                      <>
                        <span>
                          {refs.match(/^[a-zA-Z].+:/g)}
                        </span>
                        <br />
                      </>
                    )}

                    <span>
                      {refs.replace(/^[a-zA-Z].+:/g, '')}
                    </span>
                  </MediaQuery>
                  <MediaQuery minWidth={breakpoint.laptopMin}>
                    <span>
                      {refs}
                    </span>
                  </MediaQuery>
                </>
              )}

              {pathname === '/informations/mentions-legales' && (
                <>
                  <MediaQuery maxWidth={breakpoint.laptopMax}>
                    {refs.match(/(\d+\.)+\d*/g) && (
                      <>
                        <span>
                          {slugify(refs).match(/(\d+\.)+\d*/g)}
                        </span>
                        <br />
                      </>
                    )}

                    <span>
                      {refs.replace(/(\d+\.)+\d*/g, '').replace(/-/g, ' ')}
                    </span>
                  </MediaQuery>

                  <MediaQuery minWidth={breakpoint.laptopMin}>
                    <span>
                      {refs}
                    </span>
                  </MediaQuery>
                </>
              )}
            </HashLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

Sidebar.propTypes = {
  headerHeight: PropTypes.number.isRequired,
  infosRefs: PropTypes.array.isRequired,
  handleToggleSidebarTgOpen: PropTypes.func.isRequired,
  toggleSidebarTgOpen: PropTypes.bool.isRequired,
};

// == Export
export default Sidebar;
