import React, { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import { useLocation } from 'react-router-dom';

import RouteKey from '../../constants/routes.constant';
import Logo from '../Logo/Logo.component';
import MobileMenu from '../Modal/MobileMenu/MobileMenu.component';
import Modal from '../Modal/Modal.component';
import PrimaryButton from '../PrimaryButton/PrimaryButton.component';
import PrimaryLink from '../PrimaryLink/PrimaryLink.component';
import './Header.scss';
import NavList from './NavList/NavList.component';

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const location = useLocation();
  const isMain = Boolean(location.pathname === RouteKey.MAIN);

  const toggleModal = () => setOpenModal((prev) => !prev);
  return (
    <header className="header">
      {isMain && (
        <Modal
          toggle={toggleModal}
          visible={openModal}
          bodyScroll={true}
        >
          <MobileMenu toggle={toggleModal} />
        </Modal>
      )}
      <div className="header_container">
        <Logo />
        {isMain && <NavList />}
        <div className="header_buttons">
          <div className="header_buttons_contact">
            <PrimaryLink
              outline="black"
              link={isMain ? '#contact us' : '/'}
              size="small"
            >
              {isMain ? 'Contact us' : 'Go home'}
            </PrimaryLink>
          </div>
          {isMain && (
            <div className="header_buttons_burger">
              <PrimaryButton
                outline="black"
                aria-label="open mobile menu"
                onClick={toggleModal}
              >
                <IoMdMenu />
              </PrimaryButton>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
