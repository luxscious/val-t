import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import Leaderboard from "./Leaderboard";
import Tournaments from "./Tournaments";
import Profile from "./Profile";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/tournaments" element={<Tournaments />} />
      <Route path="/profile/:username" element={<Profile />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
