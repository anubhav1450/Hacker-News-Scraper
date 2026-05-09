import dotenv from "dotenv";
const mongoose = require("mongoose")

dotenv.config();
async function connectDB() {
 await mongoose.connect(process.env.MONGO_URI)
 console.log("Connected To Db")
}
module.exports  = connectDB