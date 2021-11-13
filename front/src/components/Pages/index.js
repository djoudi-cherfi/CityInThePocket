// == Import
import React from 'react';

// Prop type
import PropTypes from 'prop-types';

// == Router
import { Route, Switch, Redirect } from 'react-router-dom';

// == Import header
import Header from 'src/containers/Header';

// == Import pages
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
import './pages.scss';

// == Composant
const Pages = ({
  logged,
}) => (
  <div className="pages">
    <Switch>
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
        <Header headercategory={false} headermarket headerlogo />
        <ErrorPage />
      </Route>
    </Switch>
  </div>
);

Pages.propTypes = {
  logged: PropTypes.bool.isRequired,
};

// == Export
export default Pages;
