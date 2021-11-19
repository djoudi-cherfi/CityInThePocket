// == Import
import React from 'react';

import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import logo from 'src/assets/images/logo/logo-city-in-the-pocket-color.svg';

import './findcity.scss';

const Findcity = ({ cities, futurcCities }) => (
  <div className="findcity">
    <div className="findcity-wrap">

      <div className="findcity-main">
        <img
          className="findcity-logo"
          src={logo}
          srcSet={`${logo} 177w`}
          sizes="(max-width: 273px) 177px,"
          alt="logo city in the pocket"
        />
        <h1 className="findcity-title">Trouvez les commerces près de chez vous.</h1>
        <h2 className="cities">
          {cities.map((city) => (
            <NavLink
              key={`${city.id}/home`}
              to={`/${city.slug}/home`}
              className="cities-name"
            >
              {city.city}
            </NavLink>
          ))}
        </h2>
        <h4 className="findcity-subtitle">Les villes bientôt disponibles :</h4>
        <ul className="findcity-futur-cities">
          {futurcCities.map((futurCity) => (
            <li key={futurCity.id} className="findcity-futur-cities-name">
              {futurCity.name}
            </li>
          ))}
          …
        </ul>
      </div>
    </div>
  </div>
);

Findcity.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      slug: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  futurcCities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Findcity;