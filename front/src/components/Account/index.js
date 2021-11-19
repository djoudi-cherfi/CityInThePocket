// == Import
import React from 'react';

import PropTypes from 'prop-types';

// == Router
import { Routes, Route } from 'react-router-dom';

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
      <Routes>
        <Route exact path="/account/a-propos-de-vous" element={<AboutYou />} />

        <Route exact path="/account/ma-boutique" element={<MyShop />} />

        <Route exact path="/account/mot-de-passe" element={<Password />} />

        <Route exact path="/account/email" element={<Email />} />

        <Route exact path="/account/fermer-le-compte" element={<CloseAccount />} />
      </Routes>
    </MediaQuery>

    <MediaQuery minWidth={breakpoint.laptopMin}>
      <Routes>
        <Route
          exact
          path="/account/dashboard"
          element={(
            <>
              <Helmet>
                <title>Gestion de compte</title>
                <meta name="description" content="Page gestion de compte" />
              </Helmet>

              <AboutYou />
              <MyShop />
              <Password />
              <Email />
              <CloseAccount />
            </>
          )}
        />
      </Routes>
    </MediaQuery>
  </div>
);

Account.propTypes = {
};

// == Export
export default Account;
