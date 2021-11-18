// Import
import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

import {
  Switch, Route, Redirect, useParams,
} from 'react-router-dom';

// == Loader animation
import Loader from 'src/components/Loader/LoaderCircle';

import { Helmet } from 'react-helmet';

// Sidebar and button
import Sidebar from 'src/containers/Informations/Sidebar';
import SidebarButton from 'src/containers/Informations/SidebarButton';

import TermsAndConditions from 'src/containers/Informations/TermsAndConditions';
import LegalNotice from 'src/containers/Informations/LegalNotice';

import './informations.scss';

// == Composant
const Informations = ({
  termsAndConditionsData, legalNoticeData, handleInfosName, infosNameLoaded,
}) => {
  const { article } = useParams();

  let redirect = false;

  if (article === undefined) {
    redirect = true;
  }
  else {
    useEffect(() => {
      handleInfosName(article);
    }, [article]);
  }

  return (
    <div className="informations">
      <Sidebar />
      {redirect && <Redirect to="/" />}
      {infosNameLoaded ? (
        <>
          <Switch>
            <Route exact path="/informations/conditions-generales">
              <Helmet>
                <title>Conditions generales</title>
                <meta name="description" content="Page des conditions generales" />
              </Helmet>

              <TermsAndConditions data={termsAndConditionsData} />
            </Route>

            <Route exact path="/informations/mentions-legales">
              <Helmet>
                <title>Mentions legales</title>
                <meta name="description" content="Page des mentions legales" />
              </Helmet>

              <LegalNotice data={legalNoticeData} />
            </Route>
          </Switch>
          <SidebarButton />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

Informations.propTypes = {
  handleInfosName: PropTypes.func.isRequired,
  infosNameLoaded: PropTypes.bool.isRequired,
  termsAndConditionsData: PropTypes.array.isRequired,
  legalNoticeData: PropTypes.array.isRequired,
};

// == Export
export default Informations;
