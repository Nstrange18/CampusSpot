import React from 'react';
import "../../styles/CampusLandingPage.css";
import SearchBar from '../components/LandingPage/SearchBar';

const CampusLandingPage = () => {
  return (
    <div>
      <header className='landingPageHeader'>
        <div className="logoDiv">
          <img src="/logo.png" alt="app logo" />
          <h3>CampusSpot</h3>
        </div>
        <div className="headerChildDiv">
          <button className="login">Log in</button>
        </div>
      </header>
      <div className="landing">
        <div className="backdrop"></div>
        <div className="landing-intro">
          <h1>Find your perfect <br /> student housing</h1>
          <p>
            Discover a wide range of housing options near your university, from
            dorms to <br /> apartments, all in one place.
          </p>
        </div>
        
        <SearchBar />
      </div>
      <div className="trustedSch">
        <h2>Trusted by students across the nation</h2>
        <div className="schLogoDiv">
          <img src="/CCU images.png" alt="School-logo" />
          <img src="/UNN-logo-150x150.jpg" alt="School-logo" />
          <img src="/Esut-logo.jpeg" alt="School-logo" />
        </div>
      </div>
      <div className="how-it-works">
        <h3 className="explain">How it works</h3>
        <h2>Find your perfect student housing in 3 easy steps</h2>
        <p className="what-we-do">
          Our platform simplifies the housing search, connecting students with
          safe and convenient options near their campus.
        </p>
        <div className="card-ParentDiv">
          <div className="card" id="search-card">
            <div className="img-Bg">
              <img src="/icons8-search (1).svg" alt="search-icon" />
            </div>
            <h3>Search</h3>
            <p>
              Enter your university name to explore available housing options.
            </p>
          </div>
          <div className="card">
            <div className="img-Bg">
              <img src="/icons8-dog-house-48.png" alt="House-icon" />
            </div>
            <h3>Compare</h3>
            <p>
              Browse listings, compare amenities, and read reviews from other
              students.
            </p>
          </div>
          <div className="card">
            <div className="img-Bg">
              <img src="/icons8-key-32 (1).png" alt="Key-icon" />
            </div>
            <h3>Move In</h3>
            <p>
              Secure your housing and get ready to move into your new home away
              from home.
            </p>
          </div>
        </div>
      </div>
      <footer>
        <p className="policies">
          Read our <a href="#" className="regulation">Terms</a> &amp; <a href="#" className="regulation">Policy</a>
        </p>
        <p className="Copyright">
          Copyright &copy; 2025 CampusSpot. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default CampusLandingPage;