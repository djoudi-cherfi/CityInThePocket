// == Import
import React, { useEffect } from 'react';

// Prop type
import PropTypes from 'prop-types';

// == Router
import {
  Routes, Route, Navigate, useParams,
} from 'react-router-dom';

import { getCityBySlug } from 'src/utils';

// == Loader animation
import Loader from 'src/components/Loader/LoaderCircle';

// == Import header
import Header from 'src/containers/Header';

// == Import pages
// Home page
import Home from 'src/containers/Home';
// Category shops page
import Category from 'src/containers/Category';
// List shops and products page
import List from 'src/components/List';
// Seller profil page
import SellerProfil from 'src/containers/SellerProfil';
// Product page
import Product from 'src/containers/Product';
// Error page
import ErrorPage from 'src/components/ErrorPage';

// == Style
import './city.scss';

// == Composant
const City = ({
  cities,
  HandleCityNameUrl,
  cityNameLoaded,
  cityName,
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

  return (
    <div className="city">
      {redirect && <Navigate to="/" />}
      {cityNameLoaded ? (
        <Routes>
          <Route
            exact
            path="/home"
            element={<Home />}
          />

          <Route
            exact
            path="/category/:slug"
            element={<Category />}
          />

          <Route
            exact
            path="/list/:slug"
            element={<List />}
          />

          <Route
            exact
            path="/sellerprofil/:id"
            element={<SellerProfil />}
          />

          <Route
            exact
            path="/product/:id"
            element={<Product />}
          />

          <Route
            path="*"
            element={(
              <>
                <Header headercategory headermarket headerlogo />
                <ErrorPage />
              </>
            )}
          />
        </Routes>
      ) : (
        <Loader />
      )}
    </div>
  );
};

City.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  HandleCityNameUrl: PropTypes.func.isRequired,
  cityNameLoaded: PropTypes.bool.isRequired,
  cityName: PropTypes.object.isRequired,
};

// == Export
export default City;
