import express from "express";
import register from "../controllers/userController.js";
const router = express.Router();

router.post('/signup', register)

export default router;