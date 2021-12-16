// == Import
import React from 'react';

import { Helmet } from 'react-helmet';

import './aboutyou.scss';

// == Composant
const AboutYou = () => (
  <div className="aboutyou">
    <Helmet>
      <title>Account à propos de vous</title>
      <meta name="description" content="Page account à propos de vous" />
    </Helmet>
    <div className="aboutyou-head">
      <h2 className="aboutyou-head-title">À propos de vous</h2>
    </div>
    <div className="aboutyou-body">
      <h2>body</h2>
    </div>
  </div>
);

// == Export
export default AboutYou;
