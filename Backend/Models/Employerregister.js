import mongoose, { model, Mongoose } from "mongoose";

const Employerregisterschema = new mongoose.Schema({
    companyname:String,
    location:String,
})

const EmployerregisterModel = mongoose.model("Employerregister",Employerregisterschema);

export default EmployerregisterModel;