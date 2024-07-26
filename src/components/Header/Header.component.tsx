import React, { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';

import Logo from '../Logo/Logo.component';
import MobileMenu from '../Modal/MobileMenu/MobileMenu.component';
import Modal from '../Modal/Modal.component';
import PrimaryButton from '../PrimaryButton/PrimaryButton.component';
import PrimaryLink from '../PrimaryLink/PrimaryLink.component';
import './Header.scss';
import NavList from './NavList/NavList.component';

const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => setOpenModal((prev) => !prev);
  return (
    <header className="header">
      <Modal
        toggle={toggleModal}
        visible={openModal}
      >
        <MobileMenu toggle={toggleModal} />
      </Modal>
      <div className="header_container">
        <Logo />
        <NavList />
        <div className="header_buttons">
          <div className="header_buttons_contact">
            <PrimaryLink
              outline="black"
              link="contact us"
              size="small"
            >
              Contact us
            </PrimaryLink>
          </div>
          <div className="header_buttons_burger">
            <PrimaryButton
              outline="black"
              aria-label="open mobile menu"
              onClick={toggleModal}
            >
              <IoMdMenu />
            </PrimaryButton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
