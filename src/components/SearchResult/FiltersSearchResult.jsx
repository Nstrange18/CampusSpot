import React from "react";

const FiltersSearchResult = () => {
  return (
    <aside className="filter-container">
      <h1>Filters</h1>

      <span className="price-range">
        <p className="titles">Price Range</p>

        <input
          type="range"
          id="price-range"
          max="5000"
          min="500"
          // value="3000"
        />

        <div className="price-index">
          <h5>$500</h5>
          <h5>$5000</h5>
        </div>
      </span>

      <span className="room-type">
        <p className="titles">Room Types</p>

        <div className="room-type-options">
          <button className="each-room-option">Any</button>
          <button className="each-room-option">Private</button>
          <button className="each-room-option">Shared</button>
          <button className="each-room-option">Entire</button>
        </div>
      </span>

      <span className="distance-range">
        <p className="titles">Distance from Campus</p>

        <input 
          type="range" 
          id="price-range" 
          max="30" 
          min="1" 
          // value="5" 
        />

        <div className="distance-index">Up to 5 miles</div>
      </span>

      <span className="amenities">
        <p className="titles">Amenities</p>
        <div>
          <input type="checkbox" />
          <label htmlFor="checkbox">Wifi</label>
        </div>
        <div>
          <input type="checkbox" />
          <label htmlFor="checkbox">Laundry</label>
        </div>
        <div>
          <input type="checkbox" />
          <label htmlFor="checkbox">Parking</label>
        </div>
        <div>
          <input type="checkbox" />
          <label htmlFor="checkbox">Gym</label>
        </div>
      </span>
    </aside>
  );
};

export default FiltersSearchResult;
