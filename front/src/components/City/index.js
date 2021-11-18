// == Import
import React, { useEffect } from 'react';

// Prop type
import PropTypes from 'prop-types';

// == Router
import {
  Route, Switch, Redirect, useParams,
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
      {redirect && <Redirect to="/" />}
      {cityNameLoaded ? (
        <Switch>
          <Route exact path={`/${cityName.slug}/home`}>
            <Home />
          </Route>

          <Route exact path="/:city/category/:slug">
            <Category />
          </Route>

          <Route exact path={`/${cityName.slug}/list/:slug`}>
            <List />
          </Route>

          <Route exact path={`/${cityName.slug}/sellerprofil/:id`}>
            <SellerProfil />
          </Route>

          <Route exact path={`/${cityName.slug}/product/:id`}>
            <Product />
          </Route>

          <Route path="*">
            <Header headercategory headermarket headerlogo />
            <ErrorPage />
          </Route>
        </Switch>
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
