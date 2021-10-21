// == Import
import React from 'react';

// == Head html informations
import { Helmet } from 'react-helmet';

// == Import
import './errorpage.scss';

// == Composant
const ErrorPage = () => (
  <div className="errorpage">
    <Helmet>
      <title>Page non trouvé</title>
      <meta name="description" content="Page non trouvé" />
    </Helmet>
  </div>
);

// == Export
export default ErrorPage;
