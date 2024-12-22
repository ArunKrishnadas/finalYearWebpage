import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BrainMLPage from "./Components/BrainMLPage";
import PneumoniaMLPage from "./Components/PneumoniaMLPage";
import CKDMLPage from "./Components/CKDMLPage";
import "./App.css";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/brain" element={<BrainMLPage />} />
        <Route path="/pneumonia" element={<PneumoniaMLPage />} />
        <Route path="/ckd" element={<CKDMLPage />} />
      </Routes>
    </Router>
  );
};

export default App;
