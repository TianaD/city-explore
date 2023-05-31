import React from 'react';
import WeatherDay from './weatherDay';


function Weather(props) {
    let weatherHTML = props.weatherData.map(function (element) {
        return (
            <>
               <WeatherDay date={element.date} description={element.description} />
            </>
        )


    })
    return (
        <>
            {weatherHTML}
        </>
    )
}

export default Weather