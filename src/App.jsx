import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Content from "./Components/Dashboard";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import Sunn from "./Components/Sunn";
import Optical from "./Components/Optical";

const App = () => {
  return (
    <>
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/sunn" element={<Sunn />} />
        <Route path="/optical" element={<Optical />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
