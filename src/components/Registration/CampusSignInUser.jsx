import React, { useState } from "react";
import "../../../styles/CampusSignInUser.css";

const CampusSignInUser = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [agreeChecked, setAgreeChecked] = useState(false);
  const [phoneVerified, setPhoneVerified] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleVerify = () => {
    if (!formData.phone.trim()) {
      alert("Please enter your phone number before verification.");
      return;
    }

    // Simulate verification flow
    // In a real app you'd call your SMS/OTP API here
    setPhoneVerified(true);
    alert(`A verification code was sent to ${formData.phone}. (Simulated)`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, email, password, phone } = formData;
    if (
      !username.trim() ||
      !email.trim() ||
      !password.trim() ||
      !phone.trim()
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    // Save temporarily (replace later with backend call)
    localStorage.setItem("userUsername", username);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    localStorage.setItem("userPhone", phone);

    // Proceed to next page (modify the route/path as needed)
    alert("Account created successfully!");
    window.location.href = "/nextpage"; // change to your app route
  };

  const openModal = (e) => {
    e && e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAgree = () => {
    if (!agreeChecked) {
      alert("Please check the box to agree first.");
      return;
    }
    // You can set a flag in localStorage or call API here
    localStorage.setItem("agreedToTOS", "true");
    alert("Thank you for agreeing!");
    setIsModalOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <img src="/logo.png" alt="CampusSpot Logo" className="logo-img" />
          <span className="brand">CampusSpot</span>
        </div>
      </nav>

      <section className="main-container">
        <main className="container">
          <h1>Create an account</h1>
          <p className="subtext">
            Already have an account? <a href="#">Log in</a>
          </p>

          <form id="signupForm" className="form" onSubmit={handleSubmit}>
            <label>Username</label>
            <input
              name="username"
              type="text"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />

            <label>Email address</label>
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Password</label>
            <div className="input-wrapper">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <img
                src={showPassword ? "/eye.png" : "/eye-slash.png"}
                alt={showPassword ? "Hide password" : "Show password"}
                className={`input-icon-img ${showPassword ? "active" : ""}`}
                onClick={() => setShowPassword((s) => !s)}
              />
            </div>

            <label>Phone Number</label>
            <div className="input-wrapper">
              <input
                name="phone"
                type="tel"
                placeholder="(123) 456-7890"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                id="verifyBtn"
                className="input-btn"
                onClick={handleVerify}
                disabled={phoneVerified}
              >
                {phoneVerified ? "Verified" : "Verify"}
              </button>
            </div>

            <button type="submit" className="create-btn">
              Create Account
            </button>

            <p className="terms-text">
              By creating an account, you agree to our{" "}
              <a href="#" onClick={openModal}>
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" onClick={openModal}>
                Privacy Policy
              </a>
              .
            </p>
          </form>
        </main>

        {/* Modal (render when open) */}
        {isModalOpen && (
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modalTitle"
          >
            <div className="modal-content">
              <h2 id="modalTitle">Terms of Service &amp; Privacy Policy</h2>

              <div className="scroll-box" tabIndex="0" id="termsBox">
                <p>
                  Welcome to CampusSpot. Please read these Terms of Service and
                  Privacy Policy carefully before using our platform.
                </p>

                <h3>1. Terms of Service</h3>
                <p>
                  By creating an account, you agree not to misuse the platform
                  or engage in activities that violate applicable laws. You are
                  responsible for maintaining the confidentiality of your
                  account and password.
                </p>

                <h3>2. Privacy Policy</h3>
                <p>
                  We value your privacy. Your data (email, password, and phone
                  number) is stored securely and used only to improve your
                  experience. We do not sell or share your information with
                  third parties without your consent.
                </p>

                <h3>3. Your Rights</h3>
                <p>
                  You can request to delete your account and associated data at
                  any time. Contact our support team for assistance.
                </p>
              </div>

              <div className="checkbox-area">
                <input
                  id="agreeCheck"
                  type="checkbox"
                  checked={agreeChecked}
                  onChange={(e) => setAgreeChecked(e.target.checked)}
                />
                <label htmlFor="agreeCheck">
                  I have read and agree to the Terms of Service and Privacy
                  Policy
                </label>
              </div>

              <div className="modal-buttons">
                <button
                  id="agreeBtn"
                  className={`agree-btn ${agreeChecked ? "enabled" : ""}`}
                  onClick={handleAgree}
                  disabled={!agreeChecked}
                >
                  I Agree
                </button>
                <button
                  id="cancelBtn"
                  className="cancel-btn"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default CampusSignInUser;
