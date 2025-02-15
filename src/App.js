import "./App.scss";
import { SignUp } from "../src/pages/SignUp.js";
import { Home } from "../src/pages/Home.js";
import { SignIn } from "../src/pages/SignIn.js";
import { ForgotPassword } from "../src/pages/ForgotPassword.js";
import { BrowserRouter, Routes, Route, Navigate,Link } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'



import ReactDOM from "react-dom/client";
import JoinForm  from "./components/JoinForm.js";

import React from "react";


function App() {
  const { user } = useAuthContext()

  return (
    <div>
     
        <ul>
          <li>
            <Link to="/">{Home}</Link>
          </li>
          <li>
            <Link to="/SignIn">{SignIn}</Link>
          </li>
          <li>
            <Link to="/SignUp">{SignUp}</Link>
          </li>
          <li>
            <Link to="/ForgotPassword">{ForgotPassword}</Link>
          </li>
        </ul>
      
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
     
        
          <Routes>
        <Route path="/SignIn" element={<SignIn />} />

        <Route path="/SignUp" element={<SignUp />} />

        <Route path="/" element={<Home />} />

        <Route path="/ForgotPassword" element={<ForgotPassword />} />
      </Routes>

    </div>
  );
}

export default App;