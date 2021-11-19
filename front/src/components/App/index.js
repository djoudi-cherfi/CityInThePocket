// == Import
import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

import { Routes, Route, useRoutes } from 'react-router-dom';

// == Loader animation and scroll to top
import Loader from 'src/components/Loader/LoaderCircle';
import ScrollToTop from 'src/utils/ScrollToTop';

import infosData from 'src/data/informations.json';

// == Import header and footer
import Header from 'src/containers/Header';
import Footer from 'src/components/Footer';

// ==  Import pages
// FindCity page
import FindCity from 'src/containers/FindCity';
// City page
import City from 'src/containers/City';
// Identity login and register page
import Pages from 'src/containers/Pages';

// Error page
import ErrorPage from 'src/components/ErrorPage';

// == Import
import Slider from 'src/containers/Product/Slider';

import './styles.scss';

// == Composant
const App = ({
  loadCities,
  citiesLoaded,
  loadCategoriesNames,
  categoryNamesLoaded,
  handleInfosData,
  toggleSlideProductOpen,
}) => {
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
          {/* <ScrollToTop /> */}
          <Routes>
            {citiesLoaded && (
              <Route
                exact
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
              exact
              path="/identity/*"
              element={(
                <>
                  <Header headercategory={false} headermarket headerlogo />
                  <Pages />
                  <Footer />
                </>
              )}
            />

            {/* <Route
              exact
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
  loadCities: PropTypes.func.isRequired,
  citiesLoaded: PropTypes.bool.isRequired,
  loadCategoriesNames: PropTypes.func.isRequired,
  categoryNamesLoaded: PropTypes.bool.isRequired,
  handleInfosData: PropTypes.func.isRequired,
  toggleSlideProductOpen: PropTypes.bool.isRequired,
};

// == Export
export default App;
