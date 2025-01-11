import express from "express";
import { signUp, loginUser, resetUser, emailSend, verifyUser, logOut } from "../controllers/userController.js";
import { verifyToken } from "../middleware/verifyToken.js";
const router = express.Router();

router.post('/signup', signUp)
router.post('/login', loginUser)
router.post('/forgot-password', resetUser)
router.post('/reset-password/:token', emailSend)
router.get('/verify', verifyToken, verifyUser)
router.get('/logout', logOut)

export default router;