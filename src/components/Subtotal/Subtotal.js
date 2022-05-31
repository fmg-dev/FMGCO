import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getCartTotal } from "../reducer";
import "./subtotal.scss";
import { Link } from "react-router-dom";
function Subtotal() {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="cart__right">
      <h1>Summary</h1>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <div className="cart__right__form">
              <h4>Cargo:</h4>
              <h4>
                Subtotal: ({cart.length} items) : {`${value}`}
              </h4>
            </div>
            <Link to={"/paypage"}>
              <button className="cart__right__button">
                Proceed to checkout
              </button>
            </Link>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Subtotal;
