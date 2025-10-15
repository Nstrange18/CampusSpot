const CampusSpotNavbar = () => {
  return (
    <header>
        <nav className="nav-bar">
          <div className="nav-bar-logo-links">
            <div className="logo">
              <img src="/logo.png" alt="" />
              CampusSpot
            </div>

            {/* <div className="navlinks">
              <a href="#">Home</a>
              <a href="#">List your place</a>
              <a href="#">Saved</a>
              <a href="#">Trips</a>
              <a href="#">Messages</a>
            </div> */}
          </div>

          <div className="search-profile-picture-container">
            <div className="search-profile-picture">
              <div className="search-bar">
                <img src="/searchicon.png" alt="search" width="22" />
                <input
                  className="search-input"
                  type="text"
                  placeholder="Search by university..."
                />
              </div>
            </div>

            <div className="profile-pic">
              <img src="/IMG-20250427-WA0143.jpg" alt="profile-pic" />
            </div>
          </div>
        </nav>
        <div className="straight-line"></div>
      </header>
  )
}

export default CampusSpotNavbar