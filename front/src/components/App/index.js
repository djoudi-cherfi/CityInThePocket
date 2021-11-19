// == Import
import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

import { Routes, Route, Navigate } from 'react-router-dom';

// == Loader animation and scroll to top
import Loader from 'src/components/templates/Loader/LoaderCircle';
import ScrollToTop from 'src/utils/ScrollToTop';

// == Media query pour les composants react
import { useMediaQuery } from 'react-responsive';
import { breakpoint } from 'src/utils/mediaQuery';

import infosData from 'src/data/informations.json';

// == Import header and footer
import Header from 'src/containers/templates/Header';
import Footer from 'src/components/templates/Footer';

// ==  Import pages
// FindCity page
import FindCity from 'src/containers/pages/FindCity';

// Account dashboard page
import Account from 'src/components/pages/Account';
import AboutYou from 'src/containers/pages/Account/AboutYou';
import MyShop from 'src/containers/pages/Account/MyShop';
import Password from 'src/containers/pages/Account/Password';
import Email from 'src/containers/pages/Account/Email';
import CloseAccount from 'src/containers/pages/Account/CloseAccount';
import Dashboard from 'src/containers/pages/Account/Dashboard';

// Identity route
import Identity from 'src/components/pages/Identity';

// Authentication login and register page
import Authentication from 'src/containers/pages/Identity/Authentication';

// Identity other page
import ForgotPassword from 'src/containers/pages/Identity/ForgotPassword';
import ResetPassword from 'src/containers/pages/Identity/ResetPassword';

// Information legal notice ant terms and conditions page
import Informations from 'src/components/pages/Informations';
import TermsAndConditions from 'src/containers/pages/Informations/TermsAndConditions';
import LegalNotice from 'src/containers/pages/Informations/LegalNotice';

// // City page
// import City from 'src/containers/City';

// Error page
import ErrorPage from 'src/components/templates/ErrorPage';

// // == Import
// import Slider from 'src/containers/Product/Slider';

import './styles.scss';

// == Composant
const App = ({
  logged,

  loadCities,
  citiesLoaded,

  loadCategoriesNames,
  categoryNamesLoaded,

  handleInfosData,

  // toggleSlideProductOpen,
}) => {
  const laptopMax = useMediaQuery({ maxWidth: breakpoint.laptopMax });
  const laptopMin = useMediaQuery({ minWidth: breakpoint.laptopMin });

  const { TermsAndConditionsData, LegalNoticeData } = infosData;

  useEffect(() => {
    loadCities();
    loadCategoriesNames();
    handleInfosData(TermsAndConditionsData, LegalNoticeData);
  }, []);

  return (
    <div className="app">
      {categoryNamesLoaded ? (
        <>
          <ScrollToTop />
          <Routes>
            {citiesLoaded && (
              <Route
                path="/"
                element={(
                  <>
                    <Header headercategory={false} headermarket={false} headerlogo={false} />
                    <FindCity />
                    <Footer />
                  </>
                )}
              />
            )}

            <Route
              path="/informations"
              element={(
                <>
                  <Header headercategory={false} headermarket headerlogo />
                  <Informations />
                  <Footer />
                </>
              )}
            >
              <Route path="/informations/conditions-generales" element={<TermsAndConditions />} />
              <Route path="/informations/mentions-legales" element={<LegalNotice />} />
            </Route>

            {logged && (
              <Route
                path="/account"
                element={(
                  <>
                    <Header headercategory={false} headermarket headerlogo />
                    <Account />
                    <Footer />
                  </>
              )}
              >
                <Route
                  path="/account/a-propos-de-vous"
                  element={(
                    <>
                      <AboutYou />
                      {laptopMin && (<Navigate to="/account/dashboard" />)}
                    </>
                )}
                />
                <Route
                  path="/account/ma-boutique"
                  element={(
                    <>
                      <MyShop />
                      {laptopMin && (<Navigate to="/account/dashboard" />)}
                    </>
                )}
                />
                <Route
                  path="/account/mot-de-passe"
                  element={(
                    <>
                      <Password />
                      {laptopMin && (<Navigate to="/account/dashboard" />)}
                    </>
                )}
                />
                <Route
                  path="/account/email"
                  element={(
                    <>
                      <Email />
                      {laptopMin && (<Navigate to="/account/dashboard" />)}
                    </>
                )}
                />
                <Route
                  path="/account/fermer-le-compte"
                  element={(
                    <>
                      <CloseAccount />
                      {laptopMin && (<Navigate to="/account/dashboard" />)}
                    </>
                )}
                />

                <Route
                  path="/account/dashboard"
                  element={(
                    <>
                      <Dashboard />
                      {laptopMax && (<Navigate to="/account/a-propos-de-vous" />)}
                    </>
                  )}
                />

              </Route>
            )}

            {/* <MediaQuery maxWidth={breakpoint.laptopMax}>
    </MediaQuery> */}

            {/* <MediaQuery minWidth={breakpoint.laptopMin}>
    </MediaQuery> */}

            <Route
              path="/identity"
              element={(
                <>
                  <Header headercategory={false} headermarket headerlogo />
                  <Identity />
                  <Footer />
                </>
            )}
            >
              <Route path="/identity/login-register" element={<Authentication />} />
              <Route path="/identity/forgot-password" element={<ForgotPassword />} />
              <Route path="/identity/reset-password/:id/:slug" element={<ResetPassword />} />
            </Route>

            {/* <Route
              path="/:city/*"
              element={toggleSlideProductOpen ? (
                <Slider />
              ) : (
                <>
                  <Header headercategory headermarket headerlogo />
                  <City />
                  <Footer />
                </>
              )}
            /> */}

            <Route
              path="*"
              element={(
                <>
                  <Header headercategory={false} headermarket headerlogo />
                  <ErrorPage />
                  <Footer />
                </>
              )}
            />
          </Routes>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

App.propTypes = {
  logged: PropTypes.bool.isRequired,

  loadCities: PropTypes.func.isRequired,
  citiesLoaded: PropTypes.bool.isRequired,

  loadCategoriesNames: PropTypes.func.isRequired,
  categoryNamesLoaded: PropTypes.bool.isRequired,

  handleInfosData: PropTypes.func.isRequired,

  // toggleSlideProductOpen: PropTypes.bool.isRequired,
};

// == Export
export default App;
