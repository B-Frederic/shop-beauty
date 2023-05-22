// React
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// React icons
import { CgShoppingBag } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx"; 
// Redux
import { useSelector } from 'react-redux';
// Picture
import { Logo } from '../../assets';
import BurgerMenu from './BurgerMenu';

const Header = () => {

    const productData = useSelector((state) => state.shop.productData);
    const [burgerMenu, setBurgerMenu] = useState(false);

    const handleBurgerMenu = () => {
        setBurgerMenu(!burgerMenu);
    };

    return (
        <div className="container-header">
            <Link to="/">
                <div className="container-header__left">
                        <img src={Logo} alt="logo" />
                        <h1>Beauty</h1>
                </div>
            </Link>
            <div className="container-header__right">
                <nav>
                    <ul>
                        <Link to="/"><li>Accueil</li></Link>
                        <li>Collections</li>
                        <li>Marques</li>
                        <li>Nouveautées</li>
                        <li>Soldes</li>
                    </ul>
                </nav>
                <div className="container-header__right--cart">
                    <Link to="/cart">
                        <span>{productData.length}</span>
                    </Link>
                    <Link className="container-header__right--cart-link" to="/cart">
                        <CgShoppingBag className="icon"/>
                    </Link>
                    <div className="container-header__right--cart-burger-menu">
                        <RxHamburgerMenu onClick={handleBurgerMenu} />
                    </div>
                </div>
            </div>
            {burgerMenu && <BurgerMenu setBurgerMenu={setBurgerMenu} />}
        </div>
    );
};

export default Header;