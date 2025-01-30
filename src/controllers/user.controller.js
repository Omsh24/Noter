import mongoose from "mongoose";
import { asyncHandler } from "../utilis/asyncHandler.js";
import { ApiError } from "../utilis/ApiError.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utilis/ApiResponse.js";

const registerUser = asyncHandler( async (req, res) => {
    /*
        STEPS:
        1. Get user data through frontend
        2. Validate all the parameters (password, email)
        3. Check if user already exists
        4. Create a user object for storing in mongoDB
        5. Remove password (encrypted) and RefreshToken from res
        6. check if the user has been created
        7. return response
    */

    // we will get the user information from the req given by frontend so we can extract info from there
    const {username, email, password} = req.body
    // console.log(email);

    // checking if valid
    if(
        [username, email, password].some((para) => para?.trim() === "")
    ){
        throw new ApiError(400, "All fields are required to be entered") 
    }

    // checking if user with existing username or email exists
    const existedUser = await User.findOne({
        $or: [{username}, {email}]
    })

    if(existedUser){
        throw new ApiError(400, "Username and Email should be unique")
    }

    // creating a user object
    const user = await User.create({
        username,
        email,
        password
    })

    // this is the user that will be sent, so we remove password and refresh Token
    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    // checking for the created user
    if(!createdUser){
        throw new ApiError(500, "Something went wrong while creating the user")
    }

    console.log(createdUser)

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User created Successfully")
    )
} )

export { registerUser };