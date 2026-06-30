import React from "react";
import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

function View() {
  const navigate = useNavigate();

   const handleLogout = () => {
  

    // Navigate to Login Page
    navigate("/");
  };

  return (

      <div>
        <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "15px 20px",
        }}
      >
        <FiLogOut
          size={30}
          color="red"
          style={{ cursor: "pointer" }}
          onClick={handleLogout}
          title="Logout"
        />
        </div>
       
      
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Select Registration Type</h2>

      <button
        onClick={() => navigate("/register")}
        style={{
          padding: "10px 20px",
          margin: "10px",
          cursor: "pointer",
          width:"110px"
        }}
      >
        Employee Register
      </button>

      <button
        onClick={() => navigate("/empregister")}
        style={{
          padding: "10px 20px",
          margin: "10px",
          cursor: "pointer",
          width:"110px"
        }}
      >
        Employer Register
      </button>

      
    </div>
    </div>
  );

}
export default View;