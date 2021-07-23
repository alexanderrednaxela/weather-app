import React from 'react';
import Moment from 'react-moment';


const Day = (props) => {

    //const myDate = new Date(props.dt_txt);

    return (
        <div className="dayCard">
            <Moment className="date" format="ddd DD MMMM">{props.dt_txt}</Moment>
            <div className="dayCardInfo">Temperature: <span>{props.main.temp}° C</span></div>
            <div className="dayCardInfo">Humidity: <span>{props.main.humidity}%</span></div>
            <div className="dayCardInfo">Wind: <span>{props.wind.speed} km/h</span></div>
        </div>
    );
}

export default Day;