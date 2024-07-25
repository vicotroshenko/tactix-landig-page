import React from 'react';

import {
  ContactUs,
  DigitalService,
  Header,
  Hero,
  Innovation,
  Performance,
  StrategicFramework,
  Voices,
} from '../../components';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Innovation />
        <DigitalService />
        <StrategicFramework />
        <Voices />
        <Performance />
        <ContactUs />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
