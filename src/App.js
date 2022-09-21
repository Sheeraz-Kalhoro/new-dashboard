// import logo from "./logo.svg";
import React, { useState } from 'react'
import "./App.css";
import axios from 'axios'
// import {getWeatherNews} from './api/axiosapicall'
import { Routes, Route, Link} from "react-router-dom";
import Dashboard from './pages/Dashboard' 
import Weather from './pages/Weather' 
import About from './pages/About' 
import Crypto from './pages/Crypto' 
import Settings from './pages/Settings' 
import WeatherC from './components/Weather'
import Profile from './pages/Profile'

function App() {
 
  return (
        <div className="App">
          
          {/* <WeatherC weatherData={weatherNews} /> */}
          {/* <h1>lorem ipsum</h1>
          <p>
            lorem ipsum30 fgdfgdfsg sdfgds ffsg sdfhsf sfdsgsfdh gj adst ger dhf
            sfdffd
          </p> */}
        <Routes>
          <Route path='/' element={<Dashboard />}/>
          <Route path='weather' element={<Weather />}/>
          <Route path='crypto' element={<Crypto />}/>
          <Route path='about' element={<About />}/>
          <Route path='settings' element={<Settings />}/>
          <Route path='profile' element={<Profile />}/>
        </Routes>
        </div>
  );
}

export default App;
