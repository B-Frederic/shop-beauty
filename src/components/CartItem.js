// React
import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { decrementQuantity, deleteItem, increamentQuantity } from "../redux/CartProduct";

const CartItem = () => {

  const dispatch = useDispatch();
  const productData = useSelector((state) => state.shop.productData);

  return (
    <div className="container-cart-item">
      <div>
        <h2>Mon panier d'achat</h2>
      </div>
      <div className="container-cart-item__box">
        {productData.map((product, index) => (
          <div className="container-cart-item__box-product" key={index}>
            <h3>{product.name}</h3>
            <img src={product.img} alt={`produit ${product.name}`} />
            <div className="container-cart-item__box-product-box-quantity">
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
                <p className="container-cart-item__box-product-box-quantity--quantity">{product.quantity}</p>
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
            <p className="container-cart-item__box-product--price">{product.quantity * product.price}€</p>
            <HiOutlineTrash className="container-cart-item__box-product--trash-can" onClick={() => dispatch(deleteItem(product.id))} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartItem;
