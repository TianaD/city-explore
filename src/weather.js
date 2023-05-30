import React from 'react';


function Weather(props) {
    let weatherHTML = props.weatherData.map(function (element) {
        return (
            <>
                <p>{element.description}</p>
                <h1>{element.date}</h1>
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