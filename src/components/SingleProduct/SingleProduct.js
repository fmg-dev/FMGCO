import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import "./singleProduct.scss";

function SingleProduct({ id, title, desc, image, price }) {
  const [{ cart }, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
      },
    });
  };
  return (
    <div key={id} className="singleProduct">
      <div className="singleProduct__container">
        <div className="singleProduct__container__left">
          <img src={image} alt="" />
        </div>
        <div className="singleProduct__container__right">
          <Link to={"/singleproduct"}>
            <h1>{title}</h1>
          </Link>
          <p>{desc}</p>
          <h4>${price}</h4>
          <div className="singleProduct__container__right__button">
            <button onClick={addToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
