import React, {useState} from 'react';
import './App.css';
import Form from './components/Form'
import Weather from './components/Weather'

function App() {

const [weather, setWeather] = useState()
const [buttonClicked, setButtonClicked] = useState(false)


const weatherData = async (zipcode) => {
  let zip = zipcode
  setButtonClicked(true)
  console.log('lifted zipcode', zipcode)
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&appid=98d94118d32e1ec9f5ac702c24ff9bbb`)
  const data = await response.json()
  console.log('this is attempt', data)
  setWeather(data)
}

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <h2>Enter Zip Code</h2>
      <Form weatherData={weatherData} />
      {weather ? <Weather weather={weather} buttonClicked={buttonClicked}/> : ''}
    </div>
  );
}

export default App;
