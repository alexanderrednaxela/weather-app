import React from 'react';


const CurrentWeather = (props) => {

    return (
        <div className="currentWeather"> 
            <div className="weatherInfo">Temperature: <span>{props.data.list[0].main.temp}°<h4>&nbsp;C</h4></span></div>
            <div className="weatherInfo">Humidity: <span>{props.data.list[0].main.humidity}<h4>&nbsp;%</h4></span></div>
            <div className="weatherInfo">Wind: <span>{props.data.list[0].wind.speed}<h4>&nbsp;km/h</h4></span></div>
        </div>
    ); 
} 

export default CurrentWeather;