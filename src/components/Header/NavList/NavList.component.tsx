import { nanoid } from 'nanoid';
import React from 'react';

import './NavList.scss';

const links = ['home', 'about', 'service', 'approach', 'faq'];

const NavList = () => {
  return (
    <nav className='nav'>
      <ul className='nav_list'>
        {links.map((link) => (
          <li key={nanoid()} className='nav_list_item'>
            <a href={`/${link}`}>{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavList;
