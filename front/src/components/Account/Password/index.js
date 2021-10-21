// == Import
import React from 'react';

import { Helmet } from 'react-helmet';

import './password.scss';

// == Composant
const Password = () => (
  <div className="password">
    <Helmet>
      <title>Account mot de passe</title>
      <meta name="description" content="Page account mot de passe" />
    </Helmet>
    <div className="password-head">
      <h2 className="password-head-title">Mot de passe</h2>
    </div>
    <div className="password-body">
      <h2>body</h2>
    </div>
  </div>
);

// == Export
export default Password;
