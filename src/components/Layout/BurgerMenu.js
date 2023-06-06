// React
import React from 'react';
import { Link } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";
// Motion
import { motion } from "framer-motion"


const BurgerMenu = ({ setBurgerMenu }) => {

    const handleCloseBurgerMenu = () => {
        setBurgerMenu(false);
      };

    return (
        <motion.div 
        initial={{x: -300}}
        animate={{x: 0}}
        transition={{
            duration: "0.8"
        }}
        className="container-responsive-menu">
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
        </motion.div>
    );
};

export default BurgerMenu;