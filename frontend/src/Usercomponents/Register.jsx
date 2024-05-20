import React, { useState, useContext } from "react";
import "../registeruser.css";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { UserContext } from "../context/Context.js";
import { Context } from "../context/Context.jsx";
import axios from "axios";




const Register = () => {
  const[username, setUsername] = useState("")
  const[password, setPassword] = useState("")
  const[email, setEmail] = useState("")

  const {setNewUser} = useContext(Context)
  
  const navigate = useNavigate();
  


  const handleSubmit = async (e) => {

    e.preventDefault();
    try {
      const {data} = axios.post('http://localhost:3000/api/register',{email,username,password})
      if ({data}) {
        setNewUser(data)
        navigate("/login")
        console.log(data)
    } 
  }catch (error) {
    console.log("register", error);
  }
}

  return (
    <>
    <UserContext.Provider>
      <div className="container">
        <div className="content">
          
          <img
            src={assets.userlogin_icon}
            alt="pin logo"
            className="img1 ml-[40%]"
          />
          <p className="header">Register account to see more</p>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="detail"
            />
            <br />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
              className="detail"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="detail"
            />
            <input type="submit" className="btn int" value="register account" />
          </form>

          <a href="/forgot">Forgot your password?</a>

          <p className="or">OR</p>

          <footer>
            <p>
              By continuing, you agree to Purushottam's{" "}
              <b>Terms of Service, Privacy policy.</b>
            </p>
            <hr />
            <p><Link to={"/login"} >Already on Purushottam? Login</Link></p>
          </footer>
          
        </div>
      </div>
      </UserContext.Provider>
    </>
  );
};


export default Register;
