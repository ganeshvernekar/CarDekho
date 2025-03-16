import React from "react";
import { MapPin, Star, Bookmark, ImageIcon, Pizza } from "lucide-react";
import "./hotelmenureal.css"
import pizza2 from "./images/pizza2.jpeg"
import pizza1 from "./images/pizza1.jpeg"
import pizza3 from "./images/pizza3.jpeg"
import pizza4 from "./images/pizza4.jpeg"
import pizza5 from "./images/pizza5.jpeg"



export default function PizzaMenu() {
  const featuredItems = [
    { src: pizza1, title: "", description: "Vegetable & Cheese", price: "$35.00" },
    { src: pizza4, title: "", description: "Vegetable & Cheese", price: "$20.00" },
    { src: pizza3, title: "", description: "Classic Cheese & Tomato", price: "$25.00" },
    { src: pizza5, title: " ", description: "Hot & Spicy", price: "$30.00" },
   
  ];

  return (
    <div className="menu-container">
      {/* Header Image Section */}
      <div className="menu-header">
        <img src={pizza2} className="menu-header-image" />
        <button className="order-button">Order</button>
      </div>

      <div className="menu-details">
        <h2 className="menu-title">La Case Blancia</h2>

        <div className="menu-rating">
          <Star className="rating-icon" size={16} />
          <span>4.5 (23 Previews)</span>
        </div>

        <div className="menu-location">
          <MapPin size={16} />
          <span>03 Jamson Manors Apt. 187</span>
        </div>

        <div className="menu-stats">
          <div className="menu-stat-item">
            <Bookmark size={16} />
            <span>137k</span>
          </div>
          <div className="menu-stat-item">
            <ImageIcon size={16} />
            <span>362</span>
          </div>
          <div className="menu-stat-item">
            <MapPin size={16} />
            <span>1.6km</span>
          </div>
        </div>

        <p className="menu-description">Pickup on your time. Your order is ready when you are.</p>

        <h3 className="featured-title">Featured</h3>

        <div className="featured-items">
          {featuredItems.map((item, index) => (
            <div key={index} className="featured-card">
              <img src={item.src} alt={item.title} className="featured-image" />
             
              <h4 className="featured-name">{item.title}</h4>
              <p className="featured-description">{item.description}</p>
              <p className="featured-price">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}