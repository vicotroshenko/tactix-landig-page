import React from 'react';
import { Link } from 'react-router-dom';

import './Logo.scss';

const Logo = () => {
  return (
    <Link
      to={'/'}
      className="logo"
    >
      <span className="logo_letter">T</span>
      <span>Tactix.</span>
    </Link>
  );
};

export default Logo;
