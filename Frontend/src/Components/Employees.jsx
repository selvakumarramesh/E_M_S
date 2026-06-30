import {useState, useEffect}from 'react'
import axios from 'axios';
import "./Employess.css"
import { useNavigate } from "react-router-dom";


function Employees() {

  const navigate = useNavigate();

  const[users,setUsers]=useState([]);
  
  const[isModelopen,setIsmodelopen]=useState(false);
  
  const[userData,setUserdata]=useState({name:"",mobile:"",role:"",companyname:""})

  const getAllusers = async () => {
  try {
    const res = await axios.get(
      "http://localhost:8000/api/Empregister"
    );

    setUsers(res.data.employee);
  } catch (error) {
    console.log(error);
  }
};

  useEffect(()=>{
    getAllusers();
  },[])


  const handleData=(e)=>{
    setUserdata({...userData,
      [e.target.name]:e.target.value
    })
  }


  // delete function

  const handleDelete = async(_id)=>{

    const isConfirmed = window.confirm("Are you want to delete the user record");

    if(isConfirmed){

    await axios.delete(`http://localhost:8000/api/Empregister/${_id}`).then((res)=>{
      getAllusers();
      
    })

  }
  }



  
// below function is releted to the model of edit button

  const handleSubmit= async(e)=>{
    e.preventDefault();

    if(userData._id){
      await axios.patch(`http://localhost:8000/api/Empregister/${userData._id}`,userData).then((res)=>{
      console.log(res);
    })}


    handlecloseModel();
   setUserdata({name:"",mobile:"",role:"",companyname:""});
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
      <h3> Employee Details</h3>
   
        <table className='table'>
          <thead>
            <tr>
              <th>Id</th>
               <th>Name</th>
                <th>Mobile</th>
                 <th>Role</th>
                 <th>Company</th>
                 <th>Edit</th>
                 <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(users) &&
  users.map((user )=>{
              return(
              <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.mobile}</td>
              <td>{user.role}</td>
              <td>{user.companyname}</td>
              <td><button className='btn green' onClick={()=>handleUpdaterecord(user)}>Edit</button></td>
              <td><button className="btn red" onClick={()=>handleDelete(user._id)}>Delete</button></td>
            </tr>)
            })}
            
            
          </tbody>
        </table>
        {isModelopen&&
        (
          <div className="model">
            <div className="model-content">
              <span className='close' onClick={handlecloseModel}>&times;</span>
              <h3>Update Record</h3>

              <div className="input-group">
                <label htmlFor="name">Name</label>
                <input type="text" name='name' value={userData.name} id='name' autoComplete="off" onChange={handleData}/>
              </div>

               <div className="input-group">
                <label htmlFor="mobile">Mobile</label>
                <input type="text" name='mobile' value={userData.mobile} id='mobile' autoComplete="off" onChange={handleData}/>
              </div>

              <div className="input-group">
                <label htmlFor="role">Role</label>
                <input type="text" name='role' value={userData.role} id='role' autoComplete="off" onChange={handleData}/>
              </div>

               <div className="input-group">
                <label htmlFor="companyname">Company</label>
                <input type="text" name='companyname' value={userData.companyname} id='companyname' autoComplete="off" onChange={handleData}/>
              </div>

              <button className='btn green' onClick={handleSubmit}> Update user"</button>
            </div>
          </div>
        )
        }

        <button
        onClick={() => navigate("/dashboard")}
        style={{
          padding: "10px 20px",
          margin: "10px",
          cursor: "pointer",
          width:"110px"
        }}
      >
        Dashboard
      </button>

       
        </div>

        
  )
}

export default Employees