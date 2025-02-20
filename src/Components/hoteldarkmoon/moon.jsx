import React from "react";
import "./moon.css";
import { Star, MapPin, Bookmark, Menu } from "lucide-react";

import room from "./images/room.jpg"
import room1 from "./images/room1.jpg"
import room3 from "./images/room3.jpg"
import room4 from "./images/room4.jpg"
import hottub5 from "./images/hottub5.jpg"

export default function HotelCard() {
  return (
    <div className="hotel-card-container">
      <div className="hotel-card">
        <div className="image-container">
        <img src={room} alt="Hotel Dark Moon" className="hotel-image" />
            
          
          <div className="top-left-buttons">
            <button className="icon-button">
              <Menu size={20} />
            </button>
          </div>
          <div className="top-right-buttons">
            <button className="icon-button">
              <Bookmark size={20} />
            </button>
          </div>
        </div>
        <div className="hotel-card-content">
          <h2 className="hotel-title">Hotel Dark Moon</h2>
          <div className="location">
            <MapPin size={16} className="location-icon" /> Paris, France
          </div>
          <div className="rating-price">
            <div className="rating">
              <Star size={16} className="rating-icon" />
              <span className="rating-text">4.9 (8.5K reviews)</span>
            </div>
            <div className="price">
              <span className="price-amount">₹1050</span>
              <span className="price-unit">/night</span>
            </div>
          </div>
          <p className="hotel-description">
            Hotel Dark Moon, 100 metres from Front Beach, Bali Motel Vung Tau
            offers accommodation with a garden, private parking and a shared...
          </p>
          <div className="amenities">
            <div className="amenity">
              <img src={room1} alt="Bed" className="amenity-icon" /> 2 Bed
            </div>
            <div className="amenity">
              <img src={room3} alt="1 Room" className="amenity-icon" />
              1 Room
            </div>
            <div className="amenity">
              <img src={room4} alt="AC Rooms" className="amenity-icon" />
              AC Rooms
            </div>
            <div className="amenity">
              <img src={hottub5} alt="AC" className="amenity-icon" /> HotTub
            </div>
          </div>
          <button className="book-now-button">Book Now</button>
        </div>
      </div>
    </div>
  );
}
