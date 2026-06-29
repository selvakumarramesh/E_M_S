import React from "react";
import { useNavigate } from "react-router-dom";

function View() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Select Registration Type</h2>

      <button
        onClick={() => navigate("/register")}
        style={{
          padding: "10px 20px",
          margin: "10px",
          cursor: "pointer"
        }}
      >
        Employee Register
      </button>

      <button
        onClick={() => navigate("/empregister")}
        style={{
          padding: "10px 20px",
          margin: "10px",
          cursor: "pointer"
        }}
      >
        Employer Register
      </button>
    </div>
  );
}

export default View;