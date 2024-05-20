const express = require('express');
const cors = require("cors")
const bodyParser = require('body-parser');
const connectDB = require('./db');
const router = require('./routes/Login');
const jwt = require ("jsonwebtoken")
const cookieParser = require("cookie-parser");


const app = express(); // Move this line up
app.use(cookieParser());


const corsOptions = {
  origin: "http://localhost:5174",
  methods:"GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
}
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = 3000;
connectDB();
app.use("/api", router)
app.get('/', (req, res) => {
  res.send('Home page');
});



app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
