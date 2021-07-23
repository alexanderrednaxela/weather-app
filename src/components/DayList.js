import React, { useState, useEffect } from 'react';
import Day from './Day';

const DayList = (props) => {
    
    const [dailyData, setDailyData] = useState([]);
    
    useEffect(() => setData()) 

    const setData = () => {
        setDailyData(
            props.data.list.filter(data => data.dt_txt.includes('15:00:00'))
        )
    }

    return(
        <div className="dayListContainer">
            <h2>5 day forecast</h2>
                <div className="dayContainer">  
                    {
                        dailyData.map(day => <Day {...day} key={day.dt_txt} />)
                    }
                </div>
        </div>
    );
}

export default DayList;   