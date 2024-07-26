import React from 'react';

import Logo from '../Logo/Logo.component';
import MediaIcons from '../MediaIcons/MediaIcons.component';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_top">
          <Logo />
          <MediaIcons />
        </div>
        <div className="footer_bottom">
          <p>© Tactix 2024, All Rights Reserved</p>
          <p>Licenses</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
