import React, { useState } from "react";
import "../../../styles/CapmusLoginPage.css";

const CampusLoginUser = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [forgotOpen, setForgotOpen] = useState(false);
  const [resetIdentifier, setResetIdentifier] = useState("");

  const [formData, setFormData] = useState({
    identifier: "", // username or email
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { identifier, password } = formData;
    if (!identifier.trim() || !password.trim()) {
      alert("Please fill in both fields.");
      return;
    }

    const savedUsername = localStorage.getItem("userUsername");
    const savedEmail = localStorage.getItem("userEmail");
    const savedPassword = localStorage.getItem("userPassword");

    const isValid =
      (identifier === savedUsername || identifier === savedEmail) &&
      password === savedPassword;

    if (isValid) {
      alert("Login successful!");
      window.location.href = "/dashboard"; // change to your dashboard route
    } else {
      alert("Invalid username/email or password.");
    }
  };

  const openForgot = (e) => {
    e && e.preventDefault();
    setForgotOpen(true);
  };

  const closeForgot = () => {
    setForgotOpen(false);
    setResetIdentifier("");
  };

  const handleForgotSubmit = (e) => {
    e.preventDefault();
    if (!resetIdentifier.trim()) {
      alert("Please enter your username or email.");
      return;
    }

    // Simulate sending reset link (you could check storage if you want)
    alert(
      `A password reset link has been sent to ${resetIdentifier} (simulated).`
    );
    closeForgot();
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-left">
          <img src="/logo.png" alt="CampusSpot Logo" className="logo-img" />
          <span className="brand">CampusSpot</span>
        </div>
      </nav>

      {/* Main Login Container */}
      <section className="main-container">
        <main className="container">
          <h1>Welcome</h1>
          <p className="subtext">Log in to continue to CampusSpot</p>

          <p className="account-text">
            Don’t have an account? <a href="/landing">Create an account</a>
          </p>

          <form id="loginForm" className="form" onSubmit={handleSubmit}>
            <label>Username or Email</label>
            <input
              name="identifier"
              type="text"
              placeholder="Enter your username or email"
              value={formData.identifier}
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

            <div className="forgot-area">
              <a href="#" onClick={openForgot}>
                Forgot Password?
              </a>
            </div>

            <button type="submit" className="create-btn">
              Log In
            </button>
          </form>
        </main>
      </section>

      {/* Forgot Password Modal */}
      {forgotOpen && (
        <div className="modal" role="dialog" aria-modal="true">
          <div className="modal-content forgot">
            <h2>Reset Password</h2>
            <p className="subtext">
              Enter your email or username to reset your password.
            </p>

            <form onSubmit={handleForgotSubmit}>
              <input
                type="text"
                className="modal-input"
                placeholder="Enter email or username"
                value={resetIdentifier}
                onChange={(e) => setResetIdentifier(e.target.value)}
                required
              />

              <div className="modal-buttons">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={closeForgot}
                >
                  Cancel
                </button>
                <button type="submit" className="agree-btn enabled">
                  Send Reset Link
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer (simple links, no modal) */}
      <footer className="footer">
        <p>
          CampusSpot <a href="/terms">Terms of Service</a> and{" "}
          <a href="/privacy">Privacy Policy</a>
        </p>
      </footer>
    </>
  );
};

export default CampusLoginUser;
