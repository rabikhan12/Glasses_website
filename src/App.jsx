import React from 'react';
import './App.css'
import Navbar from './Components/Navbar'
import Content from './Components/Content'
import Footer from './Components/Footer';
import { Routes, Route } from "react-router-dom"
import Sunn from "./Components/Sunn"

function App() {
  
  return (

  <>
    <Navbar/>
       <Content/>
       <Routes>
        <Route path="/sunn" element={<Sunn />} />
       </Routes>

    <Footer/>
    </>
  )
}

export default App
