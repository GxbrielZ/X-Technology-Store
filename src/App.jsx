import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import PromotedOffers from './components/PromotedOffers/PromotedOffers';
import Promotions from './components/Promotions/Promotions';
import Brands from './components/Brands/Brands';
import Bestsellers from './components/Bestsellers/Bestsellers';
import Guides from './components/Guides/Guides';
import Features from './components/Features/Features';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <PromotedOffers />
      <Promotions />
      <Brands />
      <Bestsellers />
      <Guides />
      <Features />
      <Newsletter />
      <Footer />
    </BrowserRouter>
  );
};

export default App;