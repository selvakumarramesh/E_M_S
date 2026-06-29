import {useState, useEffect}from 'react'
import axios from 'axios';
import "./Employess.css"
import { useNavigate } from "react-router-dom";

function Employer() {
   const navigate = useNavigate();

  const[users,setUsers]=useState([]);
  
  const[isModelopen,setIsmodelopen]=useState(false);
  const[userData,setUserdata]=useState({companyname:"",location:""})

  const [employees, setEmployees] = useState([]);

  const handleViewEmployees = async (companyname) => {
  try {
    const res = await axios.get(
      `http://localhost:8000/api/Empregister/${companyname}`
    );

    setEmployees(res.data.employee);
  } catch (error) {
    console.log(error);
  }
};

  const getAllusers = async () => {
  try {
    const res = await axios.get(
      "http://localhost:8000/api/Employerregister"
    );

    setUsers(res.data.employer);
  } catch (error) {
    console.log(error);
  }
};

  useEffect(()=>{
    getAllusers();
  },[])


  


  // delete function

  const handleDelete = async(_id)=>{

    const isConfirmed = window.confirm("Are you want to delete the user record");

    if(isConfirmed){

    await axios.delete(`http://localhost:8000/api/Employerregister/${_id}`).then((res)=>{
      getAllusers();
      
    })

  }
  }



  const handleData=(e)=>{
    setUserdata({...userData,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit= async(e)=>{
    e.preventDefault();

    if(userData._id){
      await axios.patch(`http://localhost:8000/api/Employerregister/${userData._id}`,userData).then((res)=>{
      console.log(res);
    })}

   
    handlecloseModel();
   setUserdata({companyname:"",location:""});
   
  }

  // close the model

  const handlecloseModel =()=>{
     setIsmodelopen(false);
      getAllusers();
  }


  // Editing the user record

  const handleUpdaterecord= (user)=>{
    setUserdata(user);
    setIsmodelopen(true);
  }
  return (
     <div className="container">
      <h3> Employer Details</h3>
   

       
        <table className='table'>
          <thead>
            <tr>
              <th>Id</th>
               <th>Company Name</th>
                <th>Location</th>
                <th>Employees</th>
                 <th>Edit</th>
                 <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(users) &&
  users.map((user)=>{
              return(
              <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.companyname}</td>
              <td>{user.location}</td>
              <td>
              <button
                className="btn blue"
                onClick={() => handleViewEmployees(user.companyname)}>
                View 
              </button>
              </td>

              <td><button className='btn green' onClick={()=>handleUpdaterecord(user)}>Edit</button></td>
              <td><button className="btn red" onClick={()=>handleDelete(user._id)}>Delete</button></td>
            </tr>)
            })}
            
            
          </tbody>
        </table>

        {employees.length > 0 && (
  <>
    
    <h3>Employees</h3>
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Mobile</th>
          <th>Role</th>
        </tr>
      </thead>

      <tbody>
        {employees.map((emp) => (
          <tr key={emp._id}>
            <td>{emp.name}</td>
            <td>{emp.mobile}</td>
            <td>{emp.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
)}
        {isModelopen&&
        (
          <div className="model">
            <div className="model-content">
              <span className='close' onClick={handlecloseModel}>&times;</span>
              <h3>Update Record</h3>

              <div className="input-group">
                <label htmlFor="companyname">Company Name</label>
                <input type="text" name='companyname' value={userData.companyname} id='companyname' autoComplete="off" onChange={handleData}/>
              </div>

               <div className="input-group">
                <label htmlFor="location">Location</label>
                <input type="text" name='location' value={userData.location} id='location' autoComplete="off" onChange={handleData}/>
              </div>

               
              <button className='btn green' onClick={handleSubmit}> Update Detail</button>
            </div>
          </div>
        )
        }

        <button
        onClick={() => navigate("/")}
        style={{
          padding: "10px 20px",
          margin: "10px",
          cursor: "pointer"
        }}
      >
        Dashboard
      </button>
        </div>
  )
}

export default Employer


