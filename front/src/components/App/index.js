// == Import
import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

import { Route, Switch } from 'react-router-dom';

// == Loader animation
// import Loader from 'src/components/Loader/LoaderCircle';

import infosData from 'src/data/informations.json';

// ==  Import pages
import FindCity from 'src/containers/FindCity';
import City from 'src/containers/City';
import ErrorPage from 'src/components/ErrorPage';

import Form from 'src/containers/Form/FormContainer';

import './styles.scss';

// == Composant
const App = ({ handleInfosData }) => {
  const { TermsAndConditionsData, LegalNoticeData } = infosData;

  useEffect(() => {
    handleInfosData(TermsAndConditionsData, LegalNoticeData);
  }, []);

  return (
    <div className="app">
      <Switch>
        <Route exact path="/form">
          <Form />
        </Route>
        <Route exact path="/">
          <FindCity />
        </Route>
        <Route exact path="/*">
          <City />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </div>
  );
};

App.propTypes = {
  handleInfosData: PropTypes.func.isRequired,
};

// == Export
export default App;
