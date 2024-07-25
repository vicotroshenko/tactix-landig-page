import React from 'react';

import {
  ContactUs,
  DigitalService,
  Hero,
  Innovation,
  Layout,
  Performance,
  Questions,
  StrategicFramework,
  Voices,
} from '../components';

const Main = () => {
  return (
    <Layout>
      <Hero />
      <Innovation />
      <DigitalService />
      <StrategicFramework />
      <Voices />
      <Performance />
      <Questions />
      <ContactUs />
    </Layout>
  );
};

export default Main;
