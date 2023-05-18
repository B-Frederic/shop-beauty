import React, { useState } from "react";
// Picture
import { Plane } from "../assets";
// Data
import { ProductsData } from "../data/products_data";
// AutoAnimate
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Products = () => {
  const [parent] = useAutoAnimate();
  const [listProducts, setListProducts] = useState(ProductsData);

  const filter = (type) => {
    setListProducts(ProductsData.filter((product) => product.type === type));
  };

  return (
    <div className="container-products">
      <img
        className="container-products-img"
        src={Plane}
        alt="coeur animé volant"
      />
      <h2>Nos produits vedettes</h2>
      <div className="container-products__grid">
        <menu>
          <ul>
            <li onClick={() => setListProducts(ProductsData)}>Tous</li>
            <li onClick={() => filter("soin peau")}>Soin peau</li>
            <li onClick={() => filter("après-shampoing")}>Après-shampoing</li>
            <li onClick={() => filter("fond de teint")}>Fond de teint</li>
          </ul>
        </menu>
        <div className="container-products__list" ref={parent}>
          {listProducts.map((product, index) => (
            <div key={index} className="container-products__product">
              <div className="container-products__card">
                <div className="container-products__card-info">
                  <h3>{product.name}</h3>
                  <p>{product.detail}</p>
                </div>
                <span>{product.price}€</span>
                <button>Ajouter</button>
              </div>
              <img
                className="container-products__product-img"
                src={product.img}
                alt={product.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
