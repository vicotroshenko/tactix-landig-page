import { nanoid } from 'nanoid';
import React from 'react';

import Logo from '../Logo/Logo.component';
import './Footer.scss';
import media from './media';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_top">
          <Logo />
          <ul>
            {media.map(({ icon, link }) => (
              <li
                key={nanoid()}
                aria-label={`link to ${link}}`}
              >
                <a href={link}>
                  <img
                    src={icon}
                    alt={link}
                  />
                </a>
              </li>
            ))}
          </ul>
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
