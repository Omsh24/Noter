// import { DB_NAME } from "./constants.js";
import mongoose from "mongoose";

const DB_NAME = "noteapp"

const connectDB = async () => { 
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_SERVER}/${DB_NAME}`)
        // console.log("Printing the connection Instance \n", connectionInstance);
        console.log(`MongoDB connected !!!! db Host: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MONGODB CONNECTION ERROR", error)
        process.exit(1)
    }
}

export default connectDB;