import React from 'react';
import { FaArrowRight } from 'react-icons/fa';



import { ReactComponent as HeroImage1 } from '../../assets/images/svg/hero-1.svg';
import { ReactComponent as HeroImage2 } from '../../assets/images/svg/hero-2.svg';
import PrimaryLink from '../PrimaryLink/PrimaryLink.component';
import './Hero.scss';


const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero_container">
        <PrimaryLink
          outline="light_green"
          style={{ margin: '0 auto 32px auto' }}
          link="faq"
          size='small'
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
          <HeroImage1 className="hero_actions_images_1" />
          <div className="hero_buttons">
              <PrimaryLink
                link="/"
                outline="green"
                size='medium'
              >
                Schedule Consultation
              </PrimaryLink>
              <PrimaryLink
                link="service"
                outline="black"
                size='medium'
              >
                Our Services
              </PrimaryLink>
          </div>
          <HeroImage2 className="hero_actions_images_2" />
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