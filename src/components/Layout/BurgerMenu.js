// React
import React from 'react';
import { Link } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";

const BurgerMenu = ({ setBurgerMenu }) => {

    const handleCloseBurgerMenu = () => {
        setBurgerMenu(false);
      };

    return (
        <div className="container-responsive-menu">
            <div>
                <nav>
                    <ul>
                        <Link to="/" onClick={handleCloseBurgerMenu}><li>Accueil</li></Link>
                        <li>Collections</li>
                        <li>Marques</li>
                        <li>Nouveautées</li>
                        <li>Soldes</li>
                    </ul>
                </nav>
            </div>
            <div className="container-responsive-menu--close">
                <RxCross2 onClick={handleCloseBurgerMenu} />
            </div>
        </div>
    );
};

export default BurgerMenu;