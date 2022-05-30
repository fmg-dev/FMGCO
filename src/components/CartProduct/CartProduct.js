import React from "react";
//!!!!! CSS
import "./cartProduct.scss";
//!!!!! ROUTER
import { Link } from "react-router-dom";
//!!!!! MUI ICONS
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleOutlinedIcon from "@mui/icons-material/RemoveCircleOutlined";
import { useStateValue } from "../StateProvider";

function CartProduct({ id, title, image, price }) {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  return (
    <div className="product">
      <>
        <div key={id} className="product__container">
          <img src={image} alt="" />
          <div className="product__container__text">
            <Link to={`/`}>
              <h4>{title}</h4>
            </Link>
            <h6>${price}</h6>
            <div className="product__container__text__button">
              <div className="product__container__text__button__left">
                <AddCircleRoundedIcon className="product__container__text__button__left__icon" />
                <p>2</p>
                <RemoveCircleOutlinedIcon className="product__container__text__button__left__icon" />
              </div>
              <div className="product__container__text__button__right">
                <button className="product__container__text__button__right__button" onClick={removeFromCart}>
                  <DeleteIcon className="product__container__text__button__right__button__icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default CartProduct;
