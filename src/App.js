import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componenets/navbar";
import Home from "./pages/home";
import Projects from "./pages/project";
import Contact from "./pages/conact";
import "./App.css";

function App() {
  return (
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;