import React from 'react';

import {
  ContactUs,
  DigitalService,
  Footer,
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
        <Questions />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}

export default App;
