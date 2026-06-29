import mongoose from "mongoose";


export const connectDB=()=>{
    mongoose.connect(process.env.DB_url)
    .then((data)=>{console.log("MongoDB connected with server ");
    })
    .catch((err)=>{});
    }