// == Import
import React from 'react';

// Prop type
import PropTypes from 'prop-types';

// == Router
import { Route, Switch } from 'react-router-dom';

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

// == Style
import './city.scss';

// == Composant
const City = ({
  cityName,
}) => (
  <div className="city">
    <Switch>
      <Route exact path={`/${cityName}/home`}>
        <Home />
      </Route>

      <Route exact path="/:city/category/:slug">
        <Category />
      </Route>

      <Route exact path={`/${cityName}/list/:slug`}>
        <List />
      </Route>

      <Route exact path={`/${cityName}/sellerprofil/:id`}>
        <SellerProfil />
      </Route>

      <Route exact path={`/${cityName}/product/:id`}>
        <Product />
      </Route>
    </Switch>
  </div>
);

City.propTypes = {
  cityName: PropTypes.string.isRequired,
};

// == Export
export default City;
