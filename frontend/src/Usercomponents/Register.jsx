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
      const { data } = axios.post("http://localhost:3000/api/register", {
        email,
        username,
        password,
        age,
        WorkDomain,
        hobbies,
      });
      if ({ data }) {
        navigate("/login");
      }
    } catch (error) {
      console.log("register", error);
    }
  };

  return (
    <>
      <UserContext.Provider>
        <div className="container mx-auto p-4 w-[28rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg bg-white">
          <div className="content mx-auto text-center w-3/5">
            <img
              src={assets.userlogin_icon}
              alt="pin logo"
              className="img1 w-44 relative top-5 ml-[12%]"
            />
            <p className="header text-4xl font-bold mt-10 mb-2 leading-tight">
              Register account to see more
            </p>

            <form>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="detail w-full h-12 my-1.5 p-3.5 text-sm text-gray-500 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
              />
              <br />
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="detail w-full h-12 my-1.5 p-3.5 text-sm text-gray-500 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="detail w-full h-12 my-1.5 p-3.5 text-sm text-gray-500 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
              />
              <input
                onClick={() => setUserDetails(true)}
                type="button"
                className="btn int w-full h-10 my-1 rounded-full text-lg bg-black text-white font-bold hover:bg-red-700 cursor-pointer"
                value="Next"
              />
            </form>

            <Link to="/forgot" className="text-blue-600 hover:underline">
              Forgot your password?
            </Link>

            <p className="or text-sm font-bold my-2.5">OR</p>

            <footer className="mt-2">
              <p className="text-xs my-2.5 opacity-70">
                By continuing, you agree to Purushottam's{" "}
                <b>Terms of Service, Privacy policy.</b>
              </p>
              <hr className="w-1/2 opacity-40 mx-auto" />
              <p>
                <Link to={"/login"} className="text-blue-600 hover:underline">
                  Already on Purushottam? Login
                </Link>
              </p>
            </footer>
          </div>
        </div>

        {userDetails ? (
          <div className="container mx-auto px-4 py-10 w-[28rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg bg-white">
            <div className="content mx-auto text-center w-3/5">
              <img
                src={assets.userlogin_icon}
                alt="pin logo"
                className="img1 w-44 relative top-5 ml-[12%]"
              />
              <p className="header text-4xl font-bold mt-10 mb-2 leading-tight">
                Tell us more about you.
              </p>

              <form onSubmit={handleSubmit}>
                <input
                  type="number"
                  name="number"
                  placeholder="Age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="detail w-full h-12 my-1.5 p-3.5 text-sm text-gray-500 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
                />
                <br />
                <input
                  type="text"
                  placeholder="Work Domain"
                  value={WorkDomain}
                  onChange={(e) => setWorkDomain(e.target.value)}
                  className="detail w-full h-12 my-1.5 p-3.5 text-sm text-gray-500 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
                />
                <input
                  type="text"
                  name="hobbies"
                  placeholder="Hobbies (Any two)"
                  value={hobbies}
                  onChange={(e) => setHobbies(e.target.value)}
                  className="detail w-full h-12 my-1.5 p-3.5 text-sm text-gray-500 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
                />
                <input
                  type="submit"
                  className="btn int w-full h-10 my-1 rounded-full text-lg bg-black text-white font-bold hover:bg-red-700 cursor-pointer"
                  value="Register account"
                />
              </form>

              <Link to="/forgot" className="text-blue-600 hover:underline">
                Forgot your password?
              </Link>

              <p className="or text-sm font-bold my-2.5">OR</p>

              <footer className="mt-2">
                <p className="text-xs my-2.5 opacity-70">
                  By continuing, you agree to Purushottam's{" "}
                  <b>Terms of Service, Privacy policy.</b>
                </p>
                <hr className="w-1/2 opacity-40 mx-auto" />
                <p>
                  <Link to={"/login"} className="text-blue-600 hover:underline">
                    Already on Purushottam? Login
                  </Link>
                </p>
              </footer>
            </div>
          </div>
        ) : null}
      </UserContext.Provider>
    </>
  );
};

export default Register;
