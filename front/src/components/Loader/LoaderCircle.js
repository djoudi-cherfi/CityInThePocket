// == Import
import React from 'react';

// == Import
import './loaderCircle.scss';

// == Composant
const LoaderCircle = () => (
  <div className="loader-circle">
    <div className="loader-circle-container">
      <span className="loader-circle-container-circle"> </span>
      <span className="loader-circle-container-title">Chargement en cours...</span>
    </div>
  </div>
);

// == Export
export default LoaderCircle;
