// React
import React, { useEffect, useRef, useState } from 'react';
// Redux
import { useSelector } from 'react-redux';
// Components
import CartItem from '../components/CartItem';

const Cart = () => {

    const productData = useSelector((state) => state.shop.productData);
    const [totalAmt, setTotalAmt] = useState();
    let delivery = useRef(8);
    
    useEffect(() => {
        let price = 0;

        productData.map((item) => {
            price += (item.price * item.quantity);
            return price;
        });
        
        price >= 80 ? (delivery.current = 0) : (delivery.current = 8);

        setTotalAmt(price + delivery.current);

    }, [productData, delivery]);

    return (
        <div className="container-cart">
            <CartItem />
            <div className="container-cart__info">
                <div className="container-cart__info-cart">
                    <h2>Paniers totals</h2>
                    <p className="container-cart__info-cart--sub-total">Sous-total</p>
                    <p className="container-cart__info-cart--delivery">Frais de livraison : <span>{delivery.current}€</span></p>
                    <p className="container-cart__info-cart--payment">Total à payer : <span>{totalAmt?.toFixed(2)}€</span> </p>
                </div>
            </div>
        </div>
    );
};

export default Cart;