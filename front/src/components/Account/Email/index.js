// == Import
import React from 'react';

import { Helmet } from 'react-helmet';

import './email.scss';

// == Composant
const Email = () => (
  <div className="email">
    <Helmet>
      <title>Account email</title>
      <meta name="description" content="Page account email" />
    </Helmet>
    <div className="email-head">
      <h2 className="email-head-title">E-mail</h2>
    </div>
    <div className="email-body">
      <h2>body</h2>
    </div>
  </div>
);

// == Export
export default Email;
