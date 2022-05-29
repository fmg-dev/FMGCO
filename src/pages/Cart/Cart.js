import React from "react";
import SingleProduct from "../../components/SingleProduct/SingleProduct";

//!!!!! CSS
import "./cart.scss";

function Cart() {
  return (
    <div className="cart">
      <div className="cart__left">
        <div className="cart__left">
          <SingleProduct/>
        </div>
      </div>
      <div className="cart__right">
        <h1>Summary</h1>
        <div className="cart__right__form">
          <h4>Cargo:</h4>
          <h4>Subtotal:</h4>
          <button className="cart__right__form__button">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
