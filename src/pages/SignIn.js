import './../App.js';
import { useState } from "react"
import { useLogin } from "../hooks/useLogin"
import React from "react";
import { SignUp } from "./SignUp.js";
import { ForgotPassword } from "./ForgotPassword.js";
import ReactDOM from 'react-dom/client';


import { Routes, Route, Link, useLocation } from "react-router-dom";
import googleLogo from "./asset/google.webp";




export  function SignIn() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
  }
  return (
    <div className="App">
      <header>
        <h3 className="terolo"> Portfolio Manager </h3>
      </header>
      <div className="box">
        <div id="box1">
          <h2 className="signIn">Sign in</h2>
          <div className="rectangle">
            <img className="photo" src={googleLogo} alt="react logo" />

            <h4 className="google">Google</h4>
          </div>

          <form action="SignIn" className="form" onSubmit={handleSubmit}>
            <hr className="line1" />
            <h1 className="form__title">Or sign in with Email</h1>
            <hr className="line2" />

            <div className="form__group">
            <label htmlFor="email" className="form__label">
                Email
              </label>
               <input
                type="email"
                id="email"
                className="form__input"
                placeholder=" "
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
                placeholder="Enter your password"
                onChange={(e) =>setPassword(e.target.value)}
                value={password}
              />
              
            </div>
            <div className="rememberMe">
              <input
                type="checkbox"
                value="1"
                id="rememberMe"
                name="rememberMe"
              />

              <label>
                <h4 className="remember">
                  Remember me
                  <div className="forgotPassword">
                  <Link to="/ForgotPassword">Forgot Password?</Link>

                    
                  </div>
                </h4>
              </label>
              </div>


            <button disabled={isLoading} className="form__button">
            <div className="rectangle4">
              <h4 className="signIn1">Signin</h4>
              </div>
              </button>      {
      error && <div className="error">{error}</div>
      }
  

           
            
          </form>

          <div className="signUp">
            <h4>
              Don't have an account?
              <Link to="/SignUp">Signup for free</Link>

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
