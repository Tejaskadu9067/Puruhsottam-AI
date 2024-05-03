const mongoose = require("mongoose")
const User = require("../Models/User")

const LoginPage = async(req,res) => {
    const {username, email, password, confirm_password} = req.body;
    const newUser = await User.create({
        username,
        email,
        password,
        confirm_password
    })
    await newUser.save();
    res.send(newUser)
}

module.exports = LoginPage
