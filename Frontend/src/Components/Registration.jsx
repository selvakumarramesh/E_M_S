import { Link , useNavigate} from "react-router-dom";

import { FaEye , FaMoon, FaSun } from "react-icons/fa";

import { useState,useRef } from "react"
import axios from "axios"

function Registration() {
   const navigate = useNavigate();
   const passwordRef = useRef();
  const[userData,setuserData]=useState({name:"",email:"",password:""})
  const [darkMode, setDarkMode] = useState(false);

    const showPassword = () => {
    if (passwordRef.current.type === "password") {
      passwordRef.current.type = "text";
    } else {
      passwordRef.current.type = "password";
    }
  };

    const handleChange =(e)=>{
        
        setuserData(
            {
            ...userData,
            [e.target.name]:e.target.value})
        }

        const handleSubmit =async(e)=>{
            e.preventDefault();
            try{
                const result = await axios.post("http://localhost:8000/api/Signup",userData);

                alert("Signup Successfully");

                console.log(result.data);

                navigate("/");

            }catch(err){
                console.log(err.response.data.message);
                
            }
            
        }
    
  return (
    <div className= {darkMode ? "auth-container dark" : "auth-container"}>
      <button
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <FaMoon /> :<FaSun />}
      </button>
      <div className="left">

        <div className="left-content">

          

          <h1>Create Account</h1>

          

        </div>

      </div>

      <div className="right">

        <div className="card">

          

          <label>Name</label>
          <input type="text" placeholder="Enter name" name="name" value={userData.name} onChange={handleChange } autoComplete="off"/>

          <label>Email</label>
          <input type="email" placeholder="Enter email" name="email" value={userData.email} onChange={handleChange } autoComplete="off" />

          <label>Password</label>

          <div className="password-box">
            <input type= "password" ref={passwordRef} placeholder="Enter password" name="password" value={userData.password} onChange={handleChange } autoComplete="off"/>
           <FaEye onClick={showPassword}/>
  

          </div>

          <button onClick={handleSubmit}>Create Account</button>

          

          <p>
            Already have an account?
            <Link to="/"> Login</Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Registration;