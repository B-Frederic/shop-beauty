// React
import React from 'react';
// Components
import HeroSection from '../components/HeroSection';
import Slider from '../components/Slider';
import VirtualCard from '../components/VirtualCard';
import Products from '../components/Products';
import Testimonials from '../components/Testimonials';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <Slider />
            <VirtualCard />
            <Products />
            <Testimonials />
        </div>
    );
};

export default Home;