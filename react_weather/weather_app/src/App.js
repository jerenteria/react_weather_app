import './App.css';
import React, { useState } from 'react';
import { sunnyPic, humidityPic, partiallyCloudy, rainingPic, windPic } from './images';


const API = {
  key: 'a2346379e1f200c494582d117587f3cd',
  base: 'https://api.openweathermap.org/data/2.5/',
};

function App() {
  // get the json response object and store it in state as an empty object
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});


  async function getWeather(event) {
    event.preventDefault();

    await fetch(`${API.base}weather?q=${search}&units=imperial&appid=${API.key}`)
      .then(response => response.json())
      .then((data) => setWeather(data));

  }



  return (
    <div className="App">
      <div className="Card">
        <form className="search">
          <input
            type="search"
            className="search"
            placeholder=" Enter A City Name..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="search-button" onClick={getWeather}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="44" height="44"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
          </button>
        </form>
        {/* if any elements in weather.main are defined then render the following */}
        {typeof weather.main != "undefined" ?
          <div className="weather">
            {weather.weather[0].main === 'Clear' && (
              <img src={sunnyPic} alt="weather-pic" height="250px" />
            )}
            {weather.weather[0].main === 'Rain' && (
              <img src={rainingPic} alt="weather-pic" height="250px" />
            )}
            {weather.weather[0].main === 'Clouds' && (
              <img src={partiallyCloudy} alt="weather-pic" height="250px" />
            )}
            {/* <img src={sunnyPic} alt="weather-pic" height="250px" /> */}
            <h2 className="city">{weather.name}</h2>
            <h2 className="temp"> {weather.main.temp} °F</h2>
            <div className="weather-details">
              <div className="col">
                <img src={humidityPic} alt="humidity-pic" />
              </div>
              <div className="humidity">
                <p className="humidity-level">Humidity: {weather.main.humidity} %</p>
              </div>
              <div className="col">
                <img src={windPic} alt="wind-pic" />
              </div>
              <div className="wind">
                <p className="wind-speed">Wind Speed: {weather.wind.speed} MPH</p>
              </div>
            </div>
          </div>
          //  if the elemets are UNDEFINED then dont render anything
          :
          ""
        }

      </div>
    </div>
  );
}

export default App;
