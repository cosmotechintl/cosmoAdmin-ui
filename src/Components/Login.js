import React from "react";
import "./Login.css";
import {
  FaTwitter,
  FaGooglePlus,
  FaLinkedinIn,
  FaRegUser,
} from "react-icons/fa6";
import { IoMdLock } from "react-icons/io";
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";
function Login() {
  return (
    <div className="container">
      <div className="container-left">
        <div className="login-container">
          <h2>Welcome To</h2>
          <div className="image-container">
            <img
              src="/logo.png"
              alt="Infinity logo"
              width="80px"
              height="60px"
            />
            <p>infinity</p>
          </div>
          <p className="description">
            Log in to get in the moment updates on the things that interest you.
          </p>
          <div className="form-container">
            <span className="textfield">
              <FaRegUser className="user-icon" />
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="form-input"
              />
            </span>
            <span className="textfield">
              <IoMdLock className="user-icon" />
              <input
                type="text"
                name="password"
                placeholder="Password"
                className="form-input"
              />
            </span>
            <button className="form-button">Sign In</button>
          </div>

          <div className="signup">
            <p className="signup-text">Don't have an account ?</p>
            <p className="signup-button">Sign Up Now</p>
          </div>

          <div className="line-with-text">
            <span className="text">Or</span>
          </div>

          <div className="icon-container">Continue with social media</div>
          <div>
            <div className="icons-wrapper">
              <TiSocialFacebook size="24px" className="facebook-icon" />
              <FaTwitter size="24px" className="twitter-icon" />
              <FaGooglePlus size="24px" className="googleplus-icon" />
              <TiSocialLinkedin size="24px" className="linkedin-icon" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-right">
        <div className="right-container-text">
          <img src="/logo.png" alt="infinity" />
          <span>infinity</span>
          <p>
            Quis velit sunt Lorem Lorem non laboris ea excepteur enim. Laboris
            tempor mollit duis dolor voluptate quis voluptate aliquip elit
            nostrud anim ullamco.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
