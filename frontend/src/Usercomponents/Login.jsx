import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { Context } from "../context/Context.jsx";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const { newuser, setNewUser } = useContext(Context);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:3000/api/login', { username, password });

      if (data) {
        navigate("/home");
      }
      
    } catch (error) {
      navigate("/");
      console.log("Login error:", error.message);
    }
  };

  return (
    <>
      <div className="container mx-auto p-2 w-[32rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg bg-white">
        <div className="content mx-auto text-center w-3/5">
          <img src={assets.userlogin_icon} alt="pin logo" className="img1 w-44 relative top-5 ml-[16%]" />
          <p className="header text-4xl font-bold mt-10 mb-2 leading-tight">Login account to see more</p>

          <form onSubmit={handleSubmit}>
            <br />
            <input
              autoComplete="off"
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => { setUsername(e.target.value) }}
              className="detail w-full h-12 my-1.5 p-3.5 text-sm text-gray-500 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
            />
            <input
              autoComplete="off"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => { setPassword(e.target.value) }}
              className="detail w-full h-12 my-1.5 p-3.5 text-sm text-gray-500 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
            />
            <input type="submit" className="btn int w-full h-10 my-1 rounded-full text-lg bg-black text-white font-bold hover:bg-red-700 cursor-pointer" value="Login user" />
          </form>

          <Link to="/forgot" className="text-blue-600 hover:underline">Forgot your password?</Link>

          <p className="or text-sm font-bold my-2.5">OR</p>

          <footer className="mt-2">
            <p className="text-xs my-2.5 opacity-70">
              By continuing, you agree to Purushottam's <b>Terms of Service, Privacy policy.</b>
            </p>
            <hr className="w-1/2 opacity-40 mx-auto" />
            <Link to={"/"} className="text-blue-600 hover:underline">Not on Purushottam? Register</Link>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Login;
