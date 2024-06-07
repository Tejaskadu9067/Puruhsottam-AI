import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { UserContext } from "../context/Context.js";
import { Context } from "../context/Context.jsx";
import axios from "axios";

const Register = () => {
  const [userDetails, setUserDetails] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [age, setAge] = useState("");
  const [WorkDomain, setWorkDomain] = useState("");
  const [hobbies, setHobbies] = useState("");

  const { setNewUser } = useContext(Context);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:3000/api/register", {
        email,
        username,
        password,
        age,
        WorkDomain,
        hobbies,
      });
      if (data) {
        navigate("/login");
      }
    } catch (error) {
      console.log("register", error);
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
              <p className="text-2xl font-bold mt-6 mb-4">Register to Your Account</p>
              <form className="space-y-6">
                <div>
                  <input
                    autoComplete="off"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full px-4 py-3 text-gray-700 bg-white border rounded-lg focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-300"
                  />
                </div>
                <div>
                  <input
                    autoComplete="off"
                    type="text"
                    name="username"
                    placeholder="Username"
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full px-4 py-3 text-gray-700 bg-white border rounded-lg focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-300"
                  />
                </div>
                <div>
                  <button
                    type="button"
                    onClick={() => setUserDetails(true)}
                    className="block w-full px-4 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                  >
                    Next
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
                <Link to="/login" className="text-sm text-blue-600 hover:underline">
                  Already on Purushottam? Login
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
      {userDetails && (
        <div className="fixed inset-0 bg-gradient-to-r from-blue-500 to-purple-600">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white bg-opacity-90 p-8 w-full max-w-md rounded-lg shadow-lg">
              <div className="text-center">
                <img
                  src={assets.userlogin_icon}
                  alt="User icon"
                  className="w-20 mx-auto mt-6"
                />
                <p className="text-2xl font-bold mt-6 mb-4">Tell us more about you</p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      autoComplete="off"
                      type="number"
                      name="age"
                      placeholder="Age"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      className="block w-full px-4 py-3 text-gray-700 bg-white border rounded-lg focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-300"
                    />
                  </div>
                  <div>
                    <input
                      autoComplete="off"
                      type="text"
                      placeholder="Work Domain"
                      value={WorkDomain}
                      onChange={(e) => setWorkDomain(e.target.value)}
                      className="block w-full px-4 py-3 text-gray-700 bg-white border rounded-lg focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-300"
                    />
                  </div>
                  <div>
                    <input
                      autoComplete="off"
                      type="text"
                      name="hobbies"
                      placeholder="Hobbies (Any two)"
                      value={hobbies}
                      onChange={(e) => setHobbies(e.target.value)}
                      className="block w-full px-4 py-3 text-gray-700 bg-white border rounded-lg focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-300"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="block w-full px-4 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                    >
                      Register Account
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
                  <Link to="/login" className="text-sm text-blue-600 hover:underline">
                    Already on Purushottam? Login
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
      )}
    </>
  );
};

export default Register;
