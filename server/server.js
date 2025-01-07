import express from 'express';
import connectDb from './config/connectDb.js';
const app = express();
import cors from "cors";
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import memberRoute from "./routes/userRoute.js";
dotenv.config();

const port = process.env.PORT;

connectDb();
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:3001'],
    credentials: true
}))
app.use(cookieParser())
app.use('/auth', memberRoute)


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})




// /-----credentials: true------/

// "Cookies": If your application needs to send cookies between the client (e.g., running on localhost:3001) and the server, you need to set credentials: true. This allows the server to send cookies back to the client, and the client can send cookies back with subsequent requests.

// "HTTP Authentication": If your application uses HTTP authentication (like basic or bearer tokens) in headers, setting credentials: true will allow the browser to send the credentials (such as the Authorization header) along with the request.