// == Import
import React from 'react';

// == Router
import { Outlet } from 'react-router-dom';

import './identity.scss';

// == Composant
const Identity = () => (
  <div className="identity">
    <Outlet />
  </div>
);

// == Export
export default Identity;
