import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const connection = async () => {

    const url = process.env.URL;
    try {
        await mongoose.connect(url);
        console.log("database connected");
    } catch (error) {
        console.log(error);
    }
}

export default connection;