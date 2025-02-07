import React, { useState } from "react";
import "./ice.css"
import biscuite from "./images/biscute.png"
import mango from "./images/mango.jpg"
import kids from "./images/kids.jpg"
import burger from "./images/burger.png"
import pizza from "./images/pizza.jpg"
import noodles from "./images/noodles.png"






const menuItems = [
  { img:biscuite, name: "Biscuit Mama with Sasa", price: 600,  available: 10 },
  { img:mango,name: "Alphonso Mango Ice Cream", price: 350, image: "krosang.jpg", available: 2 },
  { img: kids, name: "Strawberry Float", price: 550, image: "strawberry.jpg", available: 5 },
  { img:burger,name: "Crispy Veg Burger", price: 500, image: "kidsmeal.jpg", available: 8 },
  { img:pizza,name: "Verona Exotica Pizza", price: 250, image: "mango.jpg", available: 10 },
  { img:noodles,name: "Veg Noodles Bowl", price: 450, image: "smoothie.jpg", available: 10 },
  // { name: "Rainbow Cupcake", price: 95000, image: "cupcake.jpg", available: 10 },
  // { name: "Mie Gacoeng Spicy", price: 95000, image: "mie.jpg", available: 10 },
  // { name: "Mie Gacoeng Spicy", price: 95000, image: "mie.jpg", available: 10 },
];

const FoodMenu = () => {
  return (
    <div className="menu-container">
      <h2>Explore Our Best Menu</h2>
      <div className="category-filters">
        <button className="active">All</button>
        <button>Main Course</button>
        <button>Appetizer</button>
        <button>Dessert</button>
        <button>Side Dishes</button>
        <button>Beverages</button>
        <button>Kids</button>
      </div>
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div className="menu-card" key={index}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Rp {item.price.toLocaleString()}</p>
            

            <button>Order</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodMenu;
