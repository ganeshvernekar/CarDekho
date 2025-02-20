import React from "react";
import "./explore.css"
import { Search, Hotel, Plane, MapPin, Utensils, Star } from "lucide-react";

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
    <div className="p-5 bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen text-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Let’s <br /> Explore Hotels</h1>
        <button className="p-2 bg-gray-700 rounded-full">
          <Search size={20} />
        </button>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-4 mb-6">
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
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold">Popular Hotels</h2>
        <button className="text-orange-400 text-sm">See all</button>
      </div>

      <div className="overflow-x-auto flex space-x-4 pb-4">
        {hotels.map((hotel, index) => (
          <div key={index} className="hotel-card">
            <img src={hotel.image} alt={hotel.name} className="hotel-image" />
            <h3 className="hotel-name">{hotel.name}</h3>
            <p className="hotel-location">
              <MapPin size={14} className="inline-block mr-1" />
              {hotel.location}
            </p>
            <div className="flex justify-between items-center">
              <p className="hotel-price text-orange-400">{hotel.price}</p>
              <p className="hotel-rating">
                <Star size={14} className="text-yellow-400 inline-block mr-1" />
                {hotel.rating}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
