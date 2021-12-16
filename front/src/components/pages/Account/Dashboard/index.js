// == Import
import React from 'react';

// == Head html informations
import { Helmet } from 'react-helmet';

// == Import
import AboutYou from 'src/containers/pages/Account/AboutYou';
import MyShop from 'src/containers/pages/Account/MyShop';
import Password from 'src/containers/pages/Account/Password';
import Email from 'src/containers/pages/Account/Email';
import CloseAccount from 'src/containers/pages/Account/CloseAccount';

import './dashboard.scss';

// == Composant
const Dashboard = () => (
  <div className="dashboard">
    <Helmet>
      <title>Gestion de compte</title>
      <meta name="description" content="Page gestion de compte" />
    </Helmet>

    <AboutYou />
    <MyShop />
    <Password />
    <Email />
    <CloseAccount />
  </div>
);

// == Export
export default Dashboard;
