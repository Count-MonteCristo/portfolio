// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/portfolio"
          element={<Portfolio />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
      </Routes>
    </Router>
  );
};

export default App;
