import React from 'react';

import { ReactComponent as HeroImage2 } from '../../../assets/images/svg/hero-1-2.svg';
import './Hero1.scss';

const Hero1 = () => {
  return (
    <div className="hero_image_cover">
      <div className="under_image"></div>
      <HeroImage2 className="over_image" />
    </div>
  );
};

export default Hero1;
