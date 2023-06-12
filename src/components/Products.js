import React, { useState } from "react";
// Picture
import { Plane } from "../assets";
// Data
import { ProductsData } from "../data/products_data";
// AutoAnimate
import { useAutoAnimate } from "@formkit/auto-animate/react";
// Components
import Product from "./Product";
// Toastify
import { ToastContainer } from "react-toastify";


const Products = () => {

  const [parent] = useAutoAnimate();
  const [listProducts, setListProducts] = useState(ProductsData);

  const filter = (type) => {
    setListProducts(ProductsData.filter((product) => product.type === type));
  };

  return (
    <div>
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
              <Product key={index} product={product} />
              ))}
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Products;
