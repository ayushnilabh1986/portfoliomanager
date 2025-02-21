import "./App.scss";
import { SignUp } from "../src/pages/SignUp.js";
import { Login } from "../src/pages/Login.js";
import { ForgotPassword } from "../src/pages/ForgotPassword.js";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import { useAuthContext } from "../src/hooks/useAuthContext.js";
import { Navbar } from "./../src/components/Navbar.js";
import { Home } from "../src/pages/Home.js";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
// import { useToken } from '../src/components/useToken.js';

import ReactDOM from "react-dom/client";

function App() {
  const { user } = useAuthContext();
  //const { token, setToken } = useToken();



  // if(!token) {
  //   return <Login setToken={setToken} />
  // }







  return (
    <div className="App">

      <div className="pages">
        <Routes>
        <Route 
              path="/"
              element={<Login />}
            />
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />

          <Route path="/SignUp" element={<SignUp />} />

          <Route path="/ForgotPassword" element={<ForgotPassword />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;

{
  /* <ul>
          
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/SignUp">SignUp</Link>
          </li>
          <li>
            <Link to="/ForgotPassword">ForgotPassword</Link>
          </li>
        </ul>
       */
}
{
  /* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */
}

/*-----
{/* 
<div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/"
              element={<Home />}
            />
            <Route 
              path="/login" 
              element={<Login />} 
            />
            <Route 
              path="/signup" 
              element={<Signup />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App; 
-------------------*/
