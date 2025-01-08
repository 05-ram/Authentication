import express from "express";
import { signUp, loginUser, resetUser } from "../controllers/userController.js";
const router = express.Router();

router.post('/signup', signUp)
router.post('/login', loginUser)
router.post('/forgot-password', resetUser)

export default router;