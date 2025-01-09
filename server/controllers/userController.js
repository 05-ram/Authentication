import asyncHandler from "express-async-handler";
import members from "../model/UserModel.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

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
        console.log(user)
        const token = jwt.sign(
            {
                name: user.name
            },
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn: '1hr'
            }
        )
        res.cookie('token', token, { httpOnly: true, maxAge: 360000 })

        return res.json({ status: true, message: 'Credentials are correct' })
    }
    else {
        return res.json({ message: 'Credentials are incorrect' })
    }

})
export const resetUser = asyncHandler(async (req, res) => {
    const { email } = req.body;
    const user = await members.findOne({ email })

    if (!user) {
        return res.json({ message: "User is not registered" })
    }

    const token = jwt.sign({ id: user.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '5m' })

    // nodemailer code
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'borntoachieve98@gmail.com',
            pass: 'fvsleisawzcvyyho'
        }
    });

    // const encodedToken=

    var mailOptions = {
        from: 'borntoachieve98@gmail.com',
        to: email,
        subject: 'Reset Password',
        text: `http://localhost:5003/auth/reset-password/${token}`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return res.json({ message: 'Email Error sending' })
        } else {
            return res.json({ status: true, message: "Email Sent" })
        }
    });
})