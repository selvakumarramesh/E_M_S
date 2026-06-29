import app from "./app.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"

dotenv.config({path:"./config/config.env"})

const PORT = process.env.PORT || 3000;


connectDB();


app.listen(PORT,()=>{
    console.log(`server running sucessfully in the lochost:${PORT}`);
    
})