import React, { useEffect, useState } from "react";
import Subtotal from "../../components/Subtotal/Subtotal";
import { useStateValue } from "../StateProvider";

//!!!!! CSS
import "./cart.scss";

import CartProduct from "../CartProduct/CartProduct";
import Campaign from "../Campaign/Campaign";

function Cart() {
  const [{ cart }, dispatch] = useStateValue();
  //burada sepetten çekeceğimiz ürünleri sergilicez
  // daha sonra id image title price ekleyip cart productta çağırıcaz
  return (
    <div className="cart">
      <div className="cart__left">
        {cart.map((item) => (
          <>
            <CartProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
            />
          </>
        ))}
      </div>
      <Subtotal />
    </div>
  );
}

export default Cart;
