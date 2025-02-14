import React from "react";
import "./ace.css"

const PaymentForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-[600px] flex">
        {/* Left Section - Form */}
        <div className="w-2/3 p-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <span className="text-blue-500">AceCoinPay</span>
          </h2>

          <div className="mt-4 space-y-4">
            <div>
              <label className="block text-gray-600">Card Number</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg mt-1"
                placeholder="2412 - 7512 - 3412 - 3456"
              />
            </div>
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-gray-600">CVV Number</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg mt-1"
                  placeholder="327"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-600">Expiry Date</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    className="w-1/2 px-3 py-2 border rounded-lg mt-1"
                    placeholder="09"
                  />
                  <input
                    type="text"
                    className="w-1/2 px-3 py-2 border rounded-lg mt-1"
                    placeholder="22"
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-gray-600">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded-lg mt-1"
                placeholder="●●●●●●"
              />
            </div>
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg mt-4 hover:bg-blue-600">
              Pay Now
            </button>
          </div>
        </div>

        {/* Right Section - Card Summary */}
        <div className="w-1/3 bg-gray-100 p-4 rounded-xl">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between">
              <span className="font-semibold">Jonathan Michael</span>
              <span>**** 3456</span>
            </div>
            <div className="mt-2 text-gray-600 text-sm">09/22</div>
          </div>
          <div className="mt-4 text-gray-700">
            <div className="flex justify-between">
              <span>Company</span>
              <span className="font-semibold">Apple</span>
            </div>
            <div className="flex justify-between mt-1">
              <span>Order Number</span>
              <span className="font-semibold">1266201</span>
            </div>
            <div className="flex justify-between mt-1">
              <span>Product</span>
              <span className="font-semibold">MacBook Air</span>
            </div>
            <div className="flex justify-between mt-1">
              <span>VAT (20%)</span>
              <span className="font-semibold">$100.00</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between text-lg font-semibold">
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
