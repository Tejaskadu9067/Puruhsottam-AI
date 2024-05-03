import React, { useState } from "react";
import "../registeruser.css";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  //handling the input value
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  //handling form submission

  const handleSubmit = async (e) => {
    let URL = "http://localhost:3000/api/register";
    e.preventDefault();
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        setUser({
          username: "",
          email: "",
          password: "",
          confirm_password: "",
        });
        navigate("/Home")
      }
    } catch (error) {
      console.log("register", error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="content">
          
          <img
            src={assets.userlogin_icon}
            alt="pin logo"
            className="img1"
          />
          <p className="header">Register account to see more</p>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={user.email}
              onChange={handleInput}
              className="detail"
            />
            <br />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={user.username}
              onChange={handleInput}
              className="detail"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={handleInput}
              className="detail"
            />
            <input
              type="password"
              name="confirm_password"
              placeholder="Confirm Password"
              value={user.confirm_password}
              onChange={handleInput}
              className="detail"
            />
            <input type="submit" className="btn int" value="register account" />
          </form>

          <a href="/forgot">Forgot your password?</a>

          <p className="or">OR</p>
          {/* <button className="btn fbk">
            <i
              className="fab fa-facebook fa-lg"
              style={{ color: "white", paddingRight: "10px" }}
            ></i>
            <a href="#">Continue with Facebook</a>
          </button>
          <br />
          <button className="btn ggl">
            <i
              className="fab fa-google"
              style={{ color: "rgb(11, 241, 22)", paddingRight: "10px" }}
            ></i>
            <a href="#">Continue with Google</a>
          </button> */}

          <footer>
            <p>
              By continuing, you agree to Purushottam's{" "}
              <b>Terms of Service, Privacy policy.</b>
            </p>
            <hr />
            <a onClick={()=> navigate("/login")} href="/login">Already on Purushottam? Login</a>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Register;
