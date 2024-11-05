import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import PromotedOffers from './components/PromotedOffers/PromotedOffers';
import Promotions from './components/Promotions/Promotions';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <PromotedOffers />
      <Promotions />
    </BrowserRouter>
  );
};

export default App;