// == Import
import React from 'react';

// == Router
import { Outlet } from 'react-router-dom';

import './account.scss';

// == Composant
const Account = () => (
  <div className="account">
    <Outlet />
  </div>
);

// == Export
export default Account;
