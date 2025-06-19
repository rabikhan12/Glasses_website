import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Content from "./Components/Dashboard"; 
import { Routes, Route } from "react-router-dom";
import Sun from "./Components/Sun";
import Opticallist from "./Components/Opticallist";
import Antiradlist from "./Components/Antiradlist";
import UploadimageScreen from './Components/UploadimageScreen'
const App = () => {
  return (
    <>
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/sunn" element={<Sun />} />
        <Route path="/optical" element={<Opticallist />} />
                <Route path="/antirad" element={<Antiradlist />} />
<Route path="/upload image" element={<UploadimageScreen />} />

      </Routes>
   

    </>
  );
};

export default App;
