// == Import
import React from 'react';

import { Helmet } from 'react-helmet';

import './myshop.scss';

// == Composant
const MyShop = () => (
  <div className="myshop">
    <Helmet>
      <title>Account ma boutique</title>
      <meta name="description" content="Page account ma boutique" />
    </Helmet>
    <div className="myshop-head">
      <h2 className="myshop-head-title">Ma boutique</h2>
    </div>
    <div className="myshop-body">
      <h2>body</h2>
    </div>
  </div>
);

// == Export
export default MyShop;
