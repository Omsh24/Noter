import { Router } from "express";
import { registerUser, getNoteHistory, loginUser, logoutUser, changePassword, updateAccountDetails, getCurrentUser } from "../controllers/user.controller.js"
import { createNote, getNotes } from "../controllers/note.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router()

router.route("/register").post(registerUser)

router.route("/login").post(loginUser)

// secured routes -> which use the auth.middleware file

router.route("/logout").post(verifyJWT, logoutUser)
router.route("/changepassword").post(verifyJWT, changePassword)
router.route("/getuser").post(verifyJWT, getCurrentUser)
router.route("/update").post(verifyJWT, updateAccountDetails)

router.route("/note").post(verifyJWT, createNote)
router.route("/getNote").post(verifyJWT, getNotes)

router.route("/getNotes").post(verifyJWT, getNoteHistory)

export default router;