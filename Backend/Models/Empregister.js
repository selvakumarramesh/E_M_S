import mongoose, { model, Mongoose } from "mongoose";

const Empregisterschema = new mongoose.Schema({
    name:String,
    mobile:String,
    role:String,
    companyname:String,
})

const EmpRegisterModel = mongoose.model("Empregister",Empregisterschema);

export default EmpRegisterModel;