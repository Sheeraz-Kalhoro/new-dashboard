import React from "react";
import { useState, useEffect } from "react";
// import axios from 'axios'
// import {getWeatherNews} from '../api/axiosapicall'
const Weather = (props) => {
  // const [weather, setWeather] = useState('')
  // console.log(props.weathernews)
  // useEffect(() => {
  //   setWeather(props.weathernews)
  // }, [])

  return (
    <div className="weather">
      {props.weatherData !== undefined && (
        <div className="temp-icon">
          <img
            src={props.weatherData.current.condition.icon}
            alt="weather-icon"
            width="30px"
          />
          <h3>{props.weatherData.current.temp_c}&deg;C</h3>
          <span>{props.weatherData.current.condition.text+' in '+ props.weatherData.location.name}</span>
        </div>
      )}
   
    </div>
  );
};

export default Weather;
