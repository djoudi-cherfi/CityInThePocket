// == Import
import React from 'react';

// == Router
import { Outlet } from 'react-router-dom';

// == Import header and footer
import Header from 'src/containers/templates/Header';
import Footer from 'src/components/templates/Footer';

// Sidebar and button
import Sidebar from 'src/containers/pages/Informations/Sidebar';
import SidebarButton from 'src/containers/pages/Informations/SidebarButton';

import './informations.scss';

// == Composant
const Informations = () => (
  <div className="informations">
    <Header headercategory={false} headermarket headerlogo />
    <div className="informations-wrap">
      <Sidebar />
      <Outlet />
      <SidebarButton />
    </div>
    <Footer />
  </div>
);

// == Export
export default Informations;
