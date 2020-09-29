import React from 'react'

const Weather = (props) => {
    //found time stuff on freecodecamp forums
    let sunrise = props.weather.sys.sunrise;
    let sunset = props.weather.sys.sunset
    let sunUp = new Date(sunrise*1000).toString();
    let sunDown = new Date(sunset*1000).toString();

    let main = props.weather.main
    const currentTemp = () => {
        if (props.weather.main.temp > 90){
            return <h1 style={{color: "red"}}>{props.weather.main.temp}</h1>
        } else if (props.weather.main.temp < 40){
            return <h1 style={{color: "blue"}}>{props.weather.main.temp}</h1>
        } else {
            return <h1>{props.weather.main.temp}</h1>
        }
    }
   
    
    console.log('this is props.weather', props.weather.weather)

    return(
        <div className='weather-info' >
            <h1>{props.weather.name}</h1>
            {currentTemp()}
            <h4>{props.weather.weather[0].description}</h4>
            <h4>Min temp: {main.temp_min}</h4>
            <h4>Max temp: {main.temp_max}</h4>
    <h4>Sunrise: {sunUp}</h4>
    <h4>Sunrise: {sunDown}</h4>
        </div>
    )
}

export default Weather