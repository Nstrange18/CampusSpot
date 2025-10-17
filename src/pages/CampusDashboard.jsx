import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../styles/CampusDashboard.css";
import EachListings from "../components/DashboardListings/EachListings";
import Sidebar from "../components/PropertyDetails/sidebar.jsx";




import { DashboardContext } from "../components/Context/DashboardContext.jsx";

import { useState } from 'react';
import { useContext } from "react";
import { useRef } from "react";
import { useEffect } from "react";
// import { UserContext } from "../App";
 
const CampusDashboard = () => {
  const navigate = useNavigate();
  const { isSidebarOpen, setIsSidebarOpen } = useContext(DashboardContext);
  const sidebarRef = useRef(null);
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (
          sidebarRef.current &&
          !sidebarRef.current.contains(event.target)
        ) {
          setIsSidebarOpen(false);
        }
      };

      // Add listener only if sidebar is open
      if (isSidebarOpen) {
        document.addEventListener("mousedown", handleClickOutside);
      }

      // Cleanup listener
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isSidebarOpen, setIsSidebarOpen]);

  return (
    <>
      <div className={`container1 ${isSidebarOpen ? "shifted" : ""}`}>
        <header>
          <div>
            <img src="logo (1).png" alt="logo" />
            <h1>CampusSpot</h1>
          </div>

          {/* <div className="avatar">
            <img id="dashboardAvatar" src="IMG-20250427-WA0143.jpg" 
             onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
          </div> */}
          
        </header>
        {/* <Sidebar /> */}
        <div className="welcomeboard">
          <div>
            <h1>My Dashboard</h1>
            <p>Manage your property listings and monitor their performance.</p>
          </div>

          <button
            className="addPropertyBtn"
            onClick={() => navigate("/listingForm")}
          >
            <span className="plus">+</span>
            Add Property
          </button>
        </div>

        <div className="listings">
          <ul className="headings">
            <li>Room Image</li>
            <li>Property Address</li>
            <li>Status</li>
            <li>University</li>
            <li>Room Type</li>
            <li>Price</li>
            <li></li>
          </ul>

          <EachListings />
        </div>

        <button
          className="addPropertyBtn2"
          onClick={() => navigate("/listingForm")}
        >
          <span className="plus">+</span>
          Add Property
        </button>
      </div>
      <div className="footer-avatar">
        <img
          id="dashboardAvatar"
          src="IMG-20250427-WA0143.jpg"
          alt="Avatar"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />
      </div>

      <Sidebar ref={sidebarRef} />
    </>
  );
};

export default CampusDashboard;
