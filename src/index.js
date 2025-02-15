import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router} from "react-router";
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { ForgotPassword } from './pages/ForgotPassword';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App  from './../src/App';
import { WorkoutsContextProvider } from './context/WorkoutContext'
import { AuthContextProvider } from './context/AuthContext'
import { BrowserRouter } from 'react-router-dom'

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";




const router = createBrowserRouter(
  createRoutesFromElements(
    <>
       
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
  <BrowserRouter>

  <React.StrictMode>
  <AuthContextProvider>
    <WorkoutsContextProvider>
      <App />
    </WorkoutsContextProvider>
  </AuthContextProvider>
</React.StrictMode>
</BrowserRouter>

);
reportWebVitals();
