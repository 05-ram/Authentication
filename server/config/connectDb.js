import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING)
        console.log('Db Connected Successfully', connect.connection.name)
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
}

export default connectDb;