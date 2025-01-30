import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
// urls often contain special characters, this line encodes it
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// this stores all the files into the public folder
app.use(express.static("public"))
// parses cookies from incomming requests and stores them in req.cookie
app.use(cookieParser())

// importing routes
import userRoute from "./routes/user.routes.js";

app.use("/api/v1/users", userRoute)

export { app };