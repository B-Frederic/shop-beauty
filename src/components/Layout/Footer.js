import React from 'react';
import { Logo } from '../../assets';

const Footer = () => {
    return (
        <div className="container-footer">
            <hr />
            <div className="container-footer__box">
                <div className="container-footer__box--logo">
                    <div>
                        <img src={Logo} alt="logo" />
                        <h1>Beauty</h1>
                    </div>
                    <div>
                        <p>© 2023, Beauty</p>
                    </div>
                </div>
                <div className="container-footer__box--office">
                    <h3>Nos locaux</h3>
                    <p>Paris, 75000</p>
                    <p>rue Beauty n°1</p>
                    <p>Téléphone: 05.00.00.00.01</p>
                    <p>E-mail: shop-beauty75@gmail.com</p>
                </div>
                <div className="container-footer__box--partner">
                    <h3>Nos partenaires</h3>
                    <p>Boutique de Luxe</p>
                    <p>Le bien-être</p>
                    <p>Makeup ENG</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;