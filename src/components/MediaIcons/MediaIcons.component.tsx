import React from 'react';

import './MediaIcons.scss';
import { nanoid } from 'nanoid';
import media from './media';
const MediaIcons = () => {
  return (
    <ul className='media_icons_list'>
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
  );
};

export default MediaIcons;
