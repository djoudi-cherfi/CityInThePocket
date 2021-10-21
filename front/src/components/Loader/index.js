// == Import
import React from 'react';

// == Import
import './loader.scss';

// == Composant
const Loader = () => (
  <div className="loader">
    <div className="loader-container">
      <span className="loader-container-quart"> </span>
      <span className="loader-container-title">Chargement en cours...</span>
    </div>
  </div>
);

// == Export
export default Loader;
