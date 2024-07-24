import React from 'react';

import {
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
      </main>
      <footer></footer>
    </>
  );
}

export default App;
