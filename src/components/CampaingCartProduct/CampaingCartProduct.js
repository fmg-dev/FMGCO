import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./campaingCartProduct.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";

function Campaign({ id, title, image, price }) {
  const [readMore, setReadMore] = useState(false);
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
    <div className="campaign">
      <h1>Campaigns</h1>
      <div key={id} className="campaign__container">
        <div className="campaign__container__card">
          <Link to={"/singleproduct"}>
            <h4>{title}</h4>
          </Link>
          <img src={image} alt="" />
          <h5>${price}</h5>
          <div className="campaign__container__card__buttons">
            <button onClick={addToCart}>
              <AddShoppingCartIcon />
            </button>
            <button>
              <SearchIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Campaign;
