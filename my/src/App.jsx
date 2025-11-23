import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Work from "./pages/Work";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Connect from "./pages/Connect";

import Footer from "./components/Footer";

const Trackers = () => {
  const location = useLocation();
  return (
    <>
      <Analytics />      
      <SpeedInsights />   
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>

      <Footer />

      <Trackers />
    </Router>
  );
};

export default App;
