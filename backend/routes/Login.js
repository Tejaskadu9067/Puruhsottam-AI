const express = require("express")
const router = express.Router()
const LoginPage = require("../controllers/Login")

// router.route("/login").get(LoginPage);


router.post("/register", LoginPage)




router.get("/login", (req,res) =>{
    res.send("i am Login get")
})

router.get("/register", (req,res) =>{
    res.send("i am Register get")
})

module.exports = router;