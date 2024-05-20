const mongoose = require('mongoose');

let connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://tejaskadu:root7385@mern-app.ru8fsje.mongodb.net/purushottam?retryWrites=true&w=majority&appName=MERN-app');
        console.log("MongoDB connected successfully")
    } catch (error) {
        console.log("MongoDB connection :", error)
    }
}
module.exports = connectDB;