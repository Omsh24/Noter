import { User } from "../models/user.model.js";
import { asyncHandler } from "../utilis/asyncHandler.js";
import jwt from  "jsonwebtoken";
// import { ApiError } from "../utilis/ApiError";
import { ApiError } from "../utilis/ApiError.js";

// This is a function that is made to authenticate that the user is valid
// This will come in use when logging out or when creating a note
export const verifyJWT = asyncHandler( async (req, res, next) => {
    // Since we have sent cookies during logging in the user, we can use them here
    try {
        // In postman in req header we are given something like: Authorization: Bearer <token_name>
        // so we are either extracting directly from cookies or from there
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");
        console.log("Received token: ", token);
        if(!token){
            throw new ApiError(401, "Invalid User Entered")
        }

        // to decode or verify the user we always need the secret we used to make the token
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

        // In user.model we have access token where we have sent _id as well
        // so here we are extracting that _id to use for finding and verifying the user
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken")

        if(!user){
            throw new ApiError(402, "Invalid access token found")
        }

        // we have passed req.user here to be able to accessed in logout function
        req.user = user
        next()

    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid Access Token")
    }
} )
