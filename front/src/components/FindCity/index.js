// == Import
import React from 'react';

import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import { slugifyCategoryName } from 'src/utils';

import logo from 'src/assets/images/logo/logo-city-in-the-pocket-color.svg';

import './findcity.scss';

const Findcity = ({ cities, futurcCities, HandleCity }) => (
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
              exact
              to={`/${slugifyCategoryName(city.name)}/home`}
              className="cities-name"
              activeClassName="cities-name-active"
              onClick={() => {
                HandleCity(slugifyCategoryName(city.name));
              }}
            >
              {city.name}
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
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  futurcCities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  HandleCity: PropTypes.func.isRequired,
};

export default Findcity;
