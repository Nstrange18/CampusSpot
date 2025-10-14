import React from "react";
import { SignIn, SignUp } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const AuthWrapper = ({ type }) => {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* === NAVBAR === */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 24px",
          background: "rgba(246, 248, 248, 0.95)",
          backdropFilter: "saturate(1.1) blur(6px)",
          borderBottom: "1px solid rgba(0, 0, 0, 0.04)",
        }}
      >
        <div
          onClick={() => navigate("/")}
          style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}
        >
          <img src="/logo.png" alt="CampusSpot logo" style={{ width: "45px", height: "45px" }} />
          <h3 style={{ margin: 0, fontWeight: "700" }}>CampusSpot</h3>
        </div>
      </header>

      {/* === AUTH FORM AREA === */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f6f8f8",
        }}
      >
        {type === "sign-in" ? (
          <SignIn routing="path" path="/sign-in" />
        ) : (
          <SignUp routing="path" path="/sign-up" />
        )}
      </div>
    </div>
  );
};

export default AuthWrapper;
