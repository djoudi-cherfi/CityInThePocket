// == Import
import React from 'react';

import PropTypes from 'prop-types';

import { IoIosMail } from 'react-icons/io';
import { HiPhone } from 'react-icons/hi';

// == Import
import source from 'src/assets/images/account/account-profile-user.svg';

// == Composant
const Contact = ({
  email,
  phone_number,
}) => (
  <div className="contact">
    <img
      className="contact-image"
      src={source}
      srcSet={`${source} 100w`}
      sizes="(max-width: 100px) 100px,"
      alt="identité visuelle de la boutique"
    />

    <ul className="contact-infos">
      <li className="contact-infos-email">
        <IoIosMail className="contact-infos-email-icon" />
        <a href={`mailto:${email}`}>Me contacter</a>
      </li>
      <li className="contact-infos-phone">
        <HiPhone className="contact-infos-phone-icon" />
        {phone_number}
      </li>
    </ul>
  </div>
);

Contact.propTypes = {
  email: PropTypes.string.isRequired,
  phone_number: PropTypes.string.isRequired,
};

// == Export
export default Contact;
