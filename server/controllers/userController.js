import asyncHandler from "express-async-handler";
import members from "../model/UserModel.js";
import bcrypt from 'bcrypt';

export const signUp = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.json({ message: "All fields are mandatory" })
    }

    const userAvailable = await members.findOne({ email })

    if (userAvailable) {
        return res.json({ message: "User Already Exists" })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const member = members.create(
        {
            name, email, password: hashedPassword
        }
    )
    return res.json({ status: true, message: "Recorded Successfully!" })
})
export const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.json({ message: "All fields are mandatory!" })
    }

    const user = await members.findOne({ email });
    if (user && await bcrypt.compare(password, user.password)) {
        return res.json({ status: true, message: 'Credentials are correct' })
    }

})