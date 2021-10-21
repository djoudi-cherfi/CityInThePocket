// Import
import React from 'react';

// FooterItem is list with items
import FooterInfos from 'src/containers/Footer/FooterInfos';
import SocialNetworks from './SocialNetworks';

import './footer.scss';

// == Composant
const Footer = () => (
  <footer className="footer">
    <FooterInfos />

    <SocialNetworks />
  </footer>
);

// == Export
export default Footer;
