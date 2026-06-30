import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom";

function RegisterEmployee() {

  const navigate = useNavigate();

  const[user,setUser]=useState({
    name:"",
    mobile:"",
    role:"",
    companyname:""
  })

  const{name,mobile,role,companyname}=user;

  const handleChange=(e)=>{
    setUser(
      {
        ...user,
        [e.target.name]:e.target.value
      }
    )
  }

 

    const handleSubmit = async (e) => {
  e.preventDefault();

       const mobileRegex = /^[6-9]\d{9}$/;

  if (!mobileRegex.test(user.mobile)) {
    alert("Please enter a valid mobile number");
    return;
  } 

  try {
    const result = await axios.post(
      "http://localhost:8000/api/Empregister",
      user
    );

     console.log(result.data);  

  
if(result.data.success){
  
alert("Employee created Sucessfully");

    setUser({
      name: "",
      mobile: "",
      role: "",
      companyname:""
    });

}}catch (error) {
    console.log(error.response.data);
  }
};

    
    
  
  return (
    <>
    
      <h2>Employee Register Form</h2>
   

    <div className="container">
      <form autoComplete="off" onSubmit={handleSubmit}>

        <div className="inputfiled">
          <label>Name</label>
          <input type="text" placeholder='Enter the name' name='name' value={name} onChange={ handleChange }/>

        </div>

        <div className="inputfiled">
          <label >Mobileno</label>
          <input type="text" placeholder='Enter the mobileno' name='mobile' value={mobile} onChange={ handleChange }/>
        </div>

        <div className="inputfiled">
          <label>Role</label>
          <input type="text" placeholder='Enter the role' name='role' value={role} onChange={handleChange}/>
        </div>

        <div className="inputfiled">
          <label>Company Name</label>
          <input type="text" placeholder='Enter the companyname' name='companyname' value={companyname} onChange={handleChange}/>
        </div>


         <button type="submit"  className='register-btn'> Register</button>
  
       

       

      </form>
    </div>

    <button
        onClick={() => navigate("/view")}
        style={{
          padding: "10px 20px",
          margin: "10px ",
          cursor: "pointer",
          width:"110px"
        }}
      >
        Employee details
      </button>

      <button
        onClick={() => navigate("/dashboard")}
        style={{
          padding: "10px 20px",
          
          cursor: "pointer",
          width:"110px"
        }}
      >
        Dashboard
      </button>
    </>
    
  )
}

export default RegisterEmployee