import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { Context } from "../context/Context.jsx";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const { setNewUser } = useContext(Context);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:3000/api/login", {
        username,
        password,
      });

      if (data) {
        setNewUser(data); // Assuming data contains user info
        navigate("/home");
      }
    } catch (error) {
      setError("Login failed. Please check your username and password.");
      console.log("Login error:", error.message);
      
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white bg-opacity-90 p-8 w-full max-w-md rounded-lg shadow-lg">
            <div className="text-center">
              <img
                src={assets.userlogin_icon}
                alt="User icon"
                className="w-20 mx-auto mt-6"
              />
              <p className="text-2xl font-bold mt-6 mb-4">Login to Your Account</p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    autoComplete="off"
                    type="text"
                    name="username"
                    placeholder="Username"
                    aria-label="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="block w-full px-4 py-3 text-gray-700 bg-white border rounded-lg focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-300"
                  />
                </div>
                <div>
                  <input
                    autoComplete="off"
                    type="password"
                    name="password"
                    placeholder="Password"
                    aria-label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full px-4 py-3 text-gray-700 bg-white border rounded-lg focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-300"
                  />
                </div>
                {error && <p className="text-red-600">{error}</p>}
                <div>
                  <button
                    type="submit"
                    className="block w-full px-4 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                  >
                    Login
                  </button>
                </div>
              </form>
              
              <div className="mt-6">
                <Link to="/forgot" className="text-sm text-blue-600 hover:underline">
                  Forgot your password?
                </Link>
              </div>
              <p className="mt-4 text-sm font-medium text-gray-600">OR</p>
              <footer className="mt-4">
                <Link to="/" className="text-sm text-blue-600 hover:underline">
                  Not on Purushottam? Register
                </Link>
                <hr className="my-4 border-gray-300" />
                <p className="text-xs text-gray-500">
                  By continuing, you agree to Purushottam's{" "}
                  <b>Terms of Service, Privacy Policy.</b>
                </p>
              </footer>
            </div>
          </div>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
      <div className="absolute top-20 right-0 w-40 h-40 bg-purple-400 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
      <div className="absolute bottom-10 left-20 w-40 h-40 bg-pink-400 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
    </>
  );
};

export default Login;
