import EmpRegisterModel from "../Models/Empregister.js"

import EmployerregisterModel from "../Models/Employerregister.js"

import userSignup from "../Models/Usermodel.js"

export const addEmployee = async (req, res) => {
  try {
    const { name, mobile,  role, companyname} = req.body;

    if (!name || !mobile ||  !role || !companyname) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const mobileRegex = /^[6-9]\d{9}$/;
    

    if (!mobileRegex.test(mobile)) {
      return res.status(400).json({
        success: false,
        message: "Invalid mobile number"
      });
    }

   

const employer = await EmployerregisterModel.findOne({companyname: companyname });

    if (!employer) {
        return res.status(404).json({
            success: false,
            message: "Company not found. Please enter a valid company name."
        });
    }
   

   const employee= await EmpRegisterModel.create({
      name,
      mobile,
      role,
      employeeId: employer._id
    });

    

   

    

    res.json({
        success: true,
        message: "Employee added successfully"
    });

    
  } catch (err) {
    res.status(500).json(err);
  }
}

export const addEmployer = async (req, res) => {
  try {

    const { companyname,location } = req.body;

    if (! companyname || ! location ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const user = await EmployerregisterModel.findOne({ companyname: companyname.trim()});

    if (user) {
      return res.status(409).json({
    success: false,
    message: "Company already registered"
  });
    }

    const employer=await EmployerregisterModel.create({
      companyname: companyname.trim(),
      location: location.trim()
    });

    return res.status(201).json({
      success: true,
      message: "Employer registered successfully",
      id: employer._id,
    });
  } catch (err) {
    console.log(err);

  }
} 
  


export const getEmployee = async(req,res)=>{
    const employee=await EmpRegisterModel.find()
    res.status(200).json({sucess:true,employee})
    
}

export const getEmployer = async(req,res)=>{
  
    const employer=await EmployerregisterModel.find()
    res.status(200).json({sucess:true,employer})
}

export const getEmployeeByCompany = async (req, res) => {
  try {
    const { companyname } = req.params;

    const employee = await EmpRegisterModel.find({ companyname });

    res.status(200).json({
      success: true,
      employee,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateEmployee = async (req, res) => {
  try {
    const id = req.params.id;

    const updatedUser = await EmpRegisterModel.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    res.json(updatedUser);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export const updateEmployer = async (req, res) => {
  try {
    const id = req.params.id;

    const updatedUser = await EmployerregisterModel.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    res.json(updatedUser);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};


export const deleteEmployee = async (req, res) => {
  try {
    const id = req.params.id;

    await EmpRegisterModel.findByIdAndDelete(id);

    const users = await EmpRegisterModel.find();

    res.json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deleteEmployer = async (req, res) => {
  try {
    const id = req.params.id;

    await EmployerregisterModel.findByIdAndDelete(id);

    const users = await EmployerregisterModel.find();

    res.json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};



export const addUser = async(req,res)=>{
    try{
        const { name,  email, password } = req.body;

        if (!name ||  !email || !password ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

   

    // user detail checking with email

    const detail = await userSignup.findOne({ email });

    if (detail) {
      return res.status(404).json({
        success: false,
        message: "user already exist"
      });
    }

    
   const user = await userSignup.create({
        name,
        email,
        password,
        
    });
     

    res.status(201).json({
        success:true,
        id:user._id,
    });
    }
    
catch(err){
console.log(err);
}

}

export const loginuser =async(req,res)=>{
  try{
    const {email,password}=req.body;

     const user = await userSignup.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Email not found"
      });
    }

    // Compare password
    if (user.password !== password) {
      return res.status(401).json({
        success: false,
        message: "Invalid password"
      });
    }

    // Login successful
    res.status(200).json({
      success: true,
      message: "Login successful",
      user
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};
