import React from "react";
import { FaBath, FaBed, FaRupeeSign, FaWhatsapp, FaRegBuilding } from "react-icons/fa";
import { MdLocationOn, MdPerson } from "react-icons/md";
import "./olx.css"; // Import CSS for BEM styling

const property = {
  price: "₹ 14,500",
  title: "2 Bds • 2 Ba • 900 ft²",
  location: "Makhmalabad, Nashik 422004",
  owner: "Vaishali",
  images: ["/property.jpg", "/property2.jpg", "/property3.jpg"], // Replace with actual image paths
  details: {
    type: "Flats / Apartments",
    superBuiltUp: "900 sqft",
    furnishing: "Semi-Furnished",
    bachelorsAllowed: "Yes",
    carpetArea: "675 sqft",
    floorNo: "1",
    carParking: "1",
    bedrooms: "2",
    bathrooms: "2",
    listedBy: "Owner",
    facing: "East",
    maintenance: "₹500/month",
    totalFloors: "1",
    projectName: "Laxmi Avenue Building",
  },
  description:
    "2BHK flat for rent in Ahwamad Nagar, Makhmalabad with 2 bathrooms and 4 gallery and parking. Deposit: ₹40,000, Rent: ₹14,500 (negotiable), Maintenance: ₹500. Prefer Government Employees.",
};

const PropertyListing = () => {
  return (
    <div className="property">
      {/* Image Slider */}
      <div className="property__image-container">
        <img
          src={property.images[0]}
          alt="Property"
          className="property__image"
        />
      </div>

      {/* Price & Location */}
      <div className="property__info">
        <h2 className="property__price">
          <FaRupeeSign className="property__icon" />
          {property.price}
        </h2>
        <p className="property__location">
          <MdLocationOn className="property__icon property__icon--location" />
          {property.location}
        </p>
        <p className="property__title">{property.title}</p>
      </div>

      {/* Details */}
      <div className="property__details">
        <h3 className="property__details-heading">Details</h3>
        <div className="property__details-grid">
          <p><FaRegBuilding className="property__icon" /> {property.details.type}</p>
          <p><FaBed className="property__icon property__icon--bed" /> {property.details.bedrooms} Bedrooms</p>
          <p><FaBath className="property__icon property__icon--bath" /> {property.details.bathrooms} Bathrooms</p>
          <p><strong>Furnishing:</strong> {property.details.furnishing}</p>
          <p><strong>Facing:</strong> {property.details.facing}</p>
          <p><strong>Car Parking:</strong> {property.details.carParking}</p>
          <p><strong>Floor No:</strong> {property.details.floorNo} / {property.details.totalFloors}</p>
          <p><strong>Maintenance:</strong> {property.details.maintenance}</p>
        </div>
      </div>

      {/* Contact Seller */}
      <div className="property__contact">
        <MdPerson className="property__contact-icon" />
        <div className="property__contact-info">
          <h4 className="property__contact-name">{property.owner}</h4>
          <button className="property__contact-button">
            <FaWhatsapp className="property__icon property__icon--whatsapp" />
            Chat with Seller
          </button>
        </div>
      </div>

      {/* Description */}
      <div className="property__description">
        <h3 className="property__description-heading">Description</h3>
        <p className="property__description-text">{property.description}</p>
      </div>
    </div>
  );
};

export default PropertyListing;
