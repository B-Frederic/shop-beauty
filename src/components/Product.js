// React
import React from "react";
// Redux
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartProduct";

const Product = ({ product }) => {

  const dispatch = useDispatch();

  return (
    <div className="container-products__product">
      <div className="container-products__card">
        <div className="container-products__card-info">
          <h3>{product.name}</h3>
          <p>{product.detail}</p>
        </div>
        <span>{product.price}€</span>
        <button
          onClick={() => {
            dispatch(
              addToCart({
                id: product.id,
                img: product.img,
                name: product.name,
                detail: product.detail,
                quantity: 1,
                price: product.price,
              })
            );
          }}
        >
          Ajouter
        </button>
      </div>
      <img
        className="container-products__product-img"
        src={product.img}
        alt={product.name}
      />
      <div className="container-products__product-tag">
        <div>Qté: <span>{product.stock}</span></div>
      </div>
    </div>
  );
};

export default Product;
