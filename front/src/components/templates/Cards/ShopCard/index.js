// == Import
import React from 'react';

import PropTypes from 'prop-types';

import source from 'src/assets/images/card-photo.svg';

import './shopcard.scss';

// == Composant
const ShopCard = ({ company_name, label }) => (
  <div className="shopcard">
    <img
      className="shopcard-image"
      src={source}
      srcSet={`${source} 236w`}
      sizes="(max-width: 430px) 236px,"
      alt="identité visuelle du shop"
    />
    <h3 className="shopcard-title">{company_name}</h3>
    <span className="shopcard-label">{label}</span>
  </div>
);

ShopCard.propTypes = {
  // source: PropTypes.string.isRequired,
  // Nom de la boutique
  company_name: PropTypes.string.isRequired,
  // Category de la boutique
  label: PropTypes.string.isRequired,
};

// == Export
export default ShopCard;
