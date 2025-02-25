import React from "react";
import "./hotel.css";
import { FaUserCircle, FaLock, FaChevronRight, FaHome } from "react-icons/fa";
import { MdOutlineRoomService } from "react-icons/md";
import { AiOutlineKey } from "react-icons/ai";
import { IoBedOutline } from "react-icons/io5";
import { BiCycling } from "react-icons/bi";

const HotelGuestDashboard = () => {
  return (
    <div className="hotel-dashboard">
      <div className="hotel-dashboard__container">
        {/* Header Section */}
        <div className="hotel-dashboard__header">
          <FaUserCircle className="hotel-dashboard__icon" />
          <div>
            <h2 className="hotel-dashboard__guest-name">Joana Barros</h2>
            <p className="hotel-dashboard__guest-role">Hotel Guest</p>
          </div>
          <FaLock className="hotel-dashboard__lock-icon" />
        </div>

        {/* Recommended Section */}
        <div className="hotel-dashboard__recommendation">
          <h3 className="hotel-dashboard__recommendation-title">Enjoy some me time</h3>
          <p className="hotel-dashboard__recommendation-text">
            Relax with our massages and treatments.
          </p>
          <span className="hotel-dashboard__recommendation-time">
            Spa facilities will close in 4 hours
          </span>
          <span className="hotel-dashboard__recommendation-price">From $30/session</span>
        </div>

        {/* Popular Experiences */}
        <div className="hotel-dashboard__experiences">
          <h3 className="hotel-dashboard__section-title">Popular experiences</h3>
          <div className="hotel-dashboard__experiences-list">
            <div className="hotel-dashboard__experience">
              <BiCycling className="hotel-dashboard__experience-icon" /> Bike Riding
            </div>
            <div className="hotel-dashboard__experience">🍽️ Dinner at the Table</div>
          </div>
        </div>

        {/* All Services */}
        <div className="hotel-dashboard__services">
          <h3 className="hotel-dashboard__section-title">All services</h3>
          <div className="hotel-dashboard__services-list">
            <div className="hotel-dashboard__service">
              <span><FaHome /> Facilities</span>
              <FaChevronRight className="hotel-dashboard__service-icon" />
            </div>
            <div className="hotel-dashboard__service">
              <span><AiOutlineKey /> Virtual Key</span>
              <FaChevronRight className="hotel-dashboard__service-icon" />
            </div>
            <div className="hotel-dashboard__service">
              <span><IoBedOutline /> My Room</span>
              <FaChevronRight className="hotel-dashboard__service-icon" />
            </div>
            <div className="hotel-dashboard__service">
              <span><MdOutlineRoomService /> Order Room Service</span>
              <FaChevronRight className="hotel-dashboard__service-icon" />
            </div>
          </div>
        </div>

        {/* Points Section */}
        <div className="hotel-dashboard__points">
          <p className="hotel-dashboard__points-value">06 points</p>
          <p className="hotel-dashboard__points-text">
            Accumulate points with your stay. They will turn into special offers for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HotelGuestDashboard;
