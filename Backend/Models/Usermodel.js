import mongoose from "mongoose"

const userSignupSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
})

const userSignup=mongoose.model("Signup",userSignupSchema);

export default userSignup;