import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";

export const verifyToken = asyncHandler(async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.json({ status: false, message: "No token" })
    }
    const decoded = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    next();
})