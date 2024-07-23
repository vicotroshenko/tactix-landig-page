import React from 'react';

import Header from '../../components/Header/Header.component';
import Hero from '../../components/Hero/Hero';
import Innovation from '../../components/Innovation/Innovation.component';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Innovation/>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
