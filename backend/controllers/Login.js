const express = require("express")
const mongoose = require("mongoose")
const User = require("../Models/User.js")
const jwt = require("jsonwebtoken")





const jwtSecret = "shjvefjsevf7t564783r537f346tf3674f"

const RegisterPage = async(req,res) => {
    const {username, email, password, age, WorkDomain, hobbies} = req.body;
    const newUser = await User.create({
        username,
        email,
        password,
        age,
        WorkDomain,
        hobbies
    })
    await newUser.save();
    res.json(newUser)
}



const LoginPage = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });

    if (user) {
        try {
            const token = jwt.sign({ password: user.password, username: user.username, id: user._id }, jwtSecret);
            res.cookie('token', token).json({ user, token});
        } catch (error) {
            console.error('JWT signing error:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    } else {
        console.log("User not found");
        res.status(404).json({ error: 'User not found' });
    }
};









module.exports = {RegisterPage, LoginPage}
