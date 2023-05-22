// React
import React from 'react';
// Picture
import { Hero } from '../assets';

const HeroSection = () => {
    return (
        <div className="container-hero_section">
            {/* Left side */}
            <div className="container-hero_section__left-side">
                <h2 className="container-hero_section__left-side--title-text">Crème de protection</h2>
                <div className="container-hero_section__left-side--text">
                    <p>Collection Branchée</p>
                    <p>Nouvelle collection qui laisse un voile doux pour une peau visiblement plus saine.</p>
                </div>
            </div>
            {/* Middle side */}
            <div className="container-hero_section__middle-side">
                <div className="container-hero_section__middle-side--circle"></div>
                <img src={Hero} alt="femme avec un chapeau" width={600}/>
            </div>
            {/* Left side */}
            <div className="container-hero_section__right-side">
                <div className="container-hero_section__right-side--trafic">
                    <p>1.2m</p>
                    <p>Trafic mensuel</p>
                </div>
                <div className="container-hero_section__right-side--customer">
                    <p>150k</p>
                    <p>Personnes satisfaites</p>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;