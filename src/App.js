// React
import React from 'react';
// Components
import Header from './components/Layout/Header';
import HeroSection from './components/HeroSection';
import Slider from './components/Slider';

const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Slider />
    </div>
  );
};

export default App;