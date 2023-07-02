import React, { useState } from "react";
import { LoginAPI, GoogleSignInAPI } from "../api/AuthAPI";

import { toast } from "react-toastify";
import GoogleButton from "react-google-button";
import LinkedInLogo from "../assets/linkedinLogo.png";
import { navigate } from "../helpers/useNavigate";
import "../Sass/LoginComponent.scss";
import { useNavigate } from "react-router-dom";

export default function LoginComponent() {
  const [credentails, setCredentials] = useState({});
  const login = async () => {
    try {
      let res = await LoginAPI(credentails.email, credentails.password);
      toast.success("Signed In to Linkedin!");
    } catch (err) {
      toast.error("Please check your email and password");
    }
  };

  const googleSignIn = () => {
    let response = GoogleSignInAPI();
    console.log(response);
  };

  return (
    <div className="login-wrapper">
      <img src={LinkedInLogo} className="linkedinLogo" />
      <div className="login-wrapper-inner">
        <h1 className="heading">Sign In</h1>
        <p className="sub-heading">Stay updated on your professional world</p>

        <div className="auth-inputs">
          <input
            onChange={(event) =>
              setCredentials({ ...credentails, email: event.target.value })
            }
            type="email"
            className="common-input"
            placeholder="Email or Phone"
          />
          <input
            onChange={(event) =>
              setCredentials({ ...credentails, password: event.target.value })
            }
            type="password"
            className="common-input"
            placeholder="Password"
          />
        </div>
        <button onClick={login} className="login-btn">
          Sign in
        </button>
        <hr className="hr-text" data-content="or"></hr>
        <div className="google-btn-container">
          <GoogleButton className="button" onClick={googleSignIn} />
        </div>
        <p className="go-to-signup">
          New to Linkedin? <span className="join-now" onClick={() => navigate('/register')}>Join now</span>
        </p>
      </div>
    </div>
  );
}
