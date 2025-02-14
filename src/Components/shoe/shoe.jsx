import React from "react";
import "./shoe.css";
import jordan3 from "./images/jordan3.png"
import jordan from "./images/jordan.png"
import jordan1 from "./images/jordan1.png"


const CheckoutPage = () => {
  return (
    <div className="checkout-container">
      <h2 className="title">Order Overview</h2>
      <div className="grid-layout">
        {/* Order Summary */}
        <div>
          <h3 className="section-title">Summary Order</h3>
          <p className="description">Check your item and select your shipping for a better experience.</p>
          <div className="product-list">
            <div className="product-item">
              <img src={jordan3} alt="air.png" className="product-image" />
              <div>
                <p className="product-name">New Balance 57/40 Men's Sneakers</p>
                <p className="product-size">42 EU - 8.5 US</p>
                <p className="product-price">₹10.700</p>
              </div>
            </div>
            <div className="product-item">
              <img src={jordan} alt="Shoe 2" className="product-image" />
              <div>
                <p className="product-name">New Balance 997H Men's Sneakers</p>
                <p className="product-size">42.5 EU - 9 US</p>
                <p className="product-price">₹75.000</p>
              </div>
            </div>
            <div className="product-item">
              <img src={jordan1} alt="Shoe 3" className="product-image" />
              <div>
                <p className="product-name">New Balance 57/40 Women's Sneakers</p>
                <p className="product-size">41.5 EU - 8 US</p>
                <p className="product-price">₹1.50.000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Details */}
        <div>
          <h3 className="section-title">Payment Details</h3>
          <label className="label">Email Address</label>
          <input type="email" className="input" value="orderreview@gmail.com" readOnly />
          <label className="label">Card Detail</label>
          <div className="card-details">
            <input type="text" className="input" placeholder="Card Number" />
            <input type="text" className="input short-input" placeholder="MM / YY" />
            <input type="text" className="input short-input" placeholder="CVC" />
          </div>
          <label className="label">Card Holder</label>
          <input type="text" className="input" value="Barly Vallend" readOnly />
          <label className="label">Billing Address</label>
          <input type="text" className="input" value="581440 KUMTA UTTARKANNADA" readOnly />
          <input type="text" className="input1" value="KARNATAKA (KA) 581440" readOnly />
          <div className="total-section">
            <div className="total-row">
              <span>Subtotal</span>
              <span>₹ 10.630</span>
            </div>
            <div className="total-row">
              <span>VAT (20%)</span>
              <span>₹70.6</span>
            </div>
            <div className="total-row">
              <strong>Total</strong>
              <strong>₹10.700</strong>
            </div>
          </div>
          <button className="pay-button">Pay ₹10.700</button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;