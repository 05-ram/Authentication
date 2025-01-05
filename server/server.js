import express from 'express';
import connectDb from './config/connectDb.js';
const app = express();
import cors from "cors";
import dotenv from 'dotenv';
import memberRoute from "./routes/userRoute.js";
dotenv.config();

const port = process.env.PORT;

connectDb();
app.use(express.json())
app.use(cors())

app.use('/auth', memberRoute)


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
