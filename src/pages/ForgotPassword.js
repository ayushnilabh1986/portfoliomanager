import "./../App.js";
import forgot from "./asset/forgot.jpg";

import React from "react";
import { SignUp } from "./SignUp.js";
import { SignIn } from "./SignIn.js";
import ReactDOM from 'react-dom/client';


import { Routes, Route, Link, useLocation } from "react-router-dom";

export function ForgotPassword() {
  return (
    <div className="App">
      <header>
        <h3 className="terolo"> Portfolio Manager </h3>
      </header>
      <div className="box">
        <div id="box1">
          <h2 className="signIn">Forgot Password</h2>
          <h6 className="registeredEmail" >
            Enter your registered email below to receive password 
            reset instructions.
          </h6>
          <img className="forgotPhoto" height={400} width= {400} src={forgot} alt="forgot Password" />

          <form action="" className="form">
            <div className="form__group">
              <input
                type="email"
                id="email"
                name="email"
                className="form__input"
                placeholder="yourname@example.com"
                autoComplete="off"
              />
              <label className="form__label">
                Email
              </label>
            </div>

           
            <button className="form__button">
              {" "}
              <div className="rectangle4">
                <h4 className="signIn1">Reset Password</h4>
              </div>
            </button>
          </form>

          <div className="signUp">
            <h4>
             Remember Password 
             <Link to="/SignIn"> Sign in</Link>


            </h4>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>
          The site is protected by reCAPTCHA and the Google{" "}
          <a href="https://www.google.com">Privacy Policy</a> and{" "}
          <a href="https://www.google.com">Terms of Conditions</a> apply.
        </p>
      </footer>
    </div>
  );
}
