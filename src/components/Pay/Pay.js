import React from "react";
import "./pay.scss";
function Pay() {
  return (
    <div className="pay">
      <div className="pay__form">
        <form action="">
          <label htmlFor="cardNumber">Card number</label>
          <input type="number" id="cardNumber" placeholder="Card number" />
          <label htmlFor="name">Name on card</label>
          <input type="text" id="name" placeholder="Name on card" />
          <div className="pay__select">
            <label htmlFor="date">Expiration date</label>
            <select name="date" id="date">
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
            <select name="expireYY" id="expireYY">
              <option value="22">2022</option>
              <option value="23">2023</option>
              <option value="24">2024</option>
              <option value="25">2025</option>
              <option value="26">2026</option>
              <option value="27">2027</option>
            </select>
          </div>
          <button>Place Order</button>
        </form>
      </div>
      <div className="pay__payment">
        <p>FMG E-CO accepts all major credit and debit cards:</p>
        <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
      </div>
    </div>
  );
}

export default Pay;
