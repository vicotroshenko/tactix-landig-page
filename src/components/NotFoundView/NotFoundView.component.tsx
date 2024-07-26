import React from 'react';

import { ReactComponent as NotFoundImage } from '../../assets/images/svg/404_page_not_found_flatline.svg';
import Logo from '../Logo/Logo.component';
import PrimaryLink from '../PrimaryLink/PrimaryLink.component';
import './NotFoundView.scss';

const NotFoundView = () => {
  return (
    <section className="not_found">
      <div className="not_found_container">
        <Logo />
        <div className="not_found_picture">
          <NotFoundImage />
          <p>Page Not Found</p>
          <PrimaryLink
            outline="green"
            style={{ height: 62, width: 178 }}
            link="/"
            size='medium'
          >
            Back to Home
          </PrimaryLink>
        </div>
        <p className="not_found_bottom_text">
          We Are Digital Marketing Agency. Transform Your Brand with Expert
          Marketing Strategies
        </p>
      </div>
    </section>
  );
};

export default NotFoundView;
