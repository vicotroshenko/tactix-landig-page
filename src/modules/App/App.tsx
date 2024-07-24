import React from 'react';

import { DigitalService, Header, Hero, Innovation } from '../../components';
import StrategicFramework from '../../components/StrategicFramework/StrategicFramework.component';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Innovation />
        <DigitalService />
        <StrategicFramework/>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
