import React from "react";
import "./shoe.css";
import jordan3 from "./images/jordan3.png";
import jordan from "./images/jordan.png";
import jordan1 from "./images/jordan1.png";

const CheckoutPage = () => {
  return (
    <div className="checkout">
      <h2 className="checkout__title">Order Overview</h2>
      <div className="checkout__grid">
        {/* Order Summary */}
        <div className="checkout__summary">
          <h3 className="checkout__section-title">Order Summary</h3>
          <p className="checkout__description">Check your item and select your shipping for a better experience.</p>
          <div className="checkout__product-list">
            <div className="checkout__product-item">
              <img src={jordan3} alt="Air Jordan 3" className="checkout__product-image" />
              <div>
                <p className="checkout__product-name">New Balance  Men's Sneakers</p>
                <p className="checkout__product-size"></p>
                <p className="checkout__product-price">₹10,700</p>
              </div>
            </div>
            <div className="checkout__product-item">
              <img src={jordan} alt="Air Jordan" className="checkout__product-image" />
              <div>
                <p className="checkout__product-name">New Balance 997H Men's Sneakers</p>
                <p className="checkout__product-size"></p>
                <p className="checkout__product-price">₹75,000</p>
              </div>
            </div>
            <div className="checkout__product-item">
              <img src={jordan1} alt="Air Jordan 1" className="checkout__product-image" />
              <div>
                <p className="checkout__product-name">New Balance Sneakers</p>
                <p className="checkout__product-size"></p>
                <p className="checkout__product-price">₹1,50,000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Details */}
        <div className="checkout__payment">
          <h3 className="checkout__section-title">Payment Details</h3>
          <label className="checkout__label">Email Address</label>
          <input type="email" className="checkout__input" value="orderreview@gmail.com" readOnly />
          <label className="checkout__label">Card Detail</label>
          <div className="checkout__card-details">
            <input type="text" className="checkout__input" placeholder="Card Number" />
            <input type="text" className="checkout__input checkout__input--short" placeholder="MM / YY" />
            <input type="text" className="checkout__input checkout__input--short" placeholder="CVC" />
          </div>
          <label className="checkout__label">Card Holder</label>
          <input type="text" className="checkout__input" value="Barly Vallend" readOnly />
          <label className="checkout__label">Billing Address</label>
          <input type="text" className="checkout__input" value="581440 KUMTA UTTARKANNADA" readOnly />
          <input type="text" className="checkout__input checkout__input--secondary" value="KARNATAKA (KA) 581440" readOnly />
          <div className="checkout__total">
            <div className="checkout__total-row">
              <span>Subtotal</span>
              <span>₹10,630</span>
            </div>
            <div className="checkout__total-row">
              <span>VAT (20%)</span>
              <span>₹70.6</span>
            </div>
            <div className="checkout__total-row checkout__total-row--strong">
              <strong>Total</strong>
              <strong>₹10,700</strong>
            </div>
          </div>
          <button className="checkout__pay-button">Pay ₹10,700</button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;