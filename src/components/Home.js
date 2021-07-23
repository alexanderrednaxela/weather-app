import React from 'react';
import Title from './Title';
import CurrentWeather from './CurrentWeather';
import DayList from './DayList';

const Home = (props) => {
    return (
        <div className="contentWrapper">
            <Title cityName={props.cityName} />
            <CurrentWeather data={props} />
            <DayList data={props} />
        </div>

    );
}

export default Home;  