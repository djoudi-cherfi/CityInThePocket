// Import
import React from 'react';

import { NavLink } from 'react-router-dom';

import './footer.scss';

// Is item for footer
const FooterInfos = () => (
  <div className="footer-infos">
    <ul>
      <li className="footer-infos-link">
        <NavLink
          to="/informations/conditions-generales"
        >
          Conditions Generales
        </NavLink>
      </li>
      <li className="footer-infos-link">
        <NavLink
          to="/informations/mentions-legales"
        >
          Mentions Légales
        </NavLink>
      </li>
    </ul>
  </div>
);

export default FooterInfos;
