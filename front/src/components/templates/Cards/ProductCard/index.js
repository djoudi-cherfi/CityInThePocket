// == Import
import React from 'react';

import PropTypes from 'prop-types';

import source from 'src/assets/images/card-photo.svg';

import './productcard.scss';

// == Composant
const ProductCard = ({ name, price }) => (
  <div className="productcard">
    <img
      className="productcard-image"
      src={source}
      srcSet={`${source} 236w`}
      sizes="(max-width: 430px) 236px,"
      alt="identité visuelle du produit"
    />
    <h3 className="productcard-title">{name}</h3>
    <h2 className="productcard-price">
      {price}
      €
    </h2>
  </div>
);

ProductCard.propTypes = {
  // source: PropTypes.string.isRequired,
  // Nom du produit
  name: PropTypes.string.isRequired,
  // Prix du produit
  price: PropTypes.string.isRequired,
};

// == Export
export default ProductCard;
