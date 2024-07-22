import React from 'react';
import { IoMdMenu } from 'react-icons/io';

import Logo from '../Logo/Logo.component';
import PrimaryButton from '../PrimaryButton/PrimaryButton.component';
import './Header.scss';
import NavList from './NavList/NavList.component';

const Header = () => {
  return (
    <header className="header">
      <div className="header_container">
        <Logo />
        <NavList/>
        <div className="header_buttons">
          <div className="header_buttons_contact">
            <PrimaryButton outline="black">Contact us</PrimaryButton>
          </div>
          <div className="header_buttons_burger">
            <PrimaryButton outline="black" aria-label='open mobile menu'>
              <IoMdMenu />
            </PrimaryButton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
