import { nanoid } from 'nanoid';
import React from 'react';
import { RxCross2 } from 'react-icons/rx';

import { links } from '../../Header/NavList/NavList.component';
import Logo from '../../Logo/Logo.component';
import MediaIcons from '../../MediaIcons/MediaIcons.component';
import PrimaryButton from '../../PrimaryButton/PrimaryButton.component';
import PrimaryLink from '../../PrimaryLink/PrimaryLink.component';
import './MobileMenu.scss';

interface MobileMenuProps {
  toggle: () => void;
}
const MobileMenu: React.FC<MobileMenuProps> = ({ toggle }) => {
  const mobileLinks = [...links, 'contact us'];
  return (
    <div className="mobile_menu">
      <div className="mobile_menu_header">
        <Logo />
        <PrimaryButton
          outline="black"
          style={{ width: 44, height: 44, margin: 0 }}
          onClick={toggle}
        >
          <RxCross2 />
        </PrimaryButton>
      </div>
      <nav className="mobile_menu_nav">
        <ul>
          {mobileLinks.map((item) => (
            <li key={nanoid()}>
              <PrimaryLink
                outline="black"
                link={item}
                onClick={toggle}
                size="large"
              >
                {item}
              </PrimaryLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mobile_menu_footer">
        <MediaIcons />
      </div>
    </div>
  );
};

export default MobileMenu;
