import React from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="content">
          <img
            src="https://i.pinimg.com/originals/d3/d1/75/d3d175e560ae133f1ed5cd4ec173751a.png"
            alt="pin logo"
            className="img1"
          />
          <p className="header">Login account to see more</p>

          <form >
            <br />
            <input
              type="text"
              name="username"
              placeholder="Username"
             
              className="detail"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              
              className="detail"
            />
            <input type="submit" className="btn int" value="Login user" />
          </form>

          <a href="/forgot">Forgot your password?</a>

          <p className="or">OR</p>
          

          <footer>
            <p>
              By continuing, you agree to Purushottam's{" "}
              <b>Terms of Service, Privacy policy.</b>
            </p>
            <hr />
            <a onClick={()=> navigate("/")} href="">Not on Purushottam? Register</a>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Login;
