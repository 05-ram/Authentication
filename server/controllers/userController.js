import asyncHandler from "express-async-handler";
import members from "../model/UserModel.js";
import bcrypt from 'bcrypt';

const signUp = asyncHandler(async (req, res) => {
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

export default signUp;