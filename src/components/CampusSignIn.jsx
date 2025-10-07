import React from 'react'

const CampusSignIn = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <img src="logo.png" alt="CampusSpot Logo" className="logo-img" />
          <span className="brand">CampusSpot</span>
        </div>
      </nav>
      <main className="container">
        <h1>Create your landlord account</h1>
        <p className="subtext">Already have an account? <a href="#">Log in</a></p>
        <form id="signupForm" className="form">
          <label>Email address</label>
          <input type="email" id="email" placeholder="you@example.com" required />
          <label>Password</label>
          <div className="input-wrapper">
            <input type="password" id="password" placeholder="••••••••" required />
            <img src="eye.png" alt="Show Password" id="togglePassword" className="input-icon-img" />
          </div>
          <label>Phone Number</label>
          <div className="input-wrapper">
            <input type="tel" id="phone" placeholder="(123) 456-7890" required />
            <button type="button" id="verifyBtn" className="input-btn">Verify</button>
          </div>
          <button type="submit" className="create-btn">Create Account</button>
          <p className="terms-text">
            By creating an account, you agree to our 
            <a href="#" id="termsLink">Terms of Service</a> and 
            <a href="#" id="privacyLink">Privacy Policy</a>.
          </p>
        </form>
      </main>
      <div id="termsModal" className="modal">
        <div className="modal-content">
          <h2>Terms of Service & Privacy Policy</h2>
          <div className="scroll-box">
            <p>
              Welcome to CampusSpot. Please read these Terms of Service and Privacy Policy carefully before using our platform.
            </p>
            <h3>1. Terms of Service</h3>
            <p>
              By creating an account, you agree not to misuse the platform or engage in activities that violate applicable laws.
              You are responsible for maintaining the confidentiality of your account and password.
            </p>
            <p>
              We reserve the right to suspend or terminate your account if we detect any violation of our terms.
              All listings must comply with our posting standards.
            </p>
            <h3>2. Privacy Policy</h3>
            <p>
              We value your privacy. Your data (email, password, and phone number) is stored securely and used only to improve your experience.
              We do not sell or share your information with third parties without your consent.
            </p>
            <p>
              By agreeing, you consent to the collection and use of information as described in this policy.
            </p>
            <h3>3. Your Rights</h3>
            <p>
              You can request to delete your account and associated data at any time. Contact our support team for assistance.
            </p>
          </div>
          <div className="checkbox-area">
            <input type="checkbox" id="agreeCheck" />
            <label htmlFor="agreeCheck">I have read and agree to the Terms of Service and Privacy Policy</label>
          </div>
          <div className="modal-buttons">
            <button id="agreeBtn" className="agree-btn" disabled>I Agree</button>
            <button id="cancelBtn" className="cancel-btn">Close</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CampusSignIn