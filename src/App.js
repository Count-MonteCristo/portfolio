// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import { inject } from "@vercel/analytics";


const App = () => {
  inject();

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/portfolio"
          element={<Portfolio />}
        />
      </Routes>
    </Router>
  );
};

export default App;
