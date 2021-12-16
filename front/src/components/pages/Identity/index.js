// == Import
import React from 'react';

// == Router
import { Outlet } from 'react-router-dom';

// == Import header and footer
import Header from 'src/containers/templates/Header';
import Footer from 'src/components/templates/Footer';

import './identity.scss';

// == Composant
const Identity = () => (
  <div className="identity">
    <Header headercategory={false} headermarket headerlogo />
    <Outlet />
    <Footer />
  </div>
);

// == Export
export default Identity;
