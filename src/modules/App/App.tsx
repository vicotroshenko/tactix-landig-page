import React from 'react';

import {
  ContactUs,
  DigitalService,
  Header,
  Hero,
  Innovation,
  Performance,
  Questions,
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
        <Questions />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
