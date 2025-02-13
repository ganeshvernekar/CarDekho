import React from "react";
import "./shoe.css";

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
              <img src="/shoe1.jpg" alt="Shoe 1" className="product-image" />
              <div>
                <p className="product-name">New Balance 57/40 Men's Sneakers</p>
                <p className="product-size">42 EU - 8.5 US</p>
                <p className="product-price">$129.00</p>
              </div>
            </div>
            <div className="product-item">
              <img src="/shoe2.jpg" alt="Shoe 2" className="product-image" />
              <div>
                <p className="product-name">New Balance 997H Men's Sneakers</p>
                <p className="product-size">42.5 EU - 9 US</p>
                <p className="product-price">$119.00</p>
              </div>
            </div>
            <div className="product-item">
              <img src="/shoe3.jpg" alt="Shoe 3" className="product-image" />
              <div>
                <p className="product-name">New Balance 57/40 Women's Sneakers</p>
                <p className="product-size">41.5 EU - 8 US</p>
                <p className="product-price">$149.00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Details */}
        <div>
          <h3 className="section-title">Payment Details</h3>
          <label className="label">Email Address</label>
          <input type="email" className="input" value="barlyvallendito@gmail.com" readOnly />
          <label className="label">Card Detail</label>
          <div className="card-details">
            <input type="text" className="input" placeholder="Card Number" />
            <input type="text" className="input short-input" placeholder="MM / YY" />
            <input type="text" className="input short-input" placeholder="CVC" />
          </div>
          <label className="label">Card Holder</label>
          <input type="text" className="input" value="Barly Vallend" readOnly />
          <label className="label">Billing Address</label>
          <input type="text" className="input" value="7851 Garfield Ave, Huntington Beach" readOnly />
          <input type="text" className="input" value="California (CA) 92648" readOnly />
          <div className="total-section">
            <div className="total-row">
              <span>Subtotal</span>
              <span>$397.00</span>
            </div>
            <div className="total-row">
              <span>VAT (20%)</span>
              <span>$2.89</span>
            </div>
            <div className="total-row">
              <strong>Total</strong>
              <strong>$399.89</strong>
            </div>
          </div>
          <button className="pay-button">Pay $399.89</button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;