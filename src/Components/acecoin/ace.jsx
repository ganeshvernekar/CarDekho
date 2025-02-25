import React from "react";
import "./ace.css";

const PaymentForm = () => {
  return (
    <div className="payment-form">
      <div className="payment-form__container">
        {/* Left Section - Form */}
        <div className="payment-form__details">
          <h2 className="payment-form__title">
            <span className="payment-form__brand">AceCoinPay</span>
          </h2>

          <div className="payment-form__fields">
            <div className="payment-form__field">
              <label className="payment-form__label">Card Number</label>
              <input
                type="text"
                className="payment-form__input"
                placeholder="2412 - 7512 - 3412 - 3456"
              />
            </div>
            <div className="payment-form__row">
              <div className="payment-form__field payment-form__field--half">
                <label className="payment-form__label">CVV Number</label>
                <input
                  type="text"
                  className="payment-form__input"
                  placeholder="327"
                />
              </div>
              <div className="payment-form__field payment-form__field--half">
                <label className="payment-form__label">Expiry Date</label>
                <div className="payment-form__expiry">
                  <input
                    type="text"
                    className="payment-form__input"
                    placeholder="09"
                  />
                  <input
                    type="text"
                    className="payment-form__input"
                    placeholder="22"
                  />
                </div>
              </div>
            </div>
            <div className="payment-form__field">
              <label className="payment-form__label">Password</label>
              <input
                type="password"
                className="payment-form__input"
                placeholder="●●●●●●"
              />
            </div>
            <button className="payment-form__button">Pay Now</button>
          </div>
        </div>

        {/* Right Section - Card Summary */}
        <div className="payment-summary">
          <div className="payment-summary__card">
            <div className="payment-summary__header">
              <span className="payment-summary__name">Jonathan Michael</span>
              <span className="payment-summary__masked">**** 3456</span>
            </div>
            <div className="payment-summary__expiry">09/22</div>
          </div>

          <div className="payment-summary__details">
            <div className="payment-summary__row">
              <span>Company</span>
              <span className="payment-summary__value">Apple</span>
            </div>
            <div className="payment-summary__row">
              <span>Order Number</span>
              <span className="payment-summary__value">1266201</span>
            </div>
            <div className="payment-summary__row">
              <span>Product</span>
              <span className="payment-summary__value">MacBook Air</span>
            </div>
            <div className="payment-summary__row">
              <span>VAT (20%)</span>
              <span className="payment-summary__value">$100.00</span>
            </div>
            <hr className="payment-summary__divider" />
            <div className="payment-summary__total">
              <span>Total</span>
              <span>$549.99</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
