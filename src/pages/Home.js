import "./../App.js";

import React from "react";
import { SignUp } from "./SignUp.js";
import { Login } from "./Login.js";
import { ForgotPassword } from "./ForgotPassword.js";
import ReactDOM from "react-dom/client";

import { Routes, Route, Link, useLocation } from "react-router-dom";
import googleLogo from "./asset/google.webp";

import { Navbar } from "../components/Navbar.js";
//import { useEffect } from "react";
//import { useWorkoutsContext } from "../hooks/useWorkoutsContext.js";

// components
import WorkoutDetails from "../components/WorkoutDetails.js";

import { useAuthContext } from "../hooks/useAuthContext.js";

// components
//import WorkoutForm from '../components/WorkoutForm'

export function Home() {
 // const { workouts, dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();
  const Email = user.email;

  // useEffect(() => {
  //   const fetchWorkouts = async () => {
  //     const response = await fetch("/api/workouts", {
  //       headers: { Authorization: `Bearer ${user.token}` },
  //     });
  //     const json = await response.json();

  //     if (response.ok) {
  //      // dispatch({ type: "SET_WORKOUTS", payload: json });
  //     }
  //   };
  //   if (user) {
  //     fetchWorkouts();
  //   }
  // }, [dispatch, user]);

  return (
    <div className="home">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="box">
        <h3> {Email} Successfully Logged In! </h3>
        <p>Welcome to the Portfolio Manager Dashboard</p>
      </div>
    </div>
  );
}
