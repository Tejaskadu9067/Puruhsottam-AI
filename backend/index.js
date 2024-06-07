const express = require('express');
const cors = require("cors")
const bodyParser = require('body-parser');
const connectDB = require('./db');
const router = require('./routes/Login');
const jwt = require ("jsonwebtoken")
const cookieParser = require("cookie-parser");
const multer = require("multer");
const fs = require('fs');


const app = express(); 
app.use(cookieParser());


const corsOptions = {
  origin: "http://localhost:5173",
  methods:"GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
}
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = 3000;
connectDB();
app.use("/api", router)

const photosMiddleware = multer({dest:'../frontend/uploads/'})
app.post('/upload', photosMiddleware.array('photos', 100), (req,res) => {
    const uploadedFiles = ""
for(let i=0; i<req.files.length; i++){
    // const fileInfo = req.files[i]
    const {path, originalname} = req.files[i]
    const parts = originalname.split('.')
    const ext = parts[parts.length-1];
    const newPath = path + '.' + ext
    fs.renameSync(path, newPath)
    res.json(newPath)
}



} )


app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
