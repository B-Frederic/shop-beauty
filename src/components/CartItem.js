// React
import React, { useEffect, useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
// React icons
import { FaArrowUp } from "react-icons/fa";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { decrementQuantity, deleteItem, increamentQuantity, resetCart } from "../redux/CartProduct";

const CartItem = () => {

  const dispatch = useDispatch();
  const productData = useSelector((state) => state.shop.productData);

  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {

    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > 600);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);

  }, [scrollTop]);

  return (
    <div className="container-cart-item">
      <div>
        <h2>Mon panier d'achat</h2>
      </div>
        <div className="container-cart-item--reset-cart">
          <button onClick={() => {
            if (productData.length > 0 && window.confirm("Voulez-vous vider l'ensemble de votre panier ?")){
              return dispatch(resetCart());
            }
          }}>Vider mon panier</button>
        </div>
      <div className="container-cart-item__box">
        {productData.map((product, index) => (
          <div className="container-cart-item__box--product" key={index}>
            <h3>{product.name}</h3>
            <img src={product.img} alt={`produit ${product.name}`} />
            <div className="container-cart-item__box--product-box-increment">
                <button onClick={() =>
                    dispatch(
                      increamentQuantity({
                        id: product.id,
                        title: product.title,
                        image: product.image,
                        price: product.price,
                        quantity: 1,
                        description: product.description,
                      })
                    )
                  }>+</button>
                <p className="container-cart-item__box--product-quantity">{product.quantity}</p>
                <button onClick={() =>
                    dispatch(
                      decrementQuantity({
                        id: product.id,
                        title: product.title,
                        image: product.image,
                        price: product.price,
                        quantity: 1,
                        description: product.description,
                      })
                    )}>-</button>
            </div>
            <p className="container-cart-item__box--product-price">{product.quantity * product.price}€</p>
            <HiOutlineTrash className="container-cart-item__box--product-trash-can" onClick={() => window.confirm(`Voulez-vous supprimer "${product.name}" de votre panier ?`) ? dispatch(deleteItem(product.id)) : ""} />
          </div>
        ))}
      </div>
      {
        scrolling && (
          <div className="container-cart-item--to-top">
              <FaArrowUp onClick={() => window.scrollTo(0, 0)} />
          </div>
        )
      }
    </div>
  );
};

export default CartItem;
