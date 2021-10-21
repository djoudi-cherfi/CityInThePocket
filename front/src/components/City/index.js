// == Import
import React, { useEffect } from 'react';

// Prop type
import PropTypes from 'prop-types';

// == Router
import { Route, Switch } from 'react-router-dom';

// == Loader animation and scroll to top
import Loader from 'src/components/Loader/LoaderCircle';
import ScrollToTop from 'src/utils/ScrollToTop';

// == Import header and footer
import Header from 'src/containers/Header';
import Footer from 'src/components/Footer';

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
// Identity login and register page
import Identity from 'src/containers/Identity';
// Identity other page
import ForgotPassword from 'src/containers/Identity/ForgotPassword';
import ResetPassword from 'src/containers/Identity/ResetPassword';
// Account dashboard page
import Account from 'src/containers/Account';
// Information legal notice ant terms and conditions page
import Informations from 'src/containers/Informations';
// Error page
import ErrorPage from 'src/components/ErrorPage';

// == Style
import './city.scss';

// == Composant
const City = ({
  cityName,
  loadCategoriesNames,
  categoryNamesLoaded,
  logged,
}) => {
  useEffect(() => {
    loadCategoriesNames();
  }, []);

  return (
    <div className="city">
      {categoryNamesLoaded ? (
        <>
          <ScrollToTop />
          <Header />

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

            <Route exact path="/identity/login-register">
              <Identity />
            </Route>

            <Route exact path="/identity/forgot-password">
              <ForgotPassword />
            </Route>

            <Route exact path="/identity/reset-password/:id/:slug">
              <ResetPassword />
            </Route>

            {logged && (
              <Route exact path="/account/:slug">
                <Account />
              </Route>
            )}

            <Route exact path="/informations/:slug">
              <Informations />
            </Route>

            <Route path="*">
              <ErrorPage />
            </Route>
          </Switch>

          <Footer />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

City.propTypes = {
  cityName: PropTypes.string.isRequired,
  loadCategoriesNames: PropTypes.func.isRequired,
  categoryNamesLoaded: PropTypes.bool.isRequired,
  logged: PropTypes.bool.isRequired,
};

// == Export
export default City;
