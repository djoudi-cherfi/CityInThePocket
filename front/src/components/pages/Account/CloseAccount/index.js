// == Import
import React from 'react';

import { Helmet } from 'react-helmet';

import './closeaccount.scss';

// == Composant
const CloseAccount = () => (
  <div className="closeaccount">
    <Helmet>
      <title>Account fermer le compte</title>
      <meta name="description" content="Page account fermer le compte" />
    </Helmet>
    <div className="closeaccount-head">
      <h2 className="closeaccount-head-title">Fermer le compte</h2>
    </div>
    <div className="closeaccount-body">
      <h2>body</h2>
    </div>
  </div>
);

// == Export
export default CloseAccount;
