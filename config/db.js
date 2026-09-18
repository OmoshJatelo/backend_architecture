const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Mongodb connected!!");
    } catch (error) {
        console.error("mongo db connection failed :", error.message);
        process.exit(1);
        
    }
};

module.exports = connectdb;