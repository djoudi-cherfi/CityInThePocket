// == Import
import React from 'react';

// == Router
import { Outlet } from 'react-router-dom';

// Sidebar and button
import Sidebar from 'src/containers/pages/Informations/Sidebar';
import SidebarButton from 'src/containers/pages/Informations/SidebarButton';

import './informations.scss';

// == Composant
const Informations = () => (
  <div className="informations">
    <Sidebar />
    <Outlet />
    <SidebarButton />
  </div>
);

// == Export
export default Informations;
