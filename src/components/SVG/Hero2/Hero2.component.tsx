import React from 'react';

import { ReactComponent as HeroImage1 } from '../../../assets/images/svg/hero-2-2.svg';
import './Hero2.scss';

const Hero2 = () => {
  return (
    <div className="hero_image_cover_2">
      <div className="under_image"></div>
      <HeroImage1 className="over_image" />
    </div>
  );
};

export default Hero2;
