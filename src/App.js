import { useState, useEffect } from "react";
import React, { Components } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Portfolio from "./Components/Portfolio";

function App() {
  return (
    <Router>
      
        <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Portfolio" exact element={<Portfolio />} />
          </Routes>
      
    </Router>
  );
}

export default App;
