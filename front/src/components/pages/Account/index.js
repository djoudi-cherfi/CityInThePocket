// == Import
import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

// == Router
import { Outlet } from 'react-router-dom';

// == Import header and footer
import Header from 'src/containers/templates/Header';
import Footer from 'src/components/templates/Footer';

// == Loader animation
import Loader from 'src/components/templates/Loader/LoaderCircle';

import './account.scss';

// == Composant
const Account = ({ userId, handleUserIdentityGet, userIdentityload }) => {
  useEffect(() => {
    handleUserIdentityGet(userId);
  }, []);

  return (
    <>
      <Header headercategory={false} headermarket headerlogo />
      {userIdentityload ? (
        <div className="account">
          <div className="account-content">
            <Outlet />
          </div>
        </div>
      ) : (
        <Loader />
      )}
      <Footer />
    </>
  );
};

Account.propTypes = {
  userId: PropTypes.number.isRequired,
  handleUserIdentityGet: PropTypes.func.isRequired,
  userIdentityload: PropTypes.bool.isRequired,
};

// == Export
export default Account;
