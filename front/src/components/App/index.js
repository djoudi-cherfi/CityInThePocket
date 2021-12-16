// == Import
import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

import { useRoutes, Navigate } from 'react-router-dom';

// == Scroll to top
import ScrollToTop from 'src/utils/ScrollToTop';

// == Media query pour les composants react
import { useMediaQuery } from 'react-responsive';
import { breakpoint } from 'src/utils/mediaQuery';

import infosData from 'src/data/informations.json';

// == Import pages
// FindCity page
import FindCity from 'src/containers/pages/FindCity';

// Account dashboard page
import Account from 'src/containers/pages/Account';
import AboutYou from 'src/containers/pages/Account/AboutYou';
import MyShop from 'src/containers/pages/Account/MyShop';
import Password from 'src/containers/pages/Account/Password';
import Email from 'src/containers/pages/Account/Email';
import CloseAccount from 'src/containers/pages/Account/CloseAccount';
import Dashboard from 'src/containers/pages/Account/Dashboard';

// Identity page
import Identity from 'src/components/pages/Identity';
import Authentication from 'src/containers/pages/Identity/Authentication';
import ValidationEmail from 'src/containers/pages/Identity/ValidationEmail';
import ForgotPassword from 'src/containers/pages/Identity/ForgotPassword';
import ResetPassword from 'src/containers/pages/Identity/ResetPassword';

// Information legal notice ant terms and conditions page
import Informations from 'src/components/pages/Informations';
import TermsAndConditions from 'src/containers/pages/Informations/TermsAndConditions';
import LegalNotice from 'src/containers/pages/Informations/LegalNotice';

// City page
import City from 'src/containers/pages/City';
import Home from 'src/containers/pages/City/Home';
import Category from 'src/containers/pages/City/Category';
import List from 'src/components/pages/City/List';
import SellerProfil from 'src/containers/pages/City/SellerProfil';
import Product from 'src/containers/pages/City/Product';

// Error page
import NotFound from 'src/components/pages/NotFound';

import './styles.scss';

// == Composant
const App = ({
  logged,
  loadCities,
  loadCategoriesNames,
  handleInfosData,
}) => {
  const { TermsAndConditionsData, LegalNoticeData } = infosData;

  useEffect(() => {
    loadCities();
    loadCategoriesNames();
    handleInfosData(TermsAndConditionsData, LegalNoticeData);
  }, []);

  const routesSchema = [
    // FindCity
    {
      path: '/',
      element: <FindCity />,
    },

    // Informations
    {
      path: '/informations',
      element: <Informations />,
      children: [
        { path: '/informations/conditions-generales', element: <TermsAndConditions /> },
        { path: '/informations/mentions-legales', element: <LegalNotice /> },
      ],
    },

    // Identity
    {
      path: '/identity',
      element:
      logged
        ? <Navigate to="/account/dashboard" />
        : <Identity />,
      children: [
        {
          path: '/identity/login-register/',
          element: <Authentication />,
          children: [
            { path: '/identity/login-register/login', element: '' },
            { path: '/identity/login-register/register', element: '' },
          ],
        },
        { path: '/identity/forgot-password', element: <ForgotPassword /> },
        { path: '/identity/reset-password/:id/:slug', element: <ResetPassword /> },
        { path: '/identity/email-validation/:id/:slug', element: <ValidationEmail /> },
      ],
    },

    // Account
    {
      path: '/account',
      element:
      logged
        ? <Account />
        : <Navigate to="/identity/login-register/login" />,
      children: [
        {
          path: '/account/a-propos-de-vous',
          element: useMediaQuery({ maxWidth: breakpoint.laptopMax })
            ? <AboutYou /> : <Navigate to="/account/dashboard" />,
        },
        {
          path: '/account/ma-boutique',
          element: useMediaQuery({ maxWidth: breakpoint.laptopMax })
            ? <MyShop /> : <Navigate to="/account/dashboard" />,
        },
        {
          path: '/account/mot-de-passe',
          element: useMediaQuery({ maxWidth: breakpoint.laptopMax })
            ? <Password /> : <Navigate to="/account/dashboard" />,
        },
        {
          path: '/account/email',
          element: useMediaQuery({ maxWidth: breakpoint.laptopMax })
            ? <Email /> : <Navigate to="/account/dashboard" />,
        },
        {
          path: '/account/fermer-le-compte',
          element: useMediaQuery({ maxWidth: breakpoint.laptopMax })
            ? <CloseAccount /> : <Navigate to="/account/dashboard" />,
        },
        {
          path: '/account/dashboard',
          element: useMediaQuery({ minWidth: breakpoint.laptopMin })
            ? <Dashboard /> : <Navigate to="/account/a-propos-de-vous" />,
        },
      ],
    },

    // City
    {
      path: '/:city',
      element: <City />,
      children: [
        { path: '/:city/home', element: <Home /> },
        { path: '/:city/category/:slug', element: <Category /> },
        { path: '/:city/list/:slug', element: <List /> },
        { path: '/:city/sellerprofil/:id', element: <SellerProfil /> },
        { path: '/:city/product/:id', element: <Product /> },
      ],
    },

    // NotFound
    {
      path: '*',
      element: <Navigate to="/not-found" />,
    },
    {
      path: '/not-found',
      element: <NotFound />,
    },
  ];

  const routes = useRoutes(routesSchema);

  return (
    <div className="app">
      <ScrollToTop />
      {routes}
    </div>
  );
};

App.propTypes = {
  logged: PropTypes.bool.isRequired,
  loadCities: PropTypes.func.isRequired,
  loadCategoriesNames: PropTypes.func.isRequired,
  handleInfosData: PropTypes.func.isRequired,
};

// == Export
export default App;
