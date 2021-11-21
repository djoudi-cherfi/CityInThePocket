// == Import
import React from 'react';

// == Router
import { Outlet } from 'react-router-dom';

// == Import header and footer
import Header from 'src/containers/templates/Header';
import Footer from 'src/components/templates/Footer';

import './account.scss';

// == Composant
const Account = () => (
  <div className="account">
    <Header headercategory={false} headermarket headerlogo />
    <div className="account-content">
      <Outlet />
    </div>
    <Footer />
  </div>
);

// == Export
export default Account;
