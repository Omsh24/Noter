import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

const whitelist = ['http://localhost:5173']; // List your frontend origin(s) here
app.use(cors({
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      // Allow the request if the origin is in the whitelist or no origin (e.g., testing)
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'), false);
    }
  },
  credentials: true, // Allow sending cookies/credentials with the request
}));

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