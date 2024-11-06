import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import PromotedOffers from './components/PromotedOffers/PromotedOffers';
import Promotions from './components/Promotions/Promotions';
import Brands from './components/Brands/Brands';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <PromotedOffers />
      <Promotions />
      <Brands />
    </BrowserRouter>
  );
};

export default App;