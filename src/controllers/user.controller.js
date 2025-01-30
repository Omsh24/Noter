import mongoose from "mongoose";
import { asyncHandler } from "../utilis/asyncHandler.js";
import { ApiError } from "../utilis/ApiError.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utilis/ApiResponse.js";
import jwt from "jsonwebtoken";

const generateAccessAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()
    
        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        return { accessToken, refreshToken }

    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating refresh and access tokens")
    }
}

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

const loginUser = asyncHandler( async (req, res) => {
    // request body se data le aao
    const {username, email, password} = req.body

    // check karo ki username aor email hai ki nhi
    if(!username && !email){
        throw new ApiError(400, "username or email is required")
    }

    // find the user with given username or email
    const user = await User.findOne({
        $or: [{username}, {email}]
    })

    // check if user exists
    if(!user){
        throw new ApiError(404, "User not found")
    }

    // check if password is correct
    const passwordCheck = await user.isPasswordCorrect(password)

    if(!passwordCheck){
        throw new ApiError(401, "Inavlide user Password")
    }

    // generate access and refresh tokens
    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id)

    // response that will be returned back to the user so we remove password and refreshToken
    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

    // To handle cookies
    const options = {
        httpOnly: true,
        secure: true
    }

    return res.status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new ApiResponse(
            200,
            {
                user: loggedInUser, accessToken, refreshToken
            },
            "User logged in Successfully"
        )
    )
} );

export { registerUser, loginUser };