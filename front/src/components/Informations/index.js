// Import
import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

import { Route, Switch, useParams } from 'react-router-dom';

import { Helmet } from 'react-helmet';

// Sidebar and button
import Sidebar from 'src/containers/Informations/Sidebar';
import SidebarButton from 'src/containers/Informations/SidebarButton';

import TermsAndConditions from 'src/containers/Informations/TermsAndConditions';
import LegalNotice from 'src/containers/Informations/LegalNotice';

import './informations.scss';

// == Composant
const Informations = ({ termsAndConditionsData, legalNoticeData, handleInfosName }) => {
  const { slug } = useParams();

  useEffect(() => {
    handleInfosName(slug);
  }, [slug]);

  return (
    <div className="informations">
      <Sidebar />
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
      <SidebarButton />
    </div>
  );
};

Informations.propTypes = {
  termsAndConditionsData: PropTypes.array.isRequired,
  legalNoticeData: PropTypes.array.isRequired,
  handleInfosName: PropTypes.func.isRequired,
};

// == Export
export default Informations;
