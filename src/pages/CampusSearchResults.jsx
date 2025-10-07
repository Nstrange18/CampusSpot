import "../../styles/CampusSearchResults.css"

const CampusSearchResults = () => {
  return (
    <section className="body-grid">
      <header>
        <nav className="nav-bar">
          <div className="nav-bar-logo-links">
            <div className="logo">
              <img src="/campusspot_cap_clean.png" alt="" />
              CampusSpot
            </div>

            <div className="navlinks">
              <a href="#">Home</a>
              <a href="#">List your place</a>
              <a href="#">Saved</a>
              <a href="#">Trips</a>
              <a href="#">Messages</a>
            </div>
          </div>

          <div className="search-profile-picture-container">
            <div className="search-profile-picture">
              <div className="search-bar">
                <img src="/searchicon.png" alt="search" width="22" />
                <input className="search-input" type="text" placeholder="Search by university..." />
              </div>
            </div>

            <div className="profile-pic">
              <img src="/IMG-20250427-WA0143.jpg" alt="profile-pic" />
            </div>
          </div>

        </nav>
        <div className="straight-line"></div>
      </header>

      <aside className="filter-container">
        <h1>Filters</h1>

        <span className="price-range">
          <p className="titles">Price Range</p>

          <input type="range" id="price-range" max="5000" min="500" value="2000" />

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

          <input type="range" id="price-range" max="30" min="1" value="5" />

          <div className="distance-index">
            Up to 5 miles
          </div>
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

      <main>
        <h1>Apartments near Stanford University</h1>
        <p className="results-number">123 results found</p>

        <div className="result-card">
          <img src="/Screenshot 2025-10-06 095023.png" className="result-images" alt="" />

          <div className="results-writeups">
            <h2>Modern Studio Apartment</h2>
            <h3>$2,200/month</h3>
            <p>123 University Ave, Palo Alto, CA <br /> 0.5 miles from campus</p>

            <div className="available-amenities">
              <div>
                <img src="/wifi-icon.png" alt="" className="amenities-icon" />
                Wifi
              </div>
              <div>
                <img src="/laundry-icon.png" alt="" className="amenities-icon" />
                Laundry
              </div>
            </div>

          </div>

          <button className="writeup-button">Contact Landlord</button>
        </div>

        <div className="result-card">
          <img src="/Screenshot 2025-10-06 095920.png" className="result-images" alt="" />

          <div className="results-writeups">
            <h2>Cozy 3-Bedroom House</h2>
            <h3>$3,500/month</h3>
            <p>456 Oak St, Menlo Park, CA <br /> 2 miles from campus</p>

            <div className="available-amenities">
              <div>
                <img src="/wifi-icon.png" alt="" className="amenities-icon" />
                Wifi
              </div>

              <div>
                <img src="/laundry-icon.png" alt="" className="amenities-icon" />
                Laundry
              </div>

              <div>
                <img src="/car-icon.png" alt="" className="amenities-icon" />
                Parking
              </div>
            </div>
          </div>

          <button className="writeup-button">Contact Landlord</button>

        </div>

        <div className="result-card">
          <img src="/Screenshot 2025-10-06 095929.png" className="result-images" alt="" />

          <div className="results-writeups">
            <h2>Luxury 2-Bedroom Apartment</h2>
            <h3>$4,000/month</h3>
            <p>789 Pine St, Palo Alto, CA <br /> 1 mile from campus</p>

            <div className="available-amenities">

              <div>
                <img src="/wifi-icon.png" alt="" className="amenities-icon" />
                Wifi
              </div>

              <div>
                <img src="/laundry-icon.png" alt="" className="amenities-icon" />
                Laundry
              </div>

              <div>
                <img src="/Gym.png" alt="" className="amenities-icon" />
                Gym
              </div>
            </div>

          </div>
          
          <button className="writeup-button">Contact Landlord</button>
        </div>
        
        <footer>
          <button><img src="/left-arrow-icon.png" alt="" /></button>
          <div>1</div>
          <button><img src="/right-arrow-icon.png" alt="" /></button>
        </footer>

      </main>
    </section>
  )
}

export default CampusSearchResults