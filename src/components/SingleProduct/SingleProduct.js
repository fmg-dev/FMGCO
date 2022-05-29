import React, { useEffect, useState } from "react";
//!!!!! CSS
import "./singleProduct.scss";
//!!!!! ROUTER
import { Link } from "react-router-dom";
//!!!!! MUI ICONS
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleOutlinedIcon from "@mui/icons-material/RemoveCircleOutlined";

function SingleProduct() {
  const [singleProduct, setSingleProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((response) => response.json())
      .then((json) => setSingleProduct(json));
  });
  return (
    <div className="product">
      {singleProduct.map((product) => {
        return (
          <>
            <div key={product.id} className="product__container">
              <img src={product.image} alt="" />
              <div className="product__container__text">
                <Link to={`/${product.title}`}>
                  <h4>{product.title}</h4>
                </Link>
                <h6>${product.price}</h6>
                <div className="product__container__text__button">
                  <div className="product__container__text__button__left">
                    <AddCircleRoundedIcon className="product__container__text__button__left__icon" />
                    <p>{singleProduct.length}</p>
                    <RemoveCircleOutlinedIcon className="product__container__text__button__left__icon" />
                  </div>
                  <div className="product__container__text__button__right">
                    <DeleteIcon className="product__container__text__button__right__icon" />
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default SingleProduct;
