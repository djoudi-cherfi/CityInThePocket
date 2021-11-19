// == Import
import React from 'react';

// Prop type
import PropTypes from 'prop-types';

// == Router
import { Routes, Route } from 'react-router-dom';

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
const Pages = ({ood
  
  logged,
}) => (
  <div className="pages">
    <Routes>
      <Route
        exact
        path="/:article"
        element={<Informations />}
      />

      {logged && (
        <Route
          exact
          path="/:service"
          element={<Account />}
        />
      )}

      {!logged && (
        <>
          <Route
            exact
            path="/login-register"
            element={<Identity />}
          />

          <Route
            exact
            path="/forgot-password"
            element={<ForgotPassword />}
          />

          <Route
            exact
            path="/reset-password/:id/:slug"
            element={<ResetPassword />}
          />
        </>
      )}

      <Route
        path="*"
        element={(
          <>
            <Header headercategory={false} headermarket headerlogo />
            <ErrorPage />
          </>
        )}
      />
    </Routes>
  </div>
);

Pages.propTypes = {
  logged: PropTypes.bool.isRequired,
};

// == Export
export default Pages;
