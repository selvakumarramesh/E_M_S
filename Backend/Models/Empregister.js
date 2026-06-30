import mongoose, { model, Mongoose } from "mongoose";

const Empregisterschema = new mongoose.Schema({
    name:String,
    mobile:String,
    role:String,
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employerregister"
    }
})

const EmpRegisterModel = mongoose.model("Empregister",Empregisterschema);

export default EmpRegisterModel;