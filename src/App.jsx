import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import PromotedOffers from './components/PromotedOffers/PromotedOffers';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <PromotedOffers />
    </BrowserRouter>
  );
};

export default App;