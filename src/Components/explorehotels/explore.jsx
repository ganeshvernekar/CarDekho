import React from "react";
import "./explore.css";
import { Search, Hotel, Plane, MapPin, Utensils, Star } from "lucide-react";
import hotel from "./images/hotel.jpg"

const hotels = [
  {
    name: "Hotel Royal Blue",
    location: "Zurich, Switzerland",
    price: "$480/night",
    rating: "4.9 (6.8K)",
    image: "hotel-royal-blue.jpg",
  },
  {
    name: "Warwick Grand Hotel",
    location: "New York, USA",
    price: "$480/night",
    rating: "5.0 (2.6K)",
    image: "warwick-grand.jpg",
  },
  {
    name: "Water Garden Inn",
    location: "Venice, Italy",
    price: "$350/night",
    rating: "4.7 (4.2K)",
    image: "water-garden.jpg",
  },
];

export default function ExploreHotels() {
  return (
    <div className="explore-container">
      {/* Header */}
      <div className="explore-header">
        <h1 className="explore-title">
          Let’s <br /> Explore Hotels
        </h1>
        <button className="search-button">
          <Search size={20} />
        </button>
      </div>

      {/* Navigation Tabs */}
      <div className="navigation-tabs">
        <button className="tab-button active">
          <Hotel size={18} /> Hotel
        </button>
        <button className="tab-button">
          <Plane size={18} /> Flight
        </button>
        <button className="tab-button">
          <MapPin size={18} /> Place
        </button>
        <button className="tab-button">
          <Utensils size={18} /> Food
        </button>
      </div>

      {/* Popular Hotels Section */}
      <div className="section-header">
        <h2 className="section-title">Popular Hotels</h2>
        <button className="see-all-button">See all</button>
      </div>

      <div className="hotels-list">
        {hotels.map((hotel, index) => (
          <div key={index} className="hotel-card">
            <img src={hotel.image} alt={hotel.name} className="hotel-image" />
            <h3 className="hotel-name">{hotel.name}</h3>
            <p className="hotel-location">
              <MapPin size={14} className="icon" />
              {hotel.location}
            </p>
            <div className="hotel-info">
              <p className="hotel-price">{hotel.price}</p>
              <p className="hotel-rating">
                <Star size={14} className="icon star-icon" />
                {hotel.rating}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
