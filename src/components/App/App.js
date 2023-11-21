//Kevin Blackmon
//11.19.2023

import Reach, { Component } from "react";
import {
    Route, Routes,
    NavLink,
    HashRouter
} from "react-router-dom";
import './App.css';
import Home from "../Home/Home.js";
import Contact from "../Contact/Contact.js";
import Offer from "../Offer/Offer.js";

import logo from './syc_story.jpg';

function App() {
  return (

          <HashRouter>
            <div>
              <div id="header-bg">
                <h1>Syc Nature Park, LLC</h1>
              </div>
                <ul className="header">
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/contact">Contact</NavLink></li>
                  <li><NavLink to="/offer">Offer</NavLink></li>
              </ul>
              <div id="syc-img">
                <img src={logo} className="App-logo" alt="logo" />
              </div>
              <div className="content">
                  <Routes>
                      <Route path="/" element={<Home />}/>
                      <Route path="/contact" element={<Contact/>}/>
                      <Route path="/offer" element={<Offer/>}/>
                  </Routes>
              </div>
            </div>
            
          </HashRouter>
        
  );
}

export default App;
