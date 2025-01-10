import express from "express";
import { signUp, loginUser, resetUser, emailSend } from "../controllers/userController.js";
const router = express.Router();

router.post('/signup', signUp)
router.post('/login', loginUser)
router.post('/forgot-password', resetUser)
router.post('/reset-password/:token', emailSend)

export default router;