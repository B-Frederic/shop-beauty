// React
import React, { useEffect, useRef, useState } from 'react';
// Redux
import { useSelector } from 'react-redux';
// Stripe
import StripeCheckout from "react-stripe-checkout";
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
            <div>
                <div className="container-cart__info">
                    <div className="container-cart__info-cart">
                        <h2>Paniers totals</h2>
                        <p className="container-cart__info-cart--sub-total">Sous-total : <span>{totalAmt - delivery.current}€</span></p>
                        <p className="container-cart__info-cart--delivery">Frais de livraison: <span style={{color: delivery.current !== 0 ? "black" : "rgb(94, 182, 94)"}}>{delivery.current}€</span></p>
                        <span className="container-cart__info-cart--delivery-offer">(livraison offerte dès 80€ d'achat)</span>
                        <p className="container-cart__info-cart--payment">Total à payer : <span>{productData.length >= 1 ? totalAmt : 0}€</span></p>
                        {
                        totalAmt - delivery.current > 0 ? (
                            <>
                                <div className="container-cart__info-cart--stripe">
                                    <StripeCheckout
                                        norequired
                                        stripeKey="pk_test_51N54JHEZFgsxN1Q4dddinn8ng7uUcciSwxQI6ZwNNsLMrbfBK2FF3VFjqrIGVH4NW1MS9ih21fVgKN9b0FiXWcrh00JsSPVfVw"
                                        name="MonShop"
                                        amount={totalAmt * 100}
                                        label="Payer"
                                        currency="EUR"
                                        description={`Montant total à payer ${totalAmt} €`}
                                        // Create fake token Stripe
                                        token={() => ""}
                                        email={"unmailpourtester@test.fr"}
                                    />
                                </div>
                                <div className="container-cart__info-cart--test-card">
                                    <p>Info CB test :</p>
                                    <p>Numéro: 4242 4242 4242 4242</p>
                                    <p>Date: 12/34</p>
                                    <p>Cryptogramme: 123</p>
                                </div>
                            </> ) : (
                                ""
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;