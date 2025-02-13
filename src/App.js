import "./App.css";
import { SignUp } from "../src/pages/SignUp.js";
import { Home } from "../src/pages/Home.js";
import { SignIn }from "../src/pages/SignIn.js";
import { ForgotPassword } from "../src/pages/ForgotPassword.js";


import React from "react";

import { Routes, Route, Link } from "react-router-dom";

 function App() {
  return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">{ Home }</Link>
            </li>
            <li>
              <Link to="/SignIn">{ SignIn }</Link>
            </li>
            <li>
              <Link to="/SignUp">{ SignUp }</Link>
            </li>
            <li>
              <Link to="/ForgotPassword">{ ForgotPassword }</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
        <Route path='/SignIn' element={<SignIn />} />         

        <Route path='/SignUp' element={<SignUp />} />          

        <Route path='/' element={<Home />} />          

        
            <Route path='/ForgotPassword' element={<ForgotPassword />} />

        </Routes>
      </div>
  );
}
export default App;
