// == Import
import React from 'react';

// == Head html informations
import { Helmet } from 'react-helmet';

// == Import header and footer
import Header from 'src/containers/templates/Header';
import Footer from 'src/components/templates/Footer';

// == Import
import './notfound.scss';

// == Composant
const NotFound = () => (
  <div className="notfound">
    <Helmet>
      <title>Page non trouvé</title>
      <meta name="description" content="Page non trouvé" />
    </Helmet>
    <Header headercategory={false} headermarket headerlogo />
    <div className="notfound-content" />
    <Footer />
  </div>
);

// == Export
export default NotFound;
