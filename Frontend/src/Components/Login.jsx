import "./login.css"

import { useState } from "react"
import axios from "axios"


import { Link, useNavigate  } from "react-router-dom";
import { FaEye } from "react-icons/fa";





function Login() {
  const navigate = useNavigate();
  const[userData,setuserData]=useState({email:"",password:""})
  
 const [darkMode, setDarkMode] = useState(false);
    

    const handleChange =(e)=>{
        
        setuserData(
            {
            ...userData,
            [e.target.name]:e.target.value})
        }

        const handleSubmit =async(e)=>{
            e.preventDefault();
            try{
                const result = await axios.post("http://localhost:8000/api/login",userData);

                alert("Signin Successfully");

                console.log(result.data);

                navigate("/dashboard");

            }catch(err){
                console.log(err.response.data.message);
                
            }
            
        }
  return (

    
    <div className="auth-container">

       

      <div className="left">

        <div className="left-content">



        
          <h1 >
          Login Page
          </h1>
        

          

        </div>

      </div>

      <div className="right">
       

        


        <div className="card">

          

          <label>Email</label>
          <input type="email" placeholder="Enter email" name="email" value={userData.email} onChange={handleChange} autoComplete="off" />

          <div className="row">
            <label>Password</label>
            <a href="">Forgot?</a>
          </div>

          <div className="password-box">
            <input type="password" placeholder="Enter password" name="password" value={userData.password} onChange={handleChange} autoComplete="off"/>
            <FaEye />
          </div>

          <button onClick={handleSubmit}>Login</button>

          <p>
            Don't have an account?
            <Link to="/Signup"> Sign Up</Link>
          </p>

        </div>

      </div>
      </div>


  );
}

export default Login;