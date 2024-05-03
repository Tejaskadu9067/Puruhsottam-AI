const express = require("express")
const router = express.Router()

const RegisterPage = require("../controllers/Login")

// router.route("/login").get(LoginPage);


router.post("/register", RegisterPage)




router.get("/login", (req,res) =>{
    res.send("i am Login get")
})

router.get("/register", (req,res) =>{
    res.send("i am Register get")
})

module.exports = router;