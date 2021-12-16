// == Import
import React, { useEffect } from 'react';

// Prop type
import PropTypes from 'prop-types';

// == Router
import { Outlet, useParams, Navigate } from 'react-router-dom';

// == Loader animation
import Loader from 'src/components/templates/Loader/LoaderCircle';

import { getCityBySlug } from 'src/utils';

// Slider for product page
import Slider from 'src/containers/pages/City/Product/Slider';

// == Import header and footer
import Header from 'src/containers/templates/Header';
import Footer from 'src/components/templates/Footer';

import './city.scss';

// == Composant
const City = ({
  citiesLoaded,
  cities,
  HandleCityNameUrl,
  cityNameLoaded,
  categoryNamesLoaded,
  toggleSlideProductOpen,
}) => {
  const { city } = useParams();

  const cityNameUrl = getCityBySlug(cities, city);

  let redirect = false;

  if (cityNameUrl === undefined) {
    redirect = true;
  }
  else {
    useEffect(() => {
      HandleCityNameUrl(cityNameUrl);
    }, [city]);
  }

  const switchSliderOutlet = toggleSlideProductOpen
    ? <Slider />
    : (
      <>
        <Header headercategory headermarket headerlogo />
        <Outlet />
        <Footer />
      </>
    );

  return (
    <div className="city">
      {redirect && <Navigate to="/" />}
      {citiesLoaded && cityNameLoaded && categoryNamesLoaded ? (
        switchSliderOutlet
      ) : <Loader />}
    </div>
  );
};

City.propTypes = {
  citiesLoaded: PropTypes.bool.isRequired,
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  HandleCityNameUrl: PropTypes.func.isRequired,
  cityNameLoaded: PropTypes.bool.isRequired,
  categoryNamesLoaded: PropTypes.bool.isRequired,
  toggleSlideProductOpen: PropTypes.bool.isRequired,
};

// == Export
export default City;
