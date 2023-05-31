import React from 'react';



function WeatherDay(props) {
    return (
        <>
        <p>{props.description}</p>
        <h1>{props.date}</h1>
    </>
    )
}

export default WeatherDay