import "./../App.js";
import PasswordStrengthBar from "react-password-strength-bar";
import axios from "axios";

import { useState } from "react";
import { useSignUp } from "../../src/hooks/useSignUp.js";
import React from "react";
import { Login } from "./Login.js";
import { ForgotPassword } from "./ForgotPassword.js";
import ReactDOM from "react-dom/client";

import { Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import googleLogo from "./asset/google.webp";

export function SignUp() {
  const [email, setEmail] = useState("");
const navigate= useNavigate();
  const [password, setPassword] = useState("");
  const {SignUp,error,isLoading}=useSignUp()

  const handleSubmit = async (e) =>
  {
    e.preventDefault()
    console.log(email,password);
  await SignUp(email,password)
  }
  


  const [strength, setStrength] = useState("");
  const [strengthColor, setStrengthColor] = useState("black");

  
  function evaluatePasswordStrength(password) {
    let score = 0;
    if (!password) return "";
    if (password.length > 8) score += 1;
    // Contains lowercase
    if (/[a-z]/.test(password)) score += 1;
    // Contains uppercase
    if (/[A-Z]/.test(password)) score += 1;
    // Contains numbers
    if (/\d/.test(password)) score += 1;

    // Contains special characters

    if (/[^A-Za-z0-9]/.test(password)) score += 1;
    switch (score) {
      case 0:
      case 1:
      case 2:
        setStrengthColor("red");
        return "Weak";
      case 3:
        setStrengthColor("orange");
        return "Medium";
      case 4:
      case 5:
        setStrengthColor("green");
        return "Strong";
      default:
        return "";
    }
  }

  const handleChange = (event) => {
    const { value } = event.target;

    setPassword(value);
    setStrength(evaluatePasswordStrength(value));
  };

  return (
    <div className="App">
      
      <div className="box">
        <div id="box1">
          <h2 className="signIn">Sign up</h2>
          <div className="rectangle">
            <img className="photo" src={googleLogo} alt="react logo" />

            <h4 className="google">Google</h4>
          </div>

          <form action="SignUp" className="form" onSubmit={handleSubmit}>
            <hr className="line1" />
            <h1 className="form__title">Or sign up with Email</h1>
            <hr className="line2" />
            
            <div className="form__group">
            <label htmlFor="email" className="form__label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form__input"
                placeholder="yourname@example.com"
                autoComplete="off"
                onChange={(e) =>setEmail(e.target.value)}
                value={email}
              />
              
            </div>

            <div className="form__group">
            <label htmlFor="password" className="form__label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form__input"
             
                onChange={(e) =>setPassword(e.target.value)}
                value={password}
                placeholder="Enter your password"
              />
             

              <br />
              <small>
                <span
                  style={{
                    fontWeight: "bold",
                    color: strengthColor,
                  }}
                >
                  {strength}
                </span>
              </small>
            </div>
            <div className="acceptTC">
              <h4>
                By signing up, you agree to the
                <a href="https://www.yahoo.com">Terms of Service </a>
                and acknowledge the
                <a href="https://www.google.com">Privacy Policy.</a>
              </h4>
            </div>
            <button disabled={isLoading} className="form__button">
              {" "}
              <div className="rectangle4">
                <h4 className="signIn1">Signup</h4>
              </div>
            </button>

            <div className="signUp">
              <h4>
                Already have an account?
                <Link to="/Login">Sign in</Link>
              </h4>
            </div>
            {error && <div className="error">{error}</div>}
          </form>
        </div>
      </div>
      <footer className="footer">
        <p>
          The site is protected by reCAPTCHA and the Google{" "}
          <a href="https://www.google.com">Privacy Policy</a> and{" "}
          <a href="https://www.yahoo.com">Terms of Conditions</a> apply.
        </p>
      </footer>
    </div>
  );
}

