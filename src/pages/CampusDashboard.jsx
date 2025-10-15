import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../styles/CampusDashboard.css";
import EachListings from "../components/DashboardListings/EachListings";
import { useContext } from "react";
import { UserContext } from "../App";

const CampusDashboard = () => {
  const navigate = useNavigate();
  const { listings } = useContext(UserContext);

  return (
    <>
      <div className="container1">
        <header>
          <div>
            <img src="logo (1).png" alt="logo" />
            <h1>CampusSpot</h1>
          </div>
    
          <div className='avatar'>
            <img id='dashboardAvatar' src="IMG-20250427-WA0143.jpg" />
          <nav>
            <ul>
              <li>Home</li>
              <li>Dashboard</li>
              <li>Profile</li>
            </ul>
          </nav>
          <div className="avatar">
            <img id="dashboardAvatar" src="IMG-20250427-WA0143.jpg" />
          </div>
        </header>
        <div className="welcomeboard">
          <div>
            <h1>My Dashboard</h1>
            <p>Manage your property listings and monitor their performance.</p>
          </div>

          <button className="addPropertyBtn" onClick={() => navigate('/listingForm')}>
            <span className="plus">+</span>
            Add Property
          </button>
        </div>

        <div className="listings">
          <ul className="headings">
            <li>
              <span>..</span>Property
            </li>
            <li>
              <span>.....................................</span>Status
            </li>
            <li>
              <span>.........</span>Price
            </li>
            {/* <li>
              <span>.......</span>Views
            </li> */}
            <li>Applications</li>
          </ul>

          <EachListings listings={listings} />
          
        </div>

        <button
          className="addPropertyBtn2"
          onClick={() => navigate('/listingForm')}
        >
          <span className="plus">+</span>
          Add Property
        </button>
      </div>
    </>
  );
};

export default CampusDashboard;
