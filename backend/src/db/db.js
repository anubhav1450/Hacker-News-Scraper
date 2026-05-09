import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
async function connectDB() {
 await mongoose.connect(process.env.MONGO_URI)
 console.log("Connected To Db")
}
export default connectDB;