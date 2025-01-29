import { DB_NAME } from "./constants.js";
import mongoose from "mongoose";

const connectDB = async () => { 
    try {
        
    } catch (error) {
        console.log("MONGODB CONNECTION ERROR", error)
        process.exit(1)
    }
}

export default connectDB;