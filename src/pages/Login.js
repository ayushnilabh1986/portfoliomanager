import './../App.js';
import { useState } from "react"
import { useLogin } from "../hooks/useLogin"
import React from "react";
import { SignUp } from "./SignUp.js";
import { ForgotPassword } from "./ForgotPassword.js";
import ReactDOM from 'react-dom/client';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import { Routes, Route, Link, useLocation } from "react-router-dom";
import googleLogo from "./asset/google.webp";

import {useAuthContext} from "./../hooks/useAuthContext.js"
import { useNavigate } from "react-router-dom";
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export  function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {Login, error, isLoading} = useLogin()
  const navigate = useNavigate();

 
  async function handleSubmit(event) {

    event.preventDefault();

    await Login(email, password)
   // navigate("/Home");

  



  
  
}
  return (
    <div className="App">
      
      <div className="box">
        <div id="box1">
          <h2 className="signIn">Sign in</h2>
          <div className="rectangle">
            <img className="photo" src={googleLogo} alt="react logo" />

            <h4 className="google">Google</h4>
          </div>

          <form action="Login" className="form" onSubmit={handleSubmit}>
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
            <FormGroup className='remember'>
      <FormControlLabel control={<Checkbox defaultChecked />} label= "Remember me" />
          </FormGroup>

                  <div className="forgotPassword">
                  <Link to="/ForgotPassword">Forgot Password?</Link>

                    
                  </div>
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