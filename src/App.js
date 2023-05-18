// React
import React from 'react';
// Components
import Header from './components/Layout/Header';
import HeroSection from './components/HeroSection';
import Slider from './components/Slider';
import VirtualCard from './components/VirtualCard';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Footer from './components/Layout/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Slider />
      <VirtualCard />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;