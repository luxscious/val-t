import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import SignUp from "./pages/SignUp.js";
import Leaderboard from "./pages/Leaderboard.js";
import Tournaments from "./pages/Tournaments.js";
import Profile from "./pages/Profile.js";
import Navbar from "./components/Navbar";

ReactDOM.render(
  <BrowserRouter>
    <Navbar />
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
