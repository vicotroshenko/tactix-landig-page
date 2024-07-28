import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

import RouteKey from '../../constants/routes.constant';
import PrimaryLink from '../PrimaryLink/PrimaryLink.component';
import { Hero1, Hero2 } from '../SVG';
import './Hero.scss';

const Hero = () => {
  return (
    <section
      className="hero"
      id="home"
    >
      <div className="hero_container">
        <PrimaryLink
          outline="light_green"
          style={{ margin: '0 auto 32px auto' }}
          link="#FAQ"
          size="small"
        >
          What Our Clients Say
          <FaArrowRight className="hero_link_arrow" />
        </PrimaryLink>
        <div className="hero_title_wrapper">
          <h1>Transform Your Brand with Expert Marketing Strategies</h1>
          <p>
            Experience the transformative power of our expert marketing
            strategies as we partner with you to elevate your brand's digital
            presence. Let us take your brand to new heights online!
          </p>
        </div>
        <div className="hero_actions_images">
          <div className="hero_actions_images_1">
            <Hero1 />
          </div>
          <div className="hero_buttons">
            <PrimaryLink
              link="/"
              outline="green"
              size="medium"
            >
              Schedule Consultation
            </PrimaryLink>
            <PrimaryLink
              link={RouteKey.LICENSES}
              outline="black"
              size="medium"
            >
              Our Services
            </PrimaryLink>
          </div>
          <div className="hero_actions_images_2">
            <Hero2 />
          </div>
        </div>
        <p className="hero_bottom_text">
          With innovative strategies and a results-driven approach, we empower
          brands to thrive in the ever-evolving digital landscape.
        </p>
      </div>
    </section>
  );
};

export default Hero;
