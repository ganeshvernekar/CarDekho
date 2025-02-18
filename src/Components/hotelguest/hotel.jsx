import React from "react";
import "./hotel.css"
import { FaUserCircle, FaLock, FaChevronRight, FaHome } from "react-icons/fa";
import { MdOutlineRoomService } from "react-icons/md";
import { AiOutlineKey } from "react-icons/ai";
import { IoBedOutline } from "react-icons/io5";
import { BiCycling } from "react-icons/bi";

const HotelGuestDashboard = () => {
  return (
    <div className="min-h-screen bg-green-100 flex justify-center p-4">
      <div className="bg-white w-[350px] rounded-3xl shadow-lg p-4 relative">
        {/* Header Section */}
        <div className="flex items-center gap-3">
          <FaUserCircle className="text-3xl text-gray-600" />
          <div>
            <h2 className="text-lg font-semibold">Joana Barros</h2>
            <p className="text-sm text-gray-500">Hotel Guest</p>
          </div>
          <FaLock className="ml-auto text-gray-500" />
        </div>

        {/* Recommended Section */}
        <div className="mt-4 bg-green-200 rounded-xl p-3 relative">
          <h3 className="text-sm font-semibold">Enjoy some me time</h3>
          <p className="text-xs text-gray-600">Relax with our massages and treatments.</p>
          <span className="text-xs text-gray-500">Spa facilities will close in 4 hours</span>
          <span className="absolute top-2 right-2 bg-orange-400 text-white text-xs px-2 py-1 rounded-full">
            From $30/session
          </span>
        </div>

        {/* Popular Experiences */}
        <div className="mt-4">
          <h3 className="text-sm font-semibold">Popular experiences</h3>
          <div className="flex gap-3 mt-2 overflow-auto">
            <div className="bg-gray-200 p-2 rounded-lg flex items-center gap-2 text-sm">
              <BiCycling className="text-blue-600" /> Bike Riding
            </div>
            <div className="bg-gray-200 p-2 rounded-lg flex items-center gap-2 text-sm">
              🍽️ Dinner at the Table
            </div>
          </div>
        </div>

        {/* All Services */}
        <div className="mt-4">
          <h3 className="text-sm font-semibold">All services</h3>
          <div className="mt-2 space-y-2">
            <div className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
              <span className="flex items-center gap-2 text-sm"><FaHome /> Facilities</span>
              <FaChevronRight className="text-gray-500" />
            </div>
            <div className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
              <span className="flex items-center gap-2 text-sm"><AiOutlineKey /> Virtual Key</span>
              <FaChevronRight className="text-gray-500" />
            </div>
            <div className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
              <span className="flex items-center gap-2 text-sm"><IoBedOutline /> My Room</span>
              <FaChevronRight className="text-gray-500" />
            </div>
            <div className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
              <span className="flex items-center gap-2 text-sm"><MdOutlineRoomService /> Order Room Service</span>
              <FaChevronRight className="text-gray-500" />
            </div>
          </div>
        </div>

        {/* Points Section */}
        <div className="mt-4 bg-gray-100 p-3 rounded-lg text-center">
          <p className="text-lg font-semibold">06 points</p>
          <p className="text-xs text-gray-500">Accumulate points with your stay. They will turn into special offers for you.</p>
        </div>
      </div>
    </div>
  );
};

export default HotelGuestDashboard;
