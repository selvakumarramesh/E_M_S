import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";

function RegisterEmployer() {

   const navigate = useNavigate();

   const[users,setUsers]=useState({
       companyname:"",
       location:"",
     })
   
     const{companyname,location}=users;

     
   
     const handleChange=(e)=>{
       setUsers(
         {
           ...users,
           [e.target.name]:e.target.value
         }
       )
     }
   
   const handleSubmit = async (e) => {
  e.preventDefault();

  try {

    
    const result = await axios.post(
      "http://localhost:8000/api/Employerregister",
      users
    );

   

    
    alert("Employer Registered Successfully");
    

    setUsers({
      companyname:"",
       location:"",
    });
  } catch(error) {
    console.log(error.response.data);
    
  }
};
     return (
       <>
       <div className='heading'>
         <h2>Employer Register Form</h2>
       </div>
   
       <div className="container">
         <form autoComplete="off" onSubmit={handleSubmit}>
   
           <div className="inputfiled">
             <label> Company Name </label>
             <input type="text" placeholder='Enter the company name' name='companyname' value={companyname} onChange={ handleChange }/>
   
           </div>
   
           <div className="inputfiled">
             <label >Location</label>
             <input type="text" placeholder='Enter the Location' name='location' value={location} onChange={ handleChange }/>
           </div>
   
           
           <div className='btn'>
            <button type="submit" className="register-btn" > Register</button>
           </div>
          
   
          
   
         </form>
       </div>

       <div className="button-group">
  <button onClick={() => navigate("/empview")}>
    Employer Details
  </button>

  <button onClick={() => navigate("/dashboard")}>
    Dashboard
  </button>
</div>

       
       </>
)
}

export default RegisterEmployer