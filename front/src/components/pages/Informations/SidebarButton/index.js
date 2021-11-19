// Import
import React from 'react';

import PropTypes from 'prop-types';

import { VscClose } from 'react-icons/vsc';

import './sidebarButton.scss';

// == Composant
const SidebarButton = ({ handleToggleSidebarTgOpen, toggleSidebarTgOpen }) => (
  <>
    {toggleSidebarTgOpen ? (
      <div className="sidebar-button-close-wrap">
        <button
          type="button"
          className="sidebar-button-close"
          onClick={() => {
            handleToggleSidebarTgOpen();
          }}
        >
          <VscClose />
        </button>
      </div>
    ) : (
      <div className="sidebar-button-open-wrap">
        <button
          className="sidebar-button-open"
          type="button"
          onClick={() => {
            handleToggleSidebarTgOpen();
          }}
        >
          Articles
        </button>
      </div>
    )}
  </>
);

SidebarButton.propTypes = {
  handleToggleSidebarTgOpen: PropTypes.func.isRequired,
  toggleSidebarTgOpen: PropTypes.bool.isRequired,
};

// == Export
export default SidebarButton;
