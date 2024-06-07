const mongoose = require("mongoose");
const User = require("../Models/User")
const DataSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model("DataStorage", DataSchema);