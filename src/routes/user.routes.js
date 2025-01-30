import { Router } from "express";
import { registerUser, loginUser, logoutUser } from "../controllers/user.controller.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router()

router.route("/register").post(registerUser)

router.route("/login").post(loginUser)

// secured routes -> which use the auth.middleware file

router.route("/logout").post(verifyJWT, logoutUser)

export default router;