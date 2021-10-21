// == Import
import React from 'react';

import PropTypes from 'prop-types';

// == Router
import { Route, Redirect } from 'react-router-dom';

// == Head html informations
import { Helmet } from 'react-helmet';

// == Media query pour les composants react
import MediaQuery from 'react-responsive';
import { breakpoint } from 'src/utils/mediaQuery';

// == Import
import AboutYou from 'src/containers/Account/AboutYou';
import MyShop from 'src/containers/Account/MyShop';
import Password from 'src/containers/Account/Password';
import Email from 'src/containers/Account/Email';
import CloseAccount from 'src/containers/Account/CloseAccount';

import './account.scss';

// == Composant
const Account = () => (
  <div className="account">
    <MediaQuery maxWidth={breakpoint.laptopMax}>
      <Redirect to="/account/a-propos-de-vous" />

      <Route exact path="/account/a-propos-de-vous">
        <AboutYou />
      </Route>

      <Route exact path="/account/ma-boutique">
        <MyShop />
      </Route>

      <Route exact path="/account/mot-de-passe">
        <Password />
      </Route>

      <Route exact path="/account/email">
        <Email />
      </Route>

      <Route exact path="/account/fermer-le-compte">
        <CloseAccount />
      </Route>
    </MediaQuery>

    <MediaQuery minWidth={breakpoint.laptopMin}>
      <Redirect to="/account/dashboard" />

      <Route exact path="/account/dashboard">
        <Helmet>
          <title>Gestion de compte</title>
          <meta name="description" content="Page gestion de compte" />
        </Helmet>

        <AboutYou />
        <MyShop />
        <Password />
        <Email />
        <CloseAccount />
      </Route>
    </MediaQuery>
  </div>
);

Account.propTypes = {
};

// == Export
export default Account;
