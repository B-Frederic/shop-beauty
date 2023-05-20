// React
import React from 'react';
import { Link } from 'react-router-dom';
// React icons
import { CgShoppingBag } from "react-icons/cg";
// Redux
import { useSelector } from 'react-redux';
// Picture
import { Logo } from '../../assets';

const Header = () => {

    const productData = useSelector((state) => state.shop.productData);


    return (
        <div className="container-header">
            <div className="container-header__left">
                <img src={Logo} alt="logo" />
                <h1>Beauty</h1>
            </div>
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
                <input type="text" placeholder="Recherche"/>
                <div className="container-header__right-cart">
                   <span>{productData.length}</span>
                    <Link to="/cart">
                        <CgShoppingBag className="icon"/>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;