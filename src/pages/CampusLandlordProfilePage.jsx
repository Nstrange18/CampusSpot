import React, { useState, useEffect } from "react";
import "../../styles/CampusLandlordProfilePage.css";

export default function ProfilePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Track which menu item is active
  const [activeMenu, setActiveMenu] = useState("Profile");

  // Load saved profile from localStorage or use defaults
  const storedProfile = JSON.parse(localStorage.getItem("profileData"));

  const [profile, setProfile] = useState(
    storedProfile || {
      fullName: "Sophia Carter",
      email: "sophia.carter@email.com",
      phone: "(123) 456-7890",
      address: "123 University Ave",
      password: "",
      profilePic: "/images/profile-default.png", // default image
    }
  );

  // Editable fields
  const [editData, setEditData] = useState({ ...profile });
  const [previewImage, setPreviewImage] = useState(null);

  // Sync profile to localStorage
  useEffect(() => {
    localStorage.setItem("profileData", JSON.stringify(profile));
  }, [profile]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setEditData({ ...editData, newProfilePic: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // Save profile and persist to localStorage
  const handleSave = () => {
    const updatedProfile = { ...profile, ...editData };
    if (previewImage) {
      updatedProfile.profilePic = previewImage;
    }
    setProfile(updatedProfile);
    localStorage.setItem("profileData", JSON.stringify(updatedProfile));

    setPreviewImage(null);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2500);
  };

  // Handle sidebar click (make active)
  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className="profile-container">
      {/* ===== Sidebar ===== */}
      <aside className={`sidebar ${menuOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <div className="user-info">
            <img
              src={profile.profilePic}
              alt="User Avatar"
              className="avatar"
            />
            <div>
              <h2 className="username">{profile.fullName}</h2>
              <p className="role">Landlord</p>
            </div>
          </div>
        </div>

        <nav className="sidebar-nav">
          <ul>
            {[
              "Home",
              "Dashboard",
              "Profile",
            ].map((item) => (
              <li
                key={item}
                className={activeMenu === item ? "active" : ""}
                onClick={() => handleMenuClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* ===== Main Content ===== */}
      <main className="main-content">
        <div className="topbar">
          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
          <h1 className="page-title">{activeMenu}</h1>
        </div>

        <div className="main-inner">
          <h1 className="page-title-desktop">{activeMenu}</h1>

          {activeMenu === "Profile" && (
            <>
              {/* ===== Profile Card ===== */}
              <div className="profile-card">
                <div className="profile-pic-container">
                  <img
                    src={previewImage || profile.profilePic}
                    alt="User"
                    className="profile-pic"
                  />
                  <label htmlFor="upload" className="upload-btn">
                    Change Photo
                  </label>
                  <input
                    type="file"
                    id="upload"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                  />
                </div>

                <div>
                  <h2 className="profile-name">{profile.fullName}</h2>
                  <p className="profile-role">Landlord</p>
                </div>
              </div>

              {/* ===== Editable Form ===== */}
              <div className="form-card">
                <h2 className="section-title">Personal Information</h2>

                <div className="form-grid">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={editData.fullName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={editData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="text"
                      name="phone"
                      value={editData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Address</label>
                    <input
                        type="text"
                        name="address"
                        value={editData.address}
                        onChange={handleChange}
                    />
                  </div>
                </div>

                <h2 className="section-title">Account Settings</h2>

                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter new password"
                    value={editData.password}
                    onChange={handleChange}
                  />
                  <p className="hint">
                    Leave blank to keep your current password.
                  </p>
                </div>

                <div className="form-actions">
                  <button className="save-btn" onClick={handleSave}>
                    Save Changes
                  </button>
                </div>
              </div>
            </>
          )}

          {/* You can also add future sections for Dashboard, Listings, etc */}
          {activeMenu !== "Profile" && (
            <div className="content-placeholder">
              <p>This is the {activeMenu} page content area.</p>
            </div>
          )}
        </div>
      </main>
      {/* ===== Success Popup ===== */}
      {showSuccess && (
        <div className="success-popup">✅ Profile updated successfully!</div>
      )}
    </div>
  );
}
