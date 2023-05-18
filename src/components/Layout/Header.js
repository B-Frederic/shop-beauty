// React
import React from 'react';
// React icons
import { CgShoppingBag } from "react-icons/cg";
// Picture
import { Logo } from '../../assets';

const Header = () => {
    return (
        <div className="container-header">
            <div className="container-header__left">
                <img src={Logo} alt="logo" />
                <h1>Beauty</h1>
            </div>
            <div className="container-header__right">
                <nav>
                    <ul>
                        <li>Collections</li>
                        <li>Marques</li>
                        <li>Nouveautées</li>
                        <li>Soldes</li>
                    </ul>
                </nav>
                <input type="text" placeholder="Recherche"/>
                <div className="container-header__right-cart">
                    <div><span>0</span></div>
                    <CgShoppingBag className="icon"/>
                </div>
            </div>
        </div>
    );
};

export default Header;