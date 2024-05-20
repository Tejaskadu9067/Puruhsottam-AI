import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { Context } from "../context/Context.jsx";
import axios from "axios";


const Login = () => {
  const navigate = useNavigate();
  const {newuser, setNewUser} = useContext(Context)

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios.post('http://localhost:3000/api/login', {username,password})

      // console.log("heyyy",data.user)

      if (data) {
        // setNewUser(data.user)
        navigate("/home");
      } 
      
    } catch (error) {
      navigate("/")
      console.log("Login error:", error.message);
      // Display error message to the user
    }
  };

  
  
  return (
    <>
      <div className="container">
        <div className="content">
          <img  src={assets.userlogin_icon} alt="pin logo" className="img1 ml-[40%]" />
          <p className="header">Login account to see more</p>

          <form onSubmit={handleSubmit}>
            <br />
            <input
          
              autoComplete="off"
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e)=>{setUsername(e.target.value)}}
              className="detail"
            />
            <input
            autoComplete="off"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
              className="detail"
            />
            <input type="submit" className="btn int" value="Login user" />
          </form>

          <Link to="/forgot">Forgot your password?</Link>

          <p className="or">OR</p>

          <footer>
            <p>
              By continuing, you agree to Purushottam's{" "}
              <b>Terms of Service, Privacy policy.</b>
            </p>
            <hr />
            <Link to={"/"}>Not on Purushottam? Register</Link>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Login;
