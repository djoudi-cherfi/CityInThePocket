// Import
import React from 'react';

import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

// == Composant
const SocialNetworks = () => (
  <div className="footer-socialnetworks">
    <a href="https://www.instagram.com/" aria-label="Instagram" target="blank" rel="noopener">
      <FaInstagram className="footer-right-socialnetworks-icon" />
    </a>
    <a href="https://www.facebook.com/" aria-label="Facebook" target="blank" rel="noopener">
      <FaFacebook className="footer-right-socialnetworks-icon" />
    </a>
    <a href="https://twitter.com/" aria-label="Twitter" target="blank" rel="noopener">
      <FaTwitter className="footer-right-socialnetworks-icon" />
    </a>
  </div>
);

// == Export
export default SocialNetworks;
