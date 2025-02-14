import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router} from "react-router";
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { ForgotPassword } from './pages/ForgotPassword';
import { Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";




const router = createBrowserRouter(
  createRoutesFromElements(
    <>
        <Route path="/" element={ <Home /> }>
        </Route>
        <Route path="/SignIn" element={ <SignIn /> }>
        </Route>
        <Route path="/SignUp" element={ <SignUp /> }>
        </Route>
        <Route path="/ForgotPassword" element={ <ForgotPassword /> }>
        </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
















// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
