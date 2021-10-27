// == Import
import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

import { Route, Switch } from 'react-router-dom';

import infosData from 'src/data/informations.json';

// == Loader animation and scroll to top
import Loader from 'src/components/Loader/LoaderCircle';
import ScrollToTop from 'src/utils/ScrollToTop';

// == Import header and footer
import Header from 'src/containers/Header';
import Footer from 'src/components/Footer';

// ==  Import pages
import FindCity from 'src/containers/FindCity';
import City from 'src/containers/City';
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

import Form from 'src/containers/Form/FormContainer';

import './styles.scss';

// == Composant
const App = ({
  loadCategoriesNames,
  categoryNamesLoaded,
  logged,
  handleInfosData,
}) => {
  const { TermsAndConditionsData, LegalNoticeData } = infosData;

  useEffect(() => {
    loadCategoriesNames();
    handleInfosData(TermsAndConditionsData, LegalNoticeData);
  }, []);

  return (
    <div className="app">
      {categoryNamesLoaded ? (
        <>
          <ScrollToTop />
          <Switch>
            <Route exact path="/form">
              <Header headercategory={false} headermarket headerlogo />
              <Form />
            </Route>

            <Route exact path="/">
              <Header headercategory={false} headermarket={false} headerlogo={false} />
              <FindCity />
            </Route>

            <Route exact path="/identity/login-register">
              <Header headercategory={false} headermarket headerlogo />
              <Identity />
            </Route>

            <Route exact path="/identity/forgot-password">
              <Header headercategory={false} headermarket headerlogo />
              <ForgotPassword />
            </Route>

            <Route exact path="/identity/reset-password/:id/:slug">
              <Header headercategory={false} headermarket headerlogo />
              <ResetPassword />
            </Route>

            {logged && (
              <Route exact path="/account/:slug">
                <Header headercategory={false} headermarket headerlogo />
                <Account />
              </Route>
            )}

            <Route exact path="/informations/:slug">
              <Header headercategory={false} headermarket headerlogo />
              <Informations />
            </Route>

            <Route exact path="/*">
              <Header headercategory headermarket headerlogo />
              <City />
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

App.propTypes = {
  loadCategoriesNames: PropTypes.func.isRequired,
  categoryNamesLoaded: PropTypes.bool.isRequired,
  logged: PropTypes.bool.isRequired,
  handleInfosData: PropTypes.func.isRequired,
};

// == Export
export default App;
