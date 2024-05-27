const express = require("express");
const router = express.Router();
const cookieParser = require("cookie-parser");
const { RegisterPage, LoginPage } = require("../controllers/Login");
const User = require("../Models/User");
const jwt = require("jsonwebtoken")
router.use(cookieParser());
const jwtSecret = "shjvefjsevf7t564783r537f346tf3674f"
router.post("/register", RegisterPage);



router.post("/login", LoginPage);

router.get("/login", (req, res) => {
  res.send("i am Login get");
});

router.get("/register", (req, res) => {
  res.send("i am Register get");
});



router.get("/profile", (req, res) => {
  const { token } = req.cookies;
//   res.json({token})
  if (token) {
    jwt.verify(token, jwtSecret, {}, async(error, userData) => {
      if (error) throw error;
      const {username, email, id} = await User.findById(userData.id);
      res.json({username, email, id});
    });
  } else {
    res.json(null);
  }
});

module.exports = router;
