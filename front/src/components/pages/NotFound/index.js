// == Import
import React from 'react';

import { useNavigate } from 'react-router-dom';

// == Head html informations
import { Helmet } from 'react-helmet';

// == Import header and footer
import Header from 'src/containers/templates/Header';
import Footer from 'src/components/templates/Footer';

// == Import
import './notfound.scss';

// == Composant
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="notfound">
      <Helmet>
        <title>Page non trouvée</title>
        <meta name="description" content="Page non trouvée" />
      </Helmet>
      <Header headercategory={false} headermarket headerlogo />

      <div className="notfound-container">
        <div className="notfound-container-content">
          <h2 className="notfound-container-content-title">404</h2>

          <h3 className="notfound-container-content-subtitle">Page non trouvée !</h3>

          <button
            type="button"
            className="notfound-container-content-btn-goback"
            onClick={() => navigate(-1)}
          >
            Rentrer chez soi ?
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

// == Export
export default NotFound;
