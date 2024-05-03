const mongoose = require('mongoose');

let connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/Purushottam');
        console.log("MongoDB connected successfully")
    } catch (error) {
        console.log("MongoDB connection :", error)
    }
}
module.exports = connectDB;